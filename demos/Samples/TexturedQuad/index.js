const canvas = document.querySelector('#canvas');
canvas.width = canvas.height = 500;
canvas.style = 'width:500px;height:500px';
const adapter = await navigator.gpu.requestAdapter();
const device = await adapter.requestDevice();


const vs = `
    struct VertexOutput {
      [[builtin(position)]] position : vec4<f32>;
      [[location(0)]] v_color : vec3<f32>;
      [[location(1)]] v_uv : vec2<f32>;
    };

    [[stage(vertex)]]
    fn main([[location(0)]] a_position : vec2<f32>, 
        [[location(1)]] a_color : vec3<f32>,
        [[location(2)]] a_uv : vec2<f32>) -> VertexOutput {
      var output : VertexOutput;
      output.position = vec4<f32>(a_position, 0.0, 1.0);
      output.v_color = a_color;
      output.v_uv = a_uv;
      return output;
    }
`;

const fs = `
    [[group(0), binding(0)]] var u_sampler: sampler;
    [[group(0), binding(1)]] var u_texture: texture_2d<f32>;

    [[stage(fragment)]]
    fn main([[location(0)]] v_color: vec3<f32>,
        [[location(1)]] v_uv: vec2<f32>) -> [[location(0)]] vec4<f32> {
      var fragColor = textureSample(u_texture, u_sampler, v_uv);
      fragColor = fragColor * vec4<f32>(v_color, 1.0);
      return fragColor;
    }
`;

const context = canvas.getContext('webgpu');

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

const texture = await helpers.createTextureFromImage(device, './images/hilo.png', GPUTextureUsage.TEXTURE_BINDING);
const sampler = device.createSampler({
    magFilter: 'linear',
    minFilter: 'linear',
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
    vertex: {
        module: device.createShaderModule({
            code: vs
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
                offset: 2 * 4,
                format: 'float32x3'
            },{
                shaderLocation: 2,
                offset: 5 * 4,
                format: 'float32x2'
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
    primitive: {
        topology: 'triangle-strip',
        stripIndexFormat:'uint16',
    },
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

function render() {
    renderPassDescriptor.colorAttachments[0].view = context.getCurrentTexture().createView();
    
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