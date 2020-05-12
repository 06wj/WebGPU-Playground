const canvas = document.querySelector('#canvas');
canvas.width = canvas.height = 500;
canvas.style = 'width:500px;height:500px';
const adapter = await navigator.gpu.requestAdapter();
const device = await adapter.requestDevice();
const glslang = await glslangModule();

const vs = `#version 450
    layout(location=0) in vec2 a_position;
    layout(location=1) in vec3 a_color;
    layout(location=2) in vec2 a_uv;

    layout(location=0) out vec3 v_color;
    layout(location=1) out vec2 v_uv;

    void main(){
        gl_Position = vec4(a_position, 0, 1);
        v_color = a_color;
        v_uv = a_uv;
    }
`;

const fs = `#version 450
    precision highp float;
    layout(set=0, binding=0) uniform sampler u_sampler;
    layout(set=0, binding=1) uniform texture2D u_texture;
    layout(location=0) in vec3 v_color;
    layout(location=1) in vec2 v_uv;

    layout(location=0) out vec4 fragColor;

    void main(){
        vec4 color = texture(sampler2D(u_texture, u_sampler), v_uv);
        color.rgb *= v_color;
        fragColor = color;
    }
`;

const context = canvas.getContext('gpupresent');

const swapChainFormat = "bgra8unorm";

const swapChain = context.configureSwapChain({
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
    usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST
});
helpers.setSubData(verticesBuffer, 0, verticesData, device);

const texture = await helpers.createTextureFromImage(device, './images/hilo.png', GPUTextureUsage.SAMPLED);
const sampler = device.createSampler({
    magFilter: "linear",
    minFilter: "linear",
});

const bindGroupLayout = device.createBindGroupLayout({
    entries: [{
        binding: 0,
        visibility: GPUShaderStage.FRAGMENT,
        type: "sampler"
    }, {
        binding: 1,
        visibility: GPUShaderStage.FRAGMENT,
        type: "sampled-texture"
    }]
});

const uniformBindGroup = device.createBindGroup({
    layout: bindGroupLayout,
    entries: [{
      binding: 0,
      resource: sampler,
    }, {
      binding: 1,
      resource: texture.createView(),
    }],
});

const pipelineLayout = device.createPipelineLayout({ bindGroupLayouts: [bindGroupLayout] });

const pipeline = device.createRenderPipeline({
    layout: pipelineLayout,
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
    primitiveTopology: "triangle-strip",
    colorStates: [{
        format: swapChainFormat
    }],
    vertexState: {
        vertexBuffers:[{
            arrayStride: 7 * 4,
            attributes:[{
                shaderLocation: 0,
                offset: 0,
                format: "float2"
            },{
                shaderLocation: 1,
                offset: 2 * 4,
                format: "float3"
            },{
                shaderLocation: 2,
                offset: 5 * 4,
                format: "float2"
            }]
        }]
    }
});

const renderPassDescriptor = {
    colorAttachments: [{
        attachment: null,
        loadValue: {
            r: 0,
            g: 0,
            b: 0,
            a: 1
        },
    }],
};    

function render() {
    renderPassDescriptor.colorAttachments[0].attachment = swapChain.getCurrentTexture().createView();
    
    const commandEncoder = device.createCommandEncoder({});
    const passEncoder = commandEncoder.beginRenderPass(renderPassDescriptor);
    passEncoder.setPipeline(pipeline);
    passEncoder.setBindGroup(0, uniformBindGroup);
    passEncoder.setVertexBuffer(0, verticesBuffer);
    passEncoder.draw(4, 1, 0, 0);
    passEncoder.endPass();

    device.defaultQueue.submit([commandEncoder.finish()]);
}

const ticker = new Hilo3d.Ticker(60);
ticker.start();
ticker.addTick({
    tick(){
        render();
    }
});