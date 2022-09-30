(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{483:function(n,e,t){"use strict";t.r(e),e.default="const canvas = document.querySelector('#canvas');\ncanvas.width = canvas.height = 50;\ncanvas.style = 'width:500px;height:500px';\nconst adapter = await navigator.gpu.requestAdapter();\nconst device = await adapter.requestDevice();\n\n\nconst vs = `\n    struct VertexOutput {\n      @builtin(position) position : vec4<f32>,\n      @location(0) v_color : vec3<f32>\n    };\n\n    @vertex\n    fn main(@location(0) a_position : vec2<f32>,\n        @location(1) a_color : vec3<f32>) -> VertexOutput {\n      var output : VertexOutput;\n      output.position = vec4<f32>(a_position, 0.0, 1.0);\n      output.v_color = a_color;\n      return output;\n    }\n`;\n\nconst fs = `\n    @fragment\n    fn main(@location(0) v_color: vec3<f32>) -> @location(0) vec4<f32> {\n      return vec4<f32>(v_color, 1.0);\n    }\n`;\n\nconst context = canvas.getContext('webgpu');\n\nconst swapChainFormat = navigator.gpu.getPreferredCanvasFormat();\n\nconst swapChain = context.configure({\n    device,\n    format: swapChainFormat,\n    alphaMode: \"opaque\",\n});\n\nconst pointsArray = [0, 0, 0.5, 0.5, 0.6];\n\nfunction render() {\n    const commandEncoder = device.createCommandEncoder({});\n    const textureView = context.getCurrentTexture().createView();\n\n    const renderPassDescriptor = {\n        colorAttachments: [{\n            view: textureView,\n            loadOp: 'clear',\n            storeOp: 'store',\n            clearValue: {\n                r: 0,\n                g: 0,\n                b: 0,\n                a: 1,\n            }\n        }],\n    };\n\n    const pointsData = new Float32Array(pointsArray);\n    const verticesBuffer = device.createBuffer({\n        size: pointsData.byteLength,\n        usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST,\n        mappedAtCreation: true\n    });\n    new Float32Array(verticesBuffer.getMappedRange()).set(pointsData);\n    verticesBuffer.unmap();\n\n    const pipeline = device.createRenderPipeline({\n        layout: 'auto',\n        vertex: {\n            module: device.createShaderModule({\n                code: vs\n            }),\n            entryPoint: 'main',\n            buffers:[{\n                arrayStride: 5 * 4,\n                attributes:[{\n                    shaderLocation: 0,\n                    offset: 0,\n                    format: 'float32x2'\n                },{\n                    shaderLocation: 1,\n                    offset: 2 * 4,\n                    format: 'float32x3'\n                }]\n            }]\n        },\n        fragment: {\n            module: device.createShaderModule({\n                code: fs\n            }),\n            entryPoint: 'main',\n            targets:[{\n                format: swapChainFormat\n            }]\n        },\n        primitive:{\n        \ttopology: 'point-list'\n        },\n    });\n\n    const passEncoder = commandEncoder.beginRenderPass(renderPassDescriptor);\n    passEncoder.setPipeline(pipeline);\n    passEncoder.setVertexBuffer(0, verticesBuffer);\n    passEncoder.draw(pointsArray.length/5, 1, 0, 0);\n    passEncoder.end();\n\n    device.queue.submit([commandEncoder.finish()]);\n}\n\nrender();\n\ncanvas.onclick = function(e){\n    var x = e.clientX / 500;\n    var y = 1 - e.clientY / 500;\n\n    // pos\n    pointsArray.push(x * 2 - 1);\n    pointsArray.push(y * 2 - 1);\n\n    // color\n    pointsArray.push(Math.random());\n    pointsArray.push(Math.random());\n    pointsArray.push(Math.random());\n\n    render();\n};"}}]);