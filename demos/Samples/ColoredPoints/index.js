const canvas = document.querySelector('#canvas');
canvas.width = canvas.height = 50;
canvas.style = 'width:500px;height:500px';
const adapter = await navigator.gpu.requestAdapter();
const device = await adapter.requestDevice();


const vs = `
    struct VertexOutput {
      @builtin(position) position : vec4<f32>,
      @location(0) v_color : vec3<f32>
    };

    @stage(vertex)
    fn main(@location(0) a_position : vec2<f32>,
        @location(1) a_color : vec3<f32>) -> VertexOutput {
      var output : VertexOutput;
      output.position = vec4<f32>(a_position, 0.0, 1.0);
      output.v_color = a_color;
      return output;
    }
`;

const fs = `
    @stage(fragment)
    fn main(@location(0) v_color: vec3<f32>) -> @location(0) vec4<f32> {
      return vec4<f32>(v_color, 1.0);
    }
`;

const context = canvas.getContext('webgpu');

const swapChainFormat = context.getPreferredFormat(adapter);

const swapChain = context.configure({
    device,
    format: swapChainFormat,
    compositingAlphaMode: "opaque",
});

const pointsArray = [0, 0, 0.5, 0.5, 0.6];

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

    const pointsData = new Float32Array(pointsArray);
    const verticesBuffer = device.createBuffer({
        size: pointsData.byteLength,
        usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST,
        mappedAtCreation: true
    });
    new Float32Array(verticesBuffer.getMappedRange()).set(pointsData);
    verticesBuffer.unmap();

    const pipeline = device.createRenderPipeline({
        vertex: {
            module: device.createShaderModule({
                code: vs
            }),
            entryPoint: 'main',
            buffers:[{
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

    const passEncoder = commandEncoder.beginRenderPass(renderPassDescriptor);
    passEncoder.setPipeline(pipeline);
    passEncoder.setVertexBuffer(0, verticesBuffer);
    passEncoder.draw(pointsArray.length/5, 1, 0, 0);
    passEncoder.end();

    device.queue.submit([commandEncoder.finish()]);
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