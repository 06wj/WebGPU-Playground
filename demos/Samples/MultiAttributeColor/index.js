const canvas = document.querySelector('#canvas');
canvas.width = canvas.height = 500;
canvas.style = 'width:500px;height:500px';
const adapter = await navigator.gpu.requestAdapter();
const device = await adapter.requestDevice();
const glslang = await glslangModule();

const vs = `#version 450
    layout(location=0) in vec2 a_position;
    layout(location=1) in vec3 a_color;
    layout(location=0) out vec3 v_color;
    void main(){
        gl_Position = vec4(a_position, 0, 1);
        v_color = a_color;
    }
`;

const fs = `#version 450
    precision highp float;
    layout(location=0) in vec3 v_color;
    layout(location=0) out vec4 fragColor;
    void main(){
        fragColor = vec4(v_color, 1);
    }
`;

const context = canvas.getContext('gpupresent');

const swapChainFormat = 'bgra8unorm';

const swapChain = context.configure({
    device,
    format: swapChainFormat,
});

const verticesData = new Float32Array([
    0, 0.8, 1, 0, 0,
    -0.8, -0.8, 0, 1, 0,
    0.8, -0.8, 0, 0, 1
]);
const verticesBuffer = device.createBuffer({
    size: verticesData.byteLength,
    usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST,
    mappedAtCreation: true
});
new Float32Array(verticesBuffer.getMappedRange()).set(verticesData);
verticesBuffer.unmap();

const pipeline = device.createRenderPipeline({
    vertex: {
        module: device.createShaderModule({
            code: glslang.compileGLSL(vs, 'vertex')
        }),
        entryPoint: 'main',
        buffers: [{
            arrayStride: 5 * 4,
            attributes:[{
                shaderLocation: 0,
                offset: 0,
                format: 'float32x2'
            },{
                shaderLocation: 1,
                offset: 2 * 4,
                format: 'float32x3'
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

function render() {
    const commandEncoder = device.createCommandEncoder({});
    const textureView = context.getCurrentTexture().createView();
    const renderPassDescriptor = {
        colorAttachments: [{
            view: textureView,
            loadValue: {
                r: 0,
                g: 0,
                b: 0,
                a: 1
            },
        }],
    };    

    const passEncoder = commandEncoder.beginRenderPass(renderPassDescriptor);
    passEncoder.setPipeline(pipeline);
    passEncoder.setVertexBuffer(0, verticesBuffer);
    passEncoder.draw(3, 1, 0, 0);
    passEncoder.endPass();

    device.queue.submit([commandEncoder.finish()]);
}

render();