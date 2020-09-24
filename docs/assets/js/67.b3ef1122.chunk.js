(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{485:function(n,e,t){"use strict";t.r(e),e.default='const canvas = document.querySelector(\'#canvas\');\ncanvas.width = canvas.height = 500;\ncanvas.style = \'width:500px;height:500px\';\nconst adapter = await navigator.gpu.requestAdapter();\nconst device = await adapter.requestDevice();\nconst glslang = await glslangModule();\n\nconst vs = `#version 450\n    layout(location=0) in vec2 a_position;\n    void main(){\n        gl_Position = vec4(a_position, 0, 1);\n    }\n`;\n\nconst fs = `#version 450\n    precision highp float;\n    layout(location=0) out vec4 fragColor;\n    void main(){\n        fragColor = vec4(1, 1, 1, 1);\n    }\n`;\n\nconst context = canvas.getContext(\'gpupresent\');\n\nconst swapChainFormat = "bgra8unorm";\n\nconst swapChain = context.configureSwapChain({\n    device,\n    format: swapChainFormat,\n});\n\nconst verticesData = new Float32Array([\n    0, 0.8,\n    -0.8, -0.8,\n    0.8, -0.8,\n]);\nconst verticesBuffer = device.createBuffer({\n    size: verticesData.byteLength,\n    usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST,\n    mappedAtCreation: true\n});\nnew Float32Array(verticesBuffer.getMappedRange()).set(verticesData);\nverticesBuffer.unmap();\n\nconst pipeline = device.createRenderPipeline({\n    vertexStage: {\n        module: device.createShaderModule({\n            code: glslang.compileGLSL(vs, "vertex")\n        }),\n        entryPoint: "main"\n    },\n    fragmentStage: {\n        module: device.createShaderModule({\n            code: glslang.compileGLSL(fs, "fragment")\n        }),\n        entryPoint: "main"\n    },\n    primitiveTopology: "triangle-list",\n    colorStates: [{\n        format: swapChainFormat\n    }],\n    vertexState: {\n        vertexBuffers:[{\n            arrayStride: 2 * 4,\n            attributes:[{\n                shaderLocation: 0,\n                offset: 0,\n                format: "float2"\n            }]\n        }]\n    }\n});\n\nfunction render() {\n    const commandEncoder = device.createCommandEncoder({});\n    const textureView = swapChain.getCurrentTexture().createView();\n\n    const renderPassDescriptor = {\n        colorAttachments: [{\n            attachment: textureView,\n            loadValue: {\n                r: 0,\n                g: 0,\n                b: 0,\n                a: 1\n            },\n        }],\n    };    \n\n    const passEncoder = commandEncoder.beginRenderPass(renderPassDescriptor);\n    passEncoder.setPipeline(pipeline);\n    passEncoder.setVertexBuffer(0, verticesBuffer);\n    passEncoder.draw(3, 1, 0, 0);\n    passEncoder.endPass();\n\n    device.defaultQueue.submit([commandEncoder.finish()]);\n}\n\nrender();'}}]);