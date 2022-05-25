(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{484:function(n,e,t){"use strict";t.r(e),e.default="const canvas = document.querySelector('#canvas');\ncanvas.width = canvas.height = 500;\ncanvas.style = 'width:500px;height:500px';\nconst adapter = await navigator.gpu.requestAdapter();\nconst device = await adapter.requestDevice();\n\n\nconst vs = `\n    struct VertexOutput {\n      @builtin(position) position : vec4<f32>;\n      @location(0) v_color : vec3<f32>;\n      @location(1) v_uv : vec2<f32>;\n    };\n\n    @stage(vertex)\n    fn main(@location(0) a_position : vec2<f32>, \n        @location(1) a_color : vec3<f32>,\n        @location(2) a_uv : vec2<f32>) -> VertexOutput {\n      var output : VertexOutput;\n      output.position = vec4<f32>(a_position, 0.0, 1.0);\n      output.v_color = a_color;\n      output.v_uv = a_uv;\n      return output;\n    }\n`;\n\nconst fs = `\n    @group(0) @binding(0) var u_sampler: sampler;\n    @group(0) @binding(1) var u_texture: texture_cube<f32>;\n\n    struct Uniforms {\n      time : f32;\n    };\n    @group(0) @binding(2) var<uniform> uniforms : Uniforms;\n\n    @stage(fragment)\n    fn main(@location(0) v_color: vec3<f32>,\n        @location(1) v_uv: vec2<f32>) -> @location(0) vec4<f32> {\n      var pos = vec3<f32>(v_uv.x - 0.5, 0.5 - v_uv.y, 0.5);\n      pos = normalize(pos);\n\n      // rotate\n      var c = cos(uniforms.time);\n      var s = sin(uniforms.time);\n\n      var final = vec3<f32>(pos.x, pos.y, pos.z);\n      final.x = pos.x * c - pos.z * s;\n      final.z = pos.x * s + pos.z * c;\n      final = normalize(final);\n\n      var fragColor = textureSample(u_texture, u_sampler, final);\n      return fragColor;\n    }\n`;\n\nconst context = canvas.getContext('webgpu');\n\nconst swapChainFormat = context.getPreferredFormat(adapter);\n\nconst swapChain = context.configure({\n    device,\n    format: swapChainFormat,\n    compositingAlphaMode: \"opaque\",\n});\n\nconst verticesData = new Float32Array([\n    //position      color   uv\n    -0.8, -0.8, 1,  0, 0,   0, 0,\n    -0.8, 0.8, 0,   1, 0,   0, 1,\n    0.8, -0.8, 1,   0, 1,   1, 0,\n    0.8, 0.8, 0,    0, 1,   1, 1\n]);\nconst verticesBuffer = device.createBuffer({\n    size: verticesData.byteLength,\n    usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST,\n    mappedAtCreation: true\n});\nnew Float32Array(verticesBuffer.getMappedRange()).set(verticesData);\nverticesBuffer.unmap();\n\nconst imgs = [\n     '//gw.alicdn.com/tfs/TB1Ss.ORpXXXXcNXVXXXXXXXXXX-2048-2048.jpg_960x960.jpg',\n    '//gw.alicdn.com/tfs/TB1YhUDRpXXXXcyaXXXXXXXXXXX-2048-2048.jpg_960x960.jpg',\n    '//gw.alicdn.com/tfs/TB1ZgAqRpXXXXa0aFXXXXXXXXXX-2048-2048.jpg_960x960.jpg',\n    '//gw.alicdn.com/tfs/TB1Y1MORpXXXXcpXVXXXXXXXXXX-2048-2048.jpg_960x960.jpg',\n    '//gw.alicdn.com/tfs/TB1IVZNRpXXXXaNXFXXXXXXXXXX-2048-2048.jpg_960x960.jpg',\n    '//gw.alicdn.com/tfs/TB1M3gyRpXXXXb9apXXXXXXXXXX-2048-2048.jpg_960x960.jpg',\n]\nconst texture = await helpers.createTextureFromImage(device, imgs, GPUTextureUsage.TEXTURE_BINDING, true);\nconst sampler = device.createSampler({\n    magFilter: 'linear',\n    minFilter: 'linear',\n});\n\nconst uniformBufferSize = 4;\nconst uniformBuffer = device.createBuffer({\n    size: uniformBufferSize,\n    usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,\n});\n\n\nconst bindGroupLayout = device.createBindGroupLayout({\n    entries: [{\n        binding: 0,\n        visibility: GPUShaderStage.FRAGMENT,\n        sampler: {}\n    }, {\n        binding: 1,\n        visibility: GPUShaderStage.FRAGMENT,\n        texture: {\n            viewDimension: 'cube',\n        }\n    },{\n        binding: 2,\n        visibility: GPUShaderStage.FRAGMENT,\n        buffer: {}\n    }]\n});\n\nconst uniformBindGroup = device.createBindGroup({\n    layout: bindGroupLayout,\n    entries: [{\n      binding: 0,\n      resource: sampler,\n    }, {\n      binding: 1,\n      resource: texture.createView({\n        dimension: 'cube',\n        arrayLayerCount: 6,\n      }),\n    }, {\n      binding: 2,\n      resource: {\n        buffer: uniformBuffer,\n      },\n    }],\n});\n\nconst pipelineLayout = device.createPipelineLayout({ bindGroupLayouts: [bindGroupLayout] });\n\nconst pipeline = device.createRenderPipeline({\n    layout: pipelineLayout,\n    vertex: {\n        module: device.createShaderModule({\n            code: vs\n        }),\n        entryPoint: 'main',\n        buffers: [{\n            arrayStride: 7 * 4,\n            attributes:[{\n                shaderLocation: 0,\n                offset: 0,\n                format: 'float32x2'\n            },{\n                shaderLocation: 1,\n                offset: 2 * 4,\n                format: 'float32x3'\n            },{\n                shaderLocation: 2,\n                offset: 5 * 4,\n                format: 'float32x2'\n            }]\n        }]\n    },\n    fragment: {\n        module: device.createShaderModule({\n            code: fs\n        }),\n        entryPoint: 'main',\n        targets: [{\n            format: swapChainFormat\n        }]\n    },\n    primitive: {\n        topology: 'triangle-strip',\n        stripIndexFormat:'uint16',\n    },\n});\n\nconst renderPassDescriptor = {\n    colorAttachments: [{\n        view: null,\n        loadOp: 'clear',\n        storeOp: 'store',\n        clearValue: {\n            r: 0,\n            g: 0,\n            b: 0,\n            a: 1,\n        }\n    }],\n};    \n\nconst time = new Float32Array(1);\nfunction render() {\n    renderPassDescriptor.colorAttachments[0].view = context.getCurrentTexture().createView();\n    device.queue.writeBuffer(uniformBuffer, 0, time);\n    time[0] += 0.01;\n    const commandEncoder = device.createCommandEncoder({});\n    const passEncoder = commandEncoder.beginRenderPass(renderPassDescriptor);\n    passEncoder.setPipeline(pipeline);\n    passEncoder.setBindGroup(0, uniformBindGroup);\n    passEncoder.setVertexBuffer(0, verticesBuffer);\n    passEncoder.draw(4, 1, 0, 0);\n    passEncoder.end();\n\n    device.queue.submit([commandEncoder.finish()]);\n}\n\nconst ticker = new Hilo3d.Ticker(60);\nticker.start();\nticker.addTick({\n    tick(){\n        render();\n    }\n});"}}]);