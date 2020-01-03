const canvas = document.querySelector('#canvas');
canvas.width = canvas.height = 50;
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
    layout(location=0) out vec4 fragColor;
    layout(location=0) in vec3 v_color;
    void main(){
        fragColor = vec4(v_color, 1);
    }
`;

const context = canvas.getContext('gpupresent');

const swapChainFormat = "bgra8unorm";

const swapChain = context.configureSwapChain({
    device,
    format: swapChainFormat,
});

const pointsArray = [0, 0, 0.5, 0.5, 0.6];

function render() {
    const commandEncoder = device.createCommandEncoder({});
    const textureView = swapChain.getCurrentTexture().createView();

    const renderPassDescriptor = {
        colorAttachments: [{
            attachment: textureView,
            loadValue: {
                r: 0,
                g: 0,
                b: 0,
                a: 1
            },
        }],
    };

    const pointsData = new Float32Array(pointsArray);
    const verticesBuffer = device.createBuffer({
        size: pointsData.byteLength,
        usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST
    });
    verticesBuffer.setSubData(0, pointsData);

    const pipeline = device.createRenderPipeline({
        vertexStage: {
            module: device.createShaderModule({
                code: glslang.compileGLSL(vs, "vertex")
            }),
            entryPoint: "main"
        },
        fragmentStage: {
            module: device.createShaderModule({
                code: glslang.compileGLSL(fs, "fragment")
            }),
            entryPoint: "main"
        },
        primitiveTopology: "point-list",
        colorStates: [{
            format: swapChainFormat
        }],
        vertexState: {
            vertexBuffers:[{
                arrayStride: 5 * 4,
                attributes:[{
                    shaderLocation: 0,
                    offset: 0,
                    format: "float2"
                },{
                    shaderLocation: 1,
                    offset: 2 * 4,
                    format: "float3"
                }]
            }]
        }
    });

    const passEncoder = commandEncoder.beginRenderPass(renderPassDescriptor);
    passEncoder.setPipeline(pipeline);
    passEncoder.setVertexBuffer(0, verticesBuffer);
    passEncoder.draw(pointsArray.length/5, 1, 0, 0);
    passEncoder.endPass();

    device.defaultQueue.submit([commandEncoder.finish()]);
}

render();

canvas.onclick = function(e){
    var x = e.clientX / 500;
    var y = 1 - e.clientY / 500;

    // pos
    pointsArray.push(x * 2 - 1);
    pointsArray.push(y * 2 - 1);

    // color
    pointsArray.push(Math.random());
    pointsArray.push(Math.random());
    pointsArray.push(Math.random());

    render();
};