const canvas = document.querySelector('#canvas');
canvas.width = innerWidth;
canvas.height = innerHeight;
const adapter = await navigator.gpu.requestAdapter();
const device = await adapter.requestDevice();


const stage = new Hilo3d.Node();
const camera = new Hilo3d.PerspectiveCamera({
    aspect: innerWidth / innerHeight,
    far: 100,
    near: 0.1,
    z: 3
});

const boxGeometry = new Hilo3d.BoxGeometry();
boxGeometry.setAllRectUV([[0, 1], [1, 1], [1, 0], [0, 0]]);
const colorBox = new Hilo3d.Mesh({
    geometry: boxGeometry,
    material: new Hilo3d.BasicMaterial({
        diffuse: new Hilo3d.Color(0.8, 0, 0)
    }),
    onUpdate: function() {
        this.rotationX += .5;
        this.rotationY += .5;
    }
});

stage.addChild(camera);
stage.addChild(colorBox);

const vs = `
    struct Uniforms {
      u_modelViewProjectionMatrix : mat4x4<f32>
    };
    @group(0) @binding(0) var<uniform> uniforms : Uniforms;


    struct VertexOutput {
      @builtin(position) position : vec4<f32>
    };

    @vertex
    fn main(@location(0) a_position : vec3<f32>) -> VertexOutput {
      var output : VertexOutput;
      output.position = uniforms.u_modelViewProjectionMatrix * vec4<f32>(a_position, 1.0);
      return output;
    }
`;

const fs = `
    @fragment
    fn main() -> @location(0) vec4<f32> {
      return vec4<f32>(0.3, 0.9, 0.6, 1.0);
    }
`;

const context = canvas.getContext('webgpu');

const swapChainFormat = navigator.gpu.getPreferredCanvasFormat();

const swapChain = context.configure({
    device,
    format: swapChainFormat,
    alphaMode: "opaque",
});

const verticesData = boxGeometry.vertices.data;
const verticesBuffer = device.createBuffer({
    size: verticesData.byteLength,
    usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST,
    mappedAtCreation: true
});
new Float32Array(verticesBuffer.getMappedRange()).set(verticesData);
verticesBuffer.unmap();

const indicesData = boxGeometry.indices.data;
const indicesBuffer = device.createBuffer({
    size: indicesData.byteLength,
    usage: GPUBufferUsage.INDEX | GPUBufferUsage.COPY_DST,
    mappedAtCreation: true
});
new Uint16Array(indicesBuffer.getMappedRange()).set(indicesData);
indicesBuffer.unmap();

const uniformComponentCount = 16;
const uniformBufferSize = uniformComponentCount * 4;
const uniformBuffer = device.createBuffer({
    size: uniformBufferSize,
    usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
});

const bindGroupLayout = device.createBindGroupLayout({
    entries: [{
        binding: 0,
        visibility: GPUShaderStage.VERTEX,
        buffer: {}
    }]
});

const uniformBindGroup = device.createBindGroup({
    layout: bindGroupLayout,
    entries: [{
        binding: 0,
        resource: {
            buffer: uniformBuffer
        }
    }],
});

const pipelineLayout = device.createPipelineLayout({ bindGroupLayouts: [bindGroupLayout] });

const pipeline = device.createRenderPipeline({
    layout: pipelineLayout,
    vertex: {
        module: device.createShaderModule({
            code: vs
        }),
        entryPoint: 'main',
        buffers: [{
            arrayStride: 3 * 4,
            attributes:[{
                shaderLocation: 0,
                offset: 0,
                format: 'float32x3'
            }]
        }]
    },
    fragment: {
        module: device.createShaderModule({
            code: fs
        }),
        entryPoint: 'main',
        targets: [{
            format: swapChainFormat
        }]
    },
    primitive:{
    	topology: 'triangle-list',
        cullMode: 'back',
    },
});

const renderPassDescriptor = {
    colorAttachments: [{
        view: null,
        loadOp: 'clear',
        storeOp: 'store',
        clearValue: {
            r: 0,
            g: 0,
            b: 0,
            a: 1,
        }
    }],
};  

const vertexUniformData = new Float32Array(uniformComponentCount);
function getModelMatrix(){
    vertexUniformData.set(Hilo3d.semantic.MODELVIEWPROJECTION.get(colorBox), 0);
    return vertexUniformData;
}

function render() {
    renderPassDescriptor.colorAttachments[0].view = context.getCurrentTexture().createView();
    device.queue.writeBuffer(uniformBuffer, 0, getModelMatrix());

    const commandEncoder = device.createCommandEncoder({});
    const passEncoder = commandEncoder.beginRenderPass(renderPassDescriptor);
    passEncoder.setPipeline(pipeline);
    passEncoder.setBindGroup(0, uniformBindGroup);
    passEncoder.setIndexBuffer(indicesBuffer, 'uint16');
    passEncoder.setVertexBuffer(0, verticesBuffer);
    passEncoder.drawIndexed(boxGeometry.indices.count, 1, 0, 0, 0);
    passEncoder.end();

    device.queue.submit([commandEncoder.finish()]);
}

const ticker = new Hilo3d.Ticker(60);
ticker.start();
ticker.addTick({
    tick(dt){
        Hilo3d.semantic.init({}, {}, camera);
        stage.traverseUpdate(dt);
        stage.updateMatrixWorld();
        camera.updateViewProjectionMatrix();

        render();
    }
});