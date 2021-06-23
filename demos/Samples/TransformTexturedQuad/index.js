const canvas = document.querySelector('#canvas');
canvas.width = canvas.height = 500;
canvas.style = 'width:500px;height:500px';
const adapter = await navigator.gpu.requestAdapter();
const device = await adapter.requestDevice();
const glslang = await glslangModule();

const vs = `#version 450
    layout(set=0,binding=3) uniform Uniforms{
        mat3 modelMatrix;
    } uniforms;
    layout(location=0) in vec2 a_position;
    layout(location=1) in vec2 a_uv;

    layout(location=0) out vec2 v_uv;

    void main(){
        vec3 pos = uniforms.modelMatrix * vec3(a_position, 1);
        gl_Position = vec4(pos, 1);
        v_uv = a_uv;
    }
`;

const fs = `#version 450
    precision highp float;
    layout(set=0, binding=0) uniform sampler u_sampler;
    layout(set=0, binding=1) uniform texture2D u_texture0;
    layout(set=0, binding=2) uniform texture2D u_texture1;
    layout(location=0) in vec2 v_uv;

    layout(location=0) out vec4 fragColor;

    void main(){
        vec4 color0 = texture(sampler2D(u_texture0, u_sampler), v_uv);
        vec4 color1 = texture(sampler2D(u_texture1, u_sampler), v_uv);
        fragColor = color0 * color1;
    }
`;

const context = canvas.getContext('gpupresent');

const swapChainFormat = 'bgra8unorm';

const swapChain = context.configure({
    device,
    format: swapChainFormat,
});

const verticesData = new Float32Array([
    //position      color   uv
    -0.8, -0.8, 1,  0, 0,   0, 0,
    -0.8, 0.8, 0,   1, 0,   0, 1,
    0.8, -0.8, 1,   0, 1,   1, 0,
    0.8, 0.8, 0,    0, 1,   1, 1
]);
const verticesBuffer = device.createBuffer({
    size: verticesData.byteLength,
    usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST,
    mappedAtCreation: true
});
new Float32Array(verticesBuffer.getMappedRange()).set(verticesData);
verticesBuffer.unmap();

const [texture0, texture1] = await Promise.all([
    helpers.createTextureFromImage(device, './images/head.png', GPUTextureUsage.SAMPLED),
    helpers.createTextureFromImage(device, './images/circle.gif', GPUTextureUsage.SAMPLED),
]);
const sampler = device.createSampler({
    magFilter: 'linear',
    minFilter: 'linear',
});

const uniformBufferSize = 4 * 12;
const uniformBuffer = device.createBuffer({
    size: uniformBufferSize,
    usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,
});

const bindGroupLayout = device.createBindGroupLayout({
    entries: [{
        binding: 0,
        visibility: GPUShaderStage.FRAGMENT,
        sampler: {}
    }, {
        binding: 1,
        visibility: GPUShaderStage.FRAGMENT,
        texture: {}
    }, {
        binding: 2,
        visibility: GPUShaderStage.FRAGMENT,
        texture: {}
    },{
        binding: 3,
        visibility: GPUShaderStage.VERTEX,
        buffer: {}
    }]
});

const uniformBindGroup = device.createBindGroup({
    layout: bindGroupLayout,
    entries: [{
        binding: 0,
        resource: sampler,
    }, {
        binding: 1,
        resource: texture0.createView(),
    },{
        binding: 2,
        resource: texture1.createView(),
    },{
        binding: 3,
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
            code: glslang.compileGLSL(vs, 'vertex')
        }),
        entryPoint: 'main',
        buffers: [{
            arrayStride: 7 * 4,
            attributes:[{
                shaderLocation: 0,
                offset: 0,
                format: 'float32x2'
            },{
                shaderLocation: 1,
                offset: 5 * 4,
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
    primitive: {
        topology: 'triangle-strip',
        stripIndexFormat: 'uint16'
    }
});

const renderPassDescriptor = {
    colorAttachments: [{
        view: null,
        loadValue: {
            r: 0,
            g: 0,
            b: 0,
            a: 1
        },
    }],
};  

const modelMatrix = new Hilo3d.Matrix3();
const modelMatrixData = new Float32Array(12);
function getModelMatrix(){
    modelMatrix.rotate(-3/180*Math.PI);
    const elements = modelMatrix.elements;
    modelMatrixData.set(elements);
    modelMatrixData.copyWithin(8, 6, 9);
    modelMatrixData.copyWithin(4, 3, 6);
    return modelMatrixData;
}

function render() {
    renderPassDescriptor.colorAttachments[0].view = context.getCurrentTexture().createView();
    device.queue.writeBuffer(uniformBuffer, 0, getModelMatrix());

    const commandEncoder = device.createCommandEncoder({});
    const passEncoder = commandEncoder.beginRenderPass(renderPassDescriptor);
    passEncoder.setPipeline(pipeline);
    passEncoder.setBindGroup(0, uniformBindGroup);
    passEncoder.setVertexBuffer(0, verticesBuffer);
    passEncoder.draw(4, 1, 0, 0);
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