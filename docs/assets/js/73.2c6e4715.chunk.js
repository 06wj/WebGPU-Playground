(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{493:function(n,e,t){"use strict";t.r(e),e.default="const canvas = document.querySelector('#canvas');\ncanvas.width = canvas.height = 500;\ncanvas.style = 'width:500px;height:500px';\nconst adapter = await navigator.gpu.requestAdapter();\nconst device = await adapter.requestDevice();\n\n\nconst vs = `\n    struct Uniforms {\n      modelMatrix : mat3x3<f32>\n    };\n    @group(0) @binding(3) var<uniform> uniforms : Uniforms;\n\n\n    struct VertexOutput {\n      @builtin(position) position : vec4<f32>,\n      @location(0) v_uv : vec2<f32>\n    };\n\n    @vertex\n    fn main(@location(0) a_position : vec2<f32>, \n        @location(1) a_uv : vec2<f32>) -> VertexOutput {\n      var output : VertexOutput;\n      var pos = uniforms.modelMatrix * vec3<f32>(a_position, 1.0);\n      output.position = vec4<f32>(pos, 1.0);\n      output.v_uv = a_uv;\n      return output;\n    }\n`;\n\nconst fs = `\n    @group(0) @binding(0) var u_sampler: sampler;\n    @group(0) @binding(1) var u_texture0: texture_2d<f32>;\n    @group(0) @binding(2) var u_texture1: texture_2d<f32>;\n\n    @fragment\n    fn main(@location(0) v_uv: vec2<f32>) -> @location(0) vec4<f32> {\n      var color0 = textureSample(u_texture0, u_sampler, v_uv);\n      var color1 = textureSample(u_texture1, u_sampler, v_uv);\n      var fragColor = color0 * color1;\n      return fragColor;\n    }\n`;\n\nconst context = canvas.getContext('webgpu');\n\nconst swapChainFormat = navigator.gpu.getPreferredCanvasFormat();\n\nconst swapChain = context.configure({\n    device,\n    format: swapChainFormat,\n    alphaMode: \"opaque\",\n});\n\nconst verticesData = new Float32Array([\n    //position      color   uv\n    -0.8, -0.8, 1,  0, 0,   0, 0,\n    -0.8, 0.8, 0,   1, 0,   0, 1,\n    0.8, -0.8, 1,   0, 1,   1, 0,\n    0.8, 0.8, 0,    0, 1,   1, 1\n]);\nconst verticesBuffer = device.createBuffer({\n    size: verticesData.byteLength,\n    usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST,\n    mappedAtCreation: true\n});\nnew Float32Array(verticesBuffer.getMappedRange()).set(verticesData);\nverticesBuffer.unmap();\n\nconst [texture0, texture1] = await Promise.all([\n    helpers.createTextureFromImage(device, './images/head.png', GPUTextureUsage.TEXTURE_BINDING),\n    helpers.createTextureFromImage(device, './images/circle.gif', GPUTextureUsage.TEXTURE_BINDING),\n]);\nconst sampler = device.createSampler({\n    magFilter: 'linear',\n    minFilter: 'linear',\n});\n\nconst uniformBufferSize = 4 * 12;\nconst uniformBuffer = device.createBuffer({\n    size: uniformBufferSize,\n    usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,\n});\n\nconst bindGroupLayout = device.createBindGroupLayout({\n    entries: [{\n        binding: 0,\n        visibility: GPUShaderStage.FRAGMENT,\n        sampler: {}\n    }, {\n        binding: 1,\n        visibility: GPUShaderStage.FRAGMENT,\n        texture: {}\n    }, {\n        binding: 2,\n        visibility: GPUShaderStage.FRAGMENT,\n        texture: {}\n    },{\n        binding: 3,\n        visibility: GPUShaderStage.VERTEX,\n        buffer: {}\n    }]\n});\n\nconst uniformBindGroup = device.createBindGroup({\n    layout: bindGroupLayout,\n    entries: [{\n        binding: 0,\n        resource: sampler,\n    }, {\n        binding: 1,\n        resource: texture0.createView(),\n    },{\n        binding: 2,\n        resource: texture1.createView(),\n    },{\n        binding: 3,\n        resource: {\n            buffer: uniformBuffer\n        }\n    }],\n});\n\nconst pipelineLayout = device.createPipelineLayout({ bindGroupLayouts: [bindGroupLayout] });\n\nconst pipeline = device.createRenderPipeline({\n    layout: pipelineLayout,\n    vertex: {\n        module: device.createShaderModule({\n            code: vs\n        }),\n        entryPoint: 'main',\n        buffers: [{\n            arrayStride: 7 * 4,\n            attributes:[{\n                shaderLocation: 0,\n                offset: 0,\n                format: 'float32x2'\n            },{\n                shaderLocation: 1,\n                offset: 5 * 4,\n                format: 'float32x2'\n            }]\n        }]\n    },\n    fragment: {\n        module: device.createShaderModule({\n            code: fs\n        }),\n        entryPoint: 'main',\n        targets: [{\n            format: swapChainFormat\n        }]\n    },\n    primitive: {\n        topology: 'triangle-strip',\n        stripIndexFormat: 'uint16'\n    }\n});\n\nconst renderPassDescriptor = {\n    colorAttachments: [{\n        view: null,\n        loadOp: 'clear',\n        storeOp: 'store',\n        clearValue: {\n            r: 0,\n            g: 0,\n            b: 0,\n            a: 1,\n        }\n    }],\n};  \n\nconst modelMatrix = new Hilo3d.Matrix3();\nconst modelMatrixData = new Float32Array(12);\nfunction getModelMatrix(){\n    modelMatrix.rotate(-3/180*Math.PI);\n    const elements = modelMatrix.elements;\n    modelMatrixData.set(elements);\n    modelMatrixData.copyWithin(8, 6, 9);\n    modelMatrixData.copyWithin(4, 3, 6);\n    return modelMatrixData;\n}\n\nfunction render() {\n    renderPassDescriptor.colorAttachments[0].view = context.getCurrentTexture().createView();\n    device.queue.writeBuffer(uniformBuffer, 0, getModelMatrix());\n\n    const commandEncoder = device.createCommandEncoder({});\n    const passEncoder = commandEncoder.beginRenderPass(renderPassDescriptor);\n    passEncoder.setPipeline(pipeline);\n    passEncoder.setBindGroup(0, uniformBindGroup);\n    passEncoder.setVertexBuffer(0, verticesBuffer);\n    passEncoder.draw(4, 1, 0, 0);\n    passEncoder.end();\n\n    device.queue.submit([commandEncoder.finish()]);\n}\n\nconst ticker = new Hilo3d.Ticker(60);\nticker.start();\nticker.addTick({\n    tick(){\n        render();\n    }\n});"}}]);