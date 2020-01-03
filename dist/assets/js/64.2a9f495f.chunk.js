(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{480:function(n,e,o){"use strict";o.r(e),e.default='const canvas = document.querySelector(\'#canvas\');\ncanvas.width = canvas.height = 50;\ncanvas.style = \'width:500px;height:500px\';\nconst adapter = await navigator.gpu.requestAdapter();\nconst device = await adapter.requestDevice();\nconst glslang = await glslangModule();\n\nconst vs = `#version 450\n    void main(){\n        gl_Position = vec4(-0.5, 0.5, 0.0, 1);\n    }\n`;\n\nconst fs = `#version 450\n    precision highp float;\n    layout(location=0) out vec4 fragColor;\n    layout(std140, binding=0) uniform Uniforms{\n        vec4 color;\n    } uniforms;\n\n    void main(){\n        fragColor = uniforms.color;\n    }\n`;\n\nconst context = canvas.getContext(\'gpupresent\');\n\nconst swapChainFormat = "bgra8unorm";\n\nconst swapChain = context.configureSwapChain({\n    device,\n    format: swapChainFormat,\n});\n\nconst uniformsBindGroupLayout = device.createBindGroupLayout({\n    entries: [{\n        binding: 0,\n        visibility: GPUShaderStage.FRAGMENT,\n        type: "uniform-buffer"\n    }]\n});\n\nconst uniformBufferSize = 4 * 4;\n\nconst uniformBuffer = device.createBuffer({\n    size: uniformBufferSize,\n    usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,\n});\n\nconst uniformBindGroup = device.createBindGroup({\n    layout: uniformsBindGroupLayout,\n    entries: [{\n        binding: 0,\n        resource: {\n            buffer: uniformBuffer,\n        },\n    }],\n});\n\nconst pipelineLayout = device.createPipelineLayout({ \n    bindGroupLayouts: [uniformsBindGroupLayout] \n});\nconst pipeline = device.createRenderPipeline({\n    layout: pipelineLayout,\n    vertexStage: {\n        module: device.createShaderModule({\n            code: glslang.compileGLSL(vs, "vertex")\n        }),\n        entryPoint: "main"\n    },\n    fragmentStage: {\n        module: device.createShaderModule({\n            code: glslang.compileGLSL(fs, "fragment")\n        }),\n        entryPoint: "main"\n    },\n    primitiveTopology: "point-list",\n    colorStates: [{\n        format: swapChainFormat\n    }]\n});\n\nconst color = new Float32Array(4);\nfunction randomColor(){\n    color[0] = Math.random();\n    color[1] = Math.random();\n    color[2] = Math.random();\n    color[3] = 1;\n}\n\nfunction render() {\n    randomColor();\n    uniformBuffer.setSubData(0, color);\n\n    const commandEncoder = device.createCommandEncoder({});\n    const textureView = swapChain.getCurrentTexture().createView();\n\n    const renderPassDescriptor = {\n        colorAttachments: [{\n            attachment: textureView,\n            loadValue: {\n                r: 0,\n                g: 0,\n                b: 0,\n                a: 1\n            },\n        }],\n    };\n\n    const passEncoder = commandEncoder.beginRenderPass(renderPassDescriptor);\n    passEncoder.setPipeline(pipeline);\n    passEncoder.setBindGroup(0, uniformBindGroup);\n    passEncoder.draw(1, 1, 0, 0);\n    passEncoder.endPass();\n\n    device.defaultQueue.submit([commandEncoder.finish()]);\n}\n\nconst ticker = new Hilo3d.Ticker(60);\nticker.start();\nticker.addTick({\n    tick(){\n        render();\n    }\n});'}}]);