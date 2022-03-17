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
    @stage(fragment)
    fn main() -> @location(0) vec4<f32> {
      return vec4<f32>(1.0, 0.0, 0.0, 1.0);
    }
`;

const context = canvas.getContext('webgpu');

const swapChainFormat = 'bgra8unorm';

const swapChain = context.configure({
    device,
    format: swapChainFormat,
});

const pipeline = device.createRenderPipeline({
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
        targets: [{
            format: swapChainFormat
        }]
    },
    primitive: {
        topology:'point-list'
    }
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
    passEncoder.draw(1, 1, 0, 0);
    passEncoder.endPass();

    device.queue.submit([commandEncoder.finish()]);
}

const ticker = new Hilo3d.Ticker(60);
ticker.start();
ticker.interval(() => {
    render();
}, 500);