const canvas = document.querySelector('#canvas');
canvas.width = canvas.height = 500;

const adapter = await navigator.gpu.requestAdapter();
const device = await adapter.requestDevice();
const glslang = await glslangModule();

const context = canvas.getContext('gpupresent');

const swapChainFormat = 'bgra8unorm';

const swapChain = context.configure({
    device,
    format: swapChainFormat,
});

function render() {
    const commandEncoder = device.createCommandEncoder({});
    const textureView = context.getCurrentTexture().createView();

    const renderPassDescriptor = {
        colorAttachments: [{
            view: textureView,
            loadValue: {
                r: Math.random(),
                g: Math.random(),
                b: Math.random(),
                a: 1.0
            },
        }],
    };

    const passEncoder = commandEncoder.beginRenderPass(renderPassDescriptor);
    passEncoder.endPass();

    device.queue.submit([commandEncoder.finish()]);
}

const ticker = new Hilo3d.Ticker(60);
ticker.start();
ticker.interval(() => {
    render();
}, 500);