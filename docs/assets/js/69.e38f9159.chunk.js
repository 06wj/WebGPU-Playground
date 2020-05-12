(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{487:function(n,e,t){"use strict";t.r(e),e.default='const canvas = document.querySelector(\'#canvas\');\ncanvas.width = canvas.height = 500;\ncanvas.style = \'width:500px;height:500px\';\nconst adapter = await navigator.gpu.requestAdapter();\nconst device = await adapter.requestDevice();\nconst glslang = await glslangModule();\n\nconst vs = `#version 450\n    layout(location=0) in vec2 a_position;\n    layout(location=1) in vec2 a_uv;\n\n    layout(location=0) out vec2 v_uv;\n\n    void main(){\n        gl_Position = vec4(a_position, 0, 1);\n        v_uv = a_uv;\n    }\n`;\n\nconst fs = `#version 450\n    precision highp float;\n    layout(set=0, binding=0) uniform sampler u_sampler;\n    layout(set=0, binding=1) uniform texture2D u_texture0;\n    layout(set=0, binding=2) uniform texture2D u_texture1;\n    layout(location=0) in vec2 v_uv;\n\n    layout(location=0) out vec4 fragColor;\n\n    void main(){\n        vec4 color0 = texture(sampler2D(u_texture0, u_sampler), v_uv);\n        vec4 color1 = texture(sampler2D(u_texture1, u_sampler), v_uv);\n        fragColor = color0 * color1;\n    }\n`;\n\nconst context = canvas.getContext(\'gpupresent\');\n\nconst swapChainFormat = "bgra8unorm";\n\nconst swapChain = context.configureSwapChain({\n    device,\n    format: swapChainFormat,\n});\n\nconst verticesData = new Float32Array([\n    //position      color   uv\n    -0.8, -0.8, 1,  0, 0,   0, 0,\n    -0.8, 0.8, 0,   1, 0,   0, 1,\n    0.8, -0.8, 1,   0, 1,   1, 0,\n    0.8, 0.8, 0,    0, 1,   1, 1\n]);\nconst verticesBuffer = device.createBuffer({\n    size: verticesData.byteLength,\n    usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST\n});\nhelpers.setSubData(verticesBuffer, 0, verticesData, device);\n\nconst [texture0, texture1] = await Promise.all([\n    helpers.createTextureFromImage(device, \'./images/head.png\', GPUTextureUsage.SAMPLED),\n    helpers.createTextureFromImage(device, \'./images/circle.gif\', GPUTextureUsage.SAMPLED),\n]);\nconst sampler = device.createSampler({\n    magFilter: "linear",\n    minFilter: "linear",\n});\n\nconst bindGroupLayout = device.createBindGroupLayout({\n    entries: [{\n        binding: 0,\n        visibility: GPUShaderStage.FRAGMENT,\n        type: "sampler"\n    }, {\n        binding: 1,\n        visibility: GPUShaderStage.FRAGMENT,\n        type: "sampled-texture"\n    }, {\n        binding: 2,\n        visibility: GPUShaderStage.FRAGMENT,\n        type: "sampled-texture"\n    }]\n});\n\nconst uniformBindGroup = device.createBindGroup({\n    layout: bindGroupLayout,\n    entries: [{\n      binding: 0,\n      resource: sampler,\n    }, {\n      binding: 1,\n      resource: texture0.createView(),\n    },{\n      binding: 2,\n      resource: texture1.createView(),\n    }],\n});\n\nconst pipelineLayout = device.createPipelineLayout({ bindGroupLayouts: [bindGroupLayout] });\n\nconst pipeline = device.createRenderPipeline({\n    layout: pipelineLayout,\n    vertexStage: {\n        module: device.createShaderModule({\n            code: glslang.compileGLSL(vs, "vertex")\n        }),\n        entryPoint: "main"\n    },\n    fragmentStage: {\n        module: device.createShaderModule({\n            code: glslang.compileGLSL(fs, "fragment")\n        }),\n        entryPoint: "main"\n    },\n    primitiveTopology: "triangle-strip",\n    colorStates: [{\n        format: swapChainFormat\n    }],\n    vertexState: {\n        vertexBuffers:[{\n            arrayStride: 7 * 4,\n            attributes:[{\n                shaderLocation: 0,\n                offset: 0,\n                format: "float2"\n            },{\n                shaderLocation: 1,\n                offset: 5 * 4,\n                format: "float2"\n            }]\n        }]\n    }\n});\n\nconst renderPassDescriptor = {\n    colorAttachments: [{\n        attachment: null,\n        loadValue: {\n            r: 0,\n            g: 0,\n            b: 0,\n            a: 1\n        },\n    }],\n};    \n\nfunction render() {\n    renderPassDescriptor.colorAttachments[0].attachment = swapChain.getCurrentTexture().createView();\n    \n    const commandEncoder = device.createCommandEncoder({});\n    const passEncoder = commandEncoder.beginRenderPass(renderPassDescriptor);\n    passEncoder.setPipeline(pipeline);\n    passEncoder.setBindGroup(0, uniformBindGroup);\n    passEncoder.setVertexBuffer(0, verticesBuffer);\n    passEncoder.draw(4, 1, 0, 0);\n    passEncoder.endPass();\n\n    device.defaultQueue.submit([commandEncoder.finish()]);\n}\n\nconst ticker = new Hilo3d.Ticker(60);\nticker.start();\nticker.addTick({\n    tick(){\n        render();\n    }\n});'}}]);