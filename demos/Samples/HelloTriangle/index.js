const canvas = document.querySelector('#canvas');
canvas.width = canvas.height = 500;
canvas.style = 'width:500px;height:500px';
const adapter = await navigator.gpu.requestAdapter();
const device = await adapter.requestDevice();


const vs = `
    struct VertexOutput {
      @builtin(position) position : vec4<f32>
    };

    @stage(vertex)
    fn main(@location(0) a_position : vec2<f32>) -> VertexOutput {
      var output : VertexOutput;
      output.position = vec4<f32>(a_position, 0.0, 1.0);
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

const swapChainFormat = context.getPreferredFormat(adapter);

const swapChain = context.configure({
    device,
    format: swapChainFormat,
    compositingAlphaMode: "opaque",
});

const verticesData = new Float32Array([
    0, 0.8,
    -0.8, -0.8,
    0.8, -0.8,
]);
const verticesBuffer = device.createBuffer({
    size: verticesData.byteLength,
    usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST,
    mappedAtCreation: true
});
new Float32Array(verticesBuffer.getMappedRange()).set(verticesData);
verticesBuffer.unmap();

const pipeline = device.createRenderPipeline({
    layout: 'auto',
    vertex: {
        module: device.createShaderModule({
            code: vs
        }),
        entryPoint: 'main',
        buffers:[{
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
            code: fs
        }),
        entryPoint: 'main',
        targets:[{
            format: swapChainFormat
        }],
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
    passEncoder.setVertexBuffer(0, verticesBuffer);
    passEncoder.draw(3, 1, 0, 0);
    passEncoder.end();

    device.queue.submit([commandEncoder.finish()]);
}

render();