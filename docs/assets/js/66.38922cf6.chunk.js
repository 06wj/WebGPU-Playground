(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{486:function(n,e,t){"use strict";t.r(e),e.default="const canvas = document.querySelector('#canvas');\ncanvas.width = canvas.height = 50;\ncanvas.style = 'width:500px;height:500px';\nconst adapter = await navigator.gpu.requestAdapter();\nconst device = await adapter.requestDevice();\n\n\nconst vs = `\n    struct VertexOutput {\n        @builtin(position) position : vec4<f32>\n    };\n\n    @vertex\n    fn main() ->  VertexOutput {\n        var output : VertexOutput;\n        output.position = vec4<f32>(-0.5, 0.5, 0.0, 1.0);\n        return output;\n    }\n`;\n\nconst fs = `\n    @fragment\n    fn main() -> @location(0) vec4<f32> {\n      return vec4<f32>(1.0, 0.0, 0.0, 1.0);\n    }\n`;\n\nconst context = canvas.getContext('webgpu');\n\nconst swapChainFormat = navigator.gpu.getPreferredCanvasFormat();\n\nconst swapChain = context.configure({\n    device,\n    format: swapChainFormat,\n    alphaMode: \"opaque\",\n});\n\nconst pipeline = device.createRenderPipeline({\n    layout: 'auto',\n    vertex: {\n        module: device.createShaderModule({\n            code: vs\n        }),\n        entryPoint: 'main'\n    },\n    fragment: {\n        module: device.createShaderModule({\n            code: fs\n        }),\n        entryPoint: 'main',\n        targets: [{\n            format: swapChainFormat\n        }]\n    },\n    primitive: {\n        topology:'point-list'\n    }\n});\n\nfunction render() {\n    const commandEncoder = device.createCommandEncoder({});\n    const textureView = context.getCurrentTexture().createView();\n\n    const renderPassDescriptor = {\n        colorAttachments: [{\n            view: textureView,\n            loadOp: 'clear',\n            storeOp: 'store',\n            clearValue: {\n                r: 0,\n                g: 0,\n                b: 0,\n                a: 1,\n            }\n        }],\n    };\n\n    const passEncoder = commandEncoder.beginRenderPass(renderPassDescriptor);\n    passEncoder.setPipeline(pipeline);\n    passEncoder.draw(1, 1, 0, 0);\n    passEncoder.end();\n\n    device.queue.submit([commandEncoder.finish()]);\n}\n\nconst ticker = new Hilo3d.Ticker(60);\nticker.start();\nticker.interval(() => {\n    render();\n}, 500);"}}]);