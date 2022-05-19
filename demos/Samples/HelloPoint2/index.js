const canvas = document.querySelector('#canvas');
canvas.width = canvas.height = 50;
canvas.style = 'width:500px;height:500px';
const adapter = await navigator.gpu.requestAdapter();
const device = await adapter.requestDevice();


const vs = `
    struct VertexOutput {
        @builtin(position) position : vec4<f32>;
    };

    @stage(vertex)
    fn main() ->  VertexOutput {
        var output : VertexOutput;
        output.position = vec4<f32>(-0.5, 0.5, 0.0, 1.0);
        return output;
    }
`;

const fs = `
    struct Uniforms {
      color : vec4<f32>;
    };
    @group(0) @binding(0) var<uniform> uniforms : Uniforms;

    @stage(fragment)
    fn main() -> @location(0) vec4<f32> {
      return uniforms.color;
    }
`;

const context = canvas.getContext('webgpu');

const swapChainFormat = context.getPreferredFormat(adapter);

const swapChain = context.configure({
    device,
    format: swapChainFormat,
    compositingAlphaMode: "opaque",
});

const uniformsBindGroupLayout = device.createBindGroupLayout({
    entries: [{
        binding: 0,
        visibility: GPUShaderStage.FRAGMENT,
        buffer: {}
    }]
});

const uniformBufferSize = 4 * 4;

const uniformBuffer = device.createBuffer({
    size: uniformBufferSize,
    usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,
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
const pipeline = device.createRenderPipeline({
    layout: pipelineLayout,
    vertex: {
        module: device.createShaderModule({
            code: vs
        }),
        entryPoint: 'main'
    },
    fragment: {
        module: device.createShaderModule({
            code: fs
        }),
        entryPoint: 'main',
        targets:[{
            format: swapChainFormat
        }]
    },
    primitive:{
        topology: 'point-list'
    },
});

const color = new Float32Array(4);
function randomColor(){
    color[0] = Math.random();
    color[1] = Math.random();
    color[2] = Math.random();
    color[3] = 1;
}

function render() {
    randomColor();
    device.queue.writeBuffer(uniformBuffer, 0, color);

    const commandEncoder = device.createCommandEncoder({});
    const textureView = context.getCurrentTexture().createView();

    const renderPassDescriptor = {
        colorAttachments: [{
            view: textureView,
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

    const passEncoder = commandEncoder.beginRenderPass(renderPassDescriptor);
    passEncoder.setPipeline(pipeline);
    passEncoder.setBindGroup(0, uniformBindGroup);
    passEncoder.draw(1, 1, 0, 0);
    passEncoder.end();

    device.queue.submit([commandEncoder.finish()]);
}

const ticker = new Hilo3d.Ticker(60);
ticker.start();
ticker.addTick({
    tick(){
        render();
    }
});