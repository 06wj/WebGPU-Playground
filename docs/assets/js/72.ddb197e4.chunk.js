(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{492:function(n,e,t){"use strict";t.r(e),e.default="const canvas = document.querySelector('#canvas');\ncanvas.width = canvas.height = 500;\ncanvas.style = 'width:500px;height:500px';\nconst adapter = await navigator.gpu.requestAdapter();\nconst device = await adapter.requestDevice();\n\n\nconst vs = `\n    struct VertexOutput {\n      @builtin(position) position : vec4<f32>;\n      @location(0) v_color : vec3<f32>;\n      @location(1) v_uv : vec2<f32>;\n    };\n\n    @stage(vertex)\n    fn main(@location(0) a_position : vec2<f32>, \n        @location(1) a_color : vec3<f32>,\n        @location(2) a_uv : vec2<f32>) -> VertexOutput {\n      var output : VertexOutput;\n      output.position = vec4<f32>(a_position, 0.0, 1.0);\n      output.v_color = a_color;\n      output.v_uv = a_uv;\n      return output;\n    }\n`;\n\nconst fs = `\n    @group(0) @binding(0) var u_sampler: sampler;\n    @group(0) @binding(1) var u_texture: texture_2d<f32>;\n\n    @stage(fragment)\n    fn main(@location(0) v_color: vec3<f32>,\n        @location(1) v_uv: vec2<f32>) -> @location(0) vec4<f32> {\n      var fragColor = textureSample(u_texture, u_sampler, v_uv);\n      fragColor = fragColor * vec4<f32>(v_color, 1.0);\n      return fragColor;\n    }\n`;\n\nconst context = canvas.getContext('webgpu');\n\nconst swapChainFormat = context.getPreferredFormat(adapter);\n\nconst swapChain = context.configure({\n    device,\n    format: swapChainFormat,\n    compositingAlphaMode: \"opaque\",\n});\n\nconst verticesData = new Float32Array([\n    //position      color   uv\n    -0.8, -0.8, 1,  0, 0,   0, 0,\n    -0.8, 0.8, 0,   1, 0,   0, 1,\n    0.8, -0.8, 1,   0, 1,   1, 0,\n    0.8, 0.8, 0,    0, 1,   1, 1\n]);\nconst verticesBuffer = device.createBuffer({\n    size: verticesData.byteLength,\n    usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST,\n    mappedAtCreation: true\n});\nnew Float32Array(verticesBuffer.getMappedRange()).set(verticesData);\nverticesBuffer.unmap();\n\nconst texture = await helpers.createTextureFromImage(device, './images/hilo.png', GPUTextureUsage.TEXTURE_BINDING);\nconst sampler = device.createSampler({\n    magFilter: 'linear',\n    minFilter: 'linear',\n});\n\nconst bindGroupLayout = device.createBindGroupLayout({\n    entries: [{\n        binding: 0,\n        visibility: GPUShaderStage.FRAGMENT,\n        sampler: {}\n    }, {\n        binding: 1,\n        visibility: GPUShaderStage.FRAGMENT,\n        texture: {}\n    }]\n});\n\nconst uniformBindGroup = device.createBindGroup({\n    layout: bindGroupLayout,\n    entries: [{\n      binding: 0,\n      resource: sampler,\n    }, {\n      binding: 1,\n      resource: texture.createView(),\n    }],\n});\n\nconst pipelineLayout = device.createPipelineLayout({ bindGroupLayouts: [bindGroupLayout] });\n\nconst pipeline = device.createRenderPipeline({\n    layout: pipelineLayout,\n    vertex: {\n        module: device.createShaderModule({\n            code: vs\n        }),\n        entryPoint: 'main',\n        buffers: [{\n            arrayStride: 7 * 4,\n            attributes:[{\n                shaderLocation: 0,\n                offset: 0,\n                format: 'float32x2'\n            },{\n                shaderLocation: 1,\n                offset: 2 * 4,\n                format: 'float32x3'\n            },{\n                shaderLocation: 2,\n                offset: 5 * 4,\n                format: 'float32x2'\n            }]\n        }]\n    },\n    fragment: {\n        module: device.createShaderModule({\n            code: fs\n        }),\n        entryPoint: 'main',\n        targets: [{\n            format: swapChainFormat\n        }]\n    },\n    primitive: {\n        topology: 'triangle-strip',\n        stripIndexFormat:'uint16',\n    },\n});\n\nconst renderPassDescriptor = {\n    colorAttachments: [{\n        view: null,\n        loadOp: 'clear',\n        storeOp: 'store',\n        clearValue: {\n            r: 0,\n            g: 0,\n            b: 0,\n            a: 1,\n        }\n    }],\n};    \n\nfunction render() {\n    renderPassDescriptor.colorAttachments[0].view = context.getCurrentTexture().createView();\n    \n    const commandEncoder = device.createCommandEncoder({});\n    const passEncoder = commandEncoder.beginRenderPass(renderPassDescriptor);\n    passEncoder.setPipeline(pipeline);\n    passEncoder.setBindGroup(0, uniformBindGroup);\n    passEncoder.setVertexBuffer(0, verticesBuffer);\n    passEncoder.draw(4, 1, 0, 0);\n    passEncoder.end();\n\n    device.queue.submit([commandEncoder.finish()]);\n}\n\nconst ticker = new Hilo3d.Ticker(60);\nticker.start();\nticker.addTick({\n    tick(){\n        render();\n    }\n});"}}]);