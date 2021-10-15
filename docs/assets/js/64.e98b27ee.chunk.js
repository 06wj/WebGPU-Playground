(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{482:function(n,e,t){"use strict";t.r(e),e.default="const canvas = document.querySelector('#canvas');\ncanvas.width = canvas.height = 500;\n\nconst adapter = await navigator.gpu.requestAdapter();\nconst device = await adapter.requestDevice();\n\n\nconst context = canvas.getContext('webgpu');\n\nconst swapChainFormat = 'bgra8unorm';\n\nconst swapChain = context.configure({\n    device,\n    format: swapChainFormat,\n});\n\nfunction render() {\n    const commandEncoder = device.createCommandEncoder({});\n    const textureView = context.getCurrentTexture().createView();\n\n    const renderPassDescriptor = {\n        colorAttachments: [{\n            view: textureView,\n            loadValue: {\n                r: Math.random(),\n                g: Math.random(),\n                b: Math.random(),\n                a: 1.0\n            },\n        }],\n    };\n\n    const passEncoder = commandEncoder.beginRenderPass(renderPassDescriptor);\n    passEncoder.endPass();\n\n    device.queue.submit([commandEncoder.finish()]);\n}\n\nconst ticker = new Hilo3d.Ticker(60);\nticker.start();\nticker.interval(() => {\n    render();\n}, 500);"}}]);