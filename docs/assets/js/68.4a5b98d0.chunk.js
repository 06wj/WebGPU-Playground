(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{486:function(n,e,t){"use strict";t.r(e),e.default="const canvas = document.querySelector('#canvas');\ncanvas.width = canvas.height = 500;\ncanvas.style = 'width:500px;height:500px';\nconst adapter = await navigator.gpu.requestAdapter();\nconst device = await adapter.requestDevice();\nconst glslang = await glslangModule();\n\nconst vs = `#version 450\n    layout(location=0) in vec2 a_position;\n    layout(location=1) in vec3 a_color;\n    layout(location=0) out vec3 v_color;\n    void main(){\n        gl_Position = vec4(a_position, 0, 1);\n        v_color = a_color;\n    }\n`;\n\nconst fs = `#version 450\n    precision highp float;\n    layout(location=0) in vec3 v_color;\n    layout(location=0) out vec4 fragColor;\n    void main(){\n        fragColor = vec4(v_color, 1);\n    }\n`;\n\nconst context = canvas.getContext('gpupresent');\n\nconst swapChainFormat = 'bgra8unorm';\n\nconst swapChain = context.configure({\n    device,\n    format: swapChainFormat,\n});\n\nconst verticesData = new Float32Array([\n    0, 0.8, 1, 0, 0,\n    -0.8, -0.8, 0, 1, 0,\n    0.8, -0.8, 0, 0, 1\n]);\nconst verticesBuffer = device.createBuffer({\n    size: verticesData.byteLength,\n    usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST,\n    mappedAtCreation: true\n});\nnew Float32Array(verticesBuffer.getMappedRange()).set(verticesData);\nverticesBuffer.unmap();\n\nconst pipeline = device.createRenderPipeline({\n    vertex: {\n        module: device.createShaderModule({\n            code: glslang.compileGLSL(vs, 'vertex')\n        }),\n        entryPoint: 'main',\n        buffers: [{\n            arrayStride: 5 * 4,\n            attributes:[{\n                shaderLocation: 0,\n                offset: 0,\n                format: 'float32x2'\n            },{\n                shaderLocation: 1,\n                offset: 2 * 4,\n                format: 'float32x3'\n            }]\n        }]\n    },\n    fragment: {\n        module: device.createShaderModule({\n            code: glslang.compileGLSL(fs, 'fragment')\n        }),\n        entryPoint: 'main',\n        targets: [{\n            format: swapChainFormat\n        }]\n    },\n    primitive:{\n\ttopology: 'triangle-list'\n},\n});\n\nfunction render() {\n    const commandEncoder = device.createCommandEncoder({});\n    const textureView = context.getCurrentTexture().createView();\n    const renderPassDescriptor = {\n        colorAttachments: [{\n            view: textureView,\n            loadValue: {\n                r: 0,\n                g: 0,\n                b: 0,\n                a: 1\n            },\n        }],\n    };    \n\n    const passEncoder = commandEncoder.beginRenderPass(renderPassDescriptor);\n    passEncoder.setPipeline(pipeline);\n    passEncoder.setVertexBuffer(0, verticesBuffer);\n    passEncoder.draw(3, 1, 0, 0);\n    passEncoder.endPass();\n\n    device.queue.submit([commandEncoder.finish()]);\n}\n\nrender();"}}]);