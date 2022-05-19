const canvas = document.querySelector('#canvas');
canvas.width = canvas.height = 500;

const adapter = await navigator.gpu.requestAdapter();
const device = await adapter.requestDevice();


const context = canvas.getContext('webgpu');

const swapChainFormat = context.getPreferredFormat(adapter);

const swapChain = context.configure({
    device,
    format: swapChainFormat,
    compositingAlphaMode: "opaque",
});

function render() {
    const commandEncoder = device.createCommandEncoder({});
    const textureView = context.getCurrentTexture().createView();

    const renderPassDescriptor = {
        colorAttachments: [{
            view: textureView,
            loadOp:'clear',
            storeOp: 'store',
            clearValue: {
                r: Math.random(),
                g: Math.random(),
                b: Math.random(),
                a: 1.0
            },
        }],
    };

    const passEncoder = commandEncoder.beginRenderPass(renderPassDescriptor);
    passEncoder.end();

    device.queue.submit([commandEncoder.finish()]);
}

const ticker = new Hilo3d.Ticker(60);
ticker.start();
ticker.interval(() => {
    render();
}, 500);