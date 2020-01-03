(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{477:function(n,e,t){"use strict";t.r(e),e.default='const canvas = document.querySelector(\'#canvas\');\ncanvas.width = canvas.height = 50;\ncanvas.style = \'width:500px;height:500px\';\nconst adapter = await navigator.gpu.requestAdapter();\nconst device = await adapter.requestDevice();\nconst glslang = await glslangModule();\n\nconst vs = `#version 450\n    layout(location=0) in vec2 a_position;\n    layout(location=1) in vec3 a_color;\n    layout(location=0) out vec3 v_color;\n    void main(){\n        gl_Position = vec4(a_position, 0, 1);\n        v_color = a_color;\n    }\n`;\n\nconst fs = `#version 450\n    precision highp float;\n    layout(location=0) out vec4 fragColor;\n    layout(location=0) in vec3 v_color;\n    void main(){\n        fragColor = vec4(v_color, 1);\n    }\n`;\n\nconst context = canvas.getContext(\'gpupresent\');\n\nconst swapChainFormat = "bgra8unorm";\n\nconst swapChain = context.configureSwapChain({\n    device,\n    format: swapChainFormat,\n});\n\nconst pointsArray = [0, 0, 0.5, 0.5, 0.6];\n\nfunction render() {\n    const commandEncoder = device.createCommandEncoder({});\n    const textureView = swapChain.getCurrentTexture().createView();\n\n    const renderPassDescriptor = {\n        colorAttachments: [{\n            attachment: textureView,\n            loadValue: {\n                r: 0,\n                g: 0,\n                b: 0,\n                a: 1\n            },\n        }],\n    };\n\n    const pointsData = new Float32Array(pointsArray);\n    const verticesBuffer = device.createBuffer({\n        size: pointsData.byteLength,\n        usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST\n    });\n    verticesBuffer.setSubData(0, pointsData);\n\n    const pipeline = device.createRenderPipeline({\n        vertexStage: {\n            module: device.createShaderModule({\n                code: glslang.compileGLSL(vs, "vertex")\n            }),\n            entryPoint: "main"\n        },\n        fragmentStage: {\n            module: device.createShaderModule({\n                code: glslang.compileGLSL(fs, "fragment")\n            }),\n            entryPoint: "main"\n        },\n        primitiveTopology: "point-list",\n        colorStates: [{\n            format: swapChainFormat\n        }],\n        vertexState: {\n            vertexBuffers:[{\n                arrayStride: 5 * 4,\n                attributes:[{\n                    shaderLocation: 0,\n                    offset: 0,\n                    format: "float2"\n                },{\n                    shaderLocation: 1,\n                    offset: 2 * 4,\n                    format: "float3"\n                }]\n            }]\n        }\n    });\n\n    const passEncoder = commandEncoder.beginRenderPass(renderPassDescriptor);\n    passEncoder.setPipeline(pipeline);\n    passEncoder.setVertexBuffer(0, verticesBuffer);\n    passEncoder.draw(pointsArray.length/5, 1, 0, 0);\n    passEncoder.endPass();\n\n    device.defaultQueue.submit([commandEncoder.finish()]);\n}\n\nrender();\n\ncanvas.onclick = function(e){\n    var x = e.clientX / 500;\n    var y = 1 - e.clientY / 500;\n\n    // pos\n    pointsArray.push(x * 2 - 1);\n    pointsArray.push(y * 2 - 1);\n\n    // color\n    pointsArray.push(Math.random());\n    pointsArray.push(Math.random());\n    pointsArray.push(Math.random());\n\n    render();\n};'}}]);