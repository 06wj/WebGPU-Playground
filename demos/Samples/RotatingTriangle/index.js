const canvas = document.querySelector('#canvas');
canvas.width = canvas.height = 500;
canvas.style = 'width:500px;height:500px';
const adapter = await navigator.gpu.requestAdapter();
const device = await adapter.requestDevice();
const glslang = await glslangModule();

const vs = `#version 450
    layout(location=0) in vec2 a_position;
    layout(set=0,binding=0) uniform Uniforms{
        mat3 modelMatrix;
    } uniforms;
    void main(){
        vec3 pos =  uniforms.modelMatrix * vec3(a_position, 0.0);
        gl_Position = vec4(pos, 1);
    }
`;

const fs = `#version 450
    precision highp float;
    layout(location=0) out vec4 fragColor;
    void main(){
        fragColor = vec4(0.9, 0.3, 0.6, 1);
    }
`;

const context = canvas.getContext('gpupresent');

const swapChainFormat = 'bgra8unorm';

const swapChain = context.configure({
    device,
    format: swapChainFormat,
});

const uniformBufferSize = 4 * 12;
const uniformBuffer = device.createBuffer({
    size: uniformBufferSize,
    usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,
});

const uniformsBindGroupLayout = device.createBindGroupLayout({
    entries: [{
        binding: 0,
        visibility: GPUShaderStage.VERTEX,
        buffer: {}
    }]
});

const uniformBindGroup = device.createBindGroup({
    layout: uniformsBindGroupLayout,
    entries: [{
        binding: 0,
        resource: {
            buffer: uniformBuffer,
        },
    }],
});

const pipelineLayout = device.createPipelineLayout({ 
    bindGroupLayouts: [uniformsBindGroupLayout] 
});

const verticesData = new Float32Array([
    0, 0,
    -0.05, -0.65,
    0.15, -0.8,
]);
const verticesBuffer = device.createBuffer({
    size: verticesData.byteLength,
    usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST,
    mappedAtCreation: true
});
new Float32Array(verticesBuffer.getMappedRange()).set(verticesData);
verticesBuffer.unmap();

const pipeline = device.createRenderPipeline({
    layout: pipelineLayout,
    vertex: {
        module: device.createShaderModule({
            code: glslang.compileGLSL(vs, 'vertex')
        }),
        entryPoint: 'main',
        buffers: [{
            arrayStride: 2 * 4,
            attributes:[{
                shaderLocation: 0,
                offset: 0,
                format: 'float32x2'
            }]
        }]
    },
    fragment: {
        module: device.createShaderModule({
            code: glslang.compileGLSL(fs, 'fragment')
        }),
        entryPoint: 'main',
        targets: [{
            format: swapChainFormat
        }]
    },
    primitive:{
	topology: 'triangle-list'
},
});

const modelMatrix = new Hilo3d.Matrix3();
const modelMatrixData = new Float32Array(12);
function getModelMatrix(){
    modelMatrix.rotate(-30/180*Math.PI);
    const elements = modelMatrix.elements;
    modelMatrixData.set(elements);
    modelMatrixData.copyWithin(8, 6, 9);
    modelMatrixData.copyWithin(4, 3, 6);
    return modelMatrixData;
}

function render() {
    const commandEncoder = device.createCommandEncoder({});
    const textureView = context.getCurrentTexture().createView();
    const renderPassDescriptor = {
        colorAttachments: [{
            view: textureView,
            loadValue: {
                r: 0.3,
                g: 0.6,
                b: 0.9,
                a: 1
            },
        }],
    };
    device.queue.writeBuffer(uniformBuffer, 0, getModelMatrix());

    const passEncoder = commandEncoder.beginRenderPass(renderPassDescriptor);
    passEncoder.setPipeline(pipeline);
    passEncoder.setBindGroup(0, uniformBindGroup);
    passEncoder.setVertexBuffer(0, verticesBuffer);
    passEncoder.draw(3, 1, 0, 0);
    passEncoder.endPass();

    device.queue.submit([commandEncoder.finish()]);
}

const ticker = new Hilo3d.Ticker(60);
ticker.start();
ticker.addTick({
    tick(){
        render();
    }
});