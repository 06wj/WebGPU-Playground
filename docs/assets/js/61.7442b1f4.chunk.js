(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{479:function(n,e,t){"use strict";t.r(e),e.default="const canvas = document.querySelector('#canvas');\ncanvas.width = innerWidth;\ncanvas.height = innerHeight;\nconst adapter = await navigator.gpu.requestAdapter();\nconst device = await adapter.requestDevice();\nconst glslang = await glslangModule();\n\nconst stage = new Hilo3d.Node();\nconst camera = new Hilo3d.PerspectiveCamera({\n    aspect: innerWidth / innerHeight,\n    far: 100,\n    near: 0.1,\n    z: 3\n});\nstage.addChild(camera);\n\nconst boxGeometry = new Hilo3d.BoxGeometry();\nboxGeometry.setAllRectUV([[0, 1], [1, 1], [1, 0], [0, 0]]);\nconst colorBox = new Hilo3d.Mesh({\n    geometry: boxGeometry,\n    material: new Hilo3d.BasicMaterial({\n        diffuse: new Hilo3d.Color(0.6, 0.4, 0.9)\n    }),\n    x:0.5,\n    scaleX:0.5,\n    scaleY:0.5,\n    scaleZ:0.5,\n    onUpdate: function() {\n        this.rotationX += .5;\n        this.rotationY += .5;\n    }\n});\n\nstage.addChild(colorBox);\n\nconst colorBox1 = new Hilo3d.Mesh({\n    geometry: boxGeometry,\n    material: new Hilo3d.BasicMaterial({\n        diffuse: new Hilo3d.Color(0.3, 0.9, 0.6)\n    }),\n    x:-0.5,\n    scaleX:0.2,\n    scaleY:0.5,\n    scaleZ:0.5,\n    onUpdate: function() {\n        this.rotationX -= 2;\n        this.rotationY -= 2;\n    }\n});\n\nstage.addChild(colorBox1);\n\nconst vs = `#version 450\n    layout(set=0, binding=0) uniform Uniforms{\n        mat3 u_normalMatrix;\n        mat4 u_modelViewProjectionMatrix;\n        mat4 u_modelViewMatrix;\n        vec3 diffuse;\n    } uniforms;\n\n    layout(location=0) in vec3 a_position;\n    layout(location=1) in vec3 a_normal;\n\n    layout(location=0) out vec3 v_fragPos;\n    layout(location=1) out vec3 v_normal;\n\n    void main(){\n        vec4 pos = vec4(a_position, 1.0);\n        vec3 normal = a_normal;\n        v_normal = normalize(uniforms.u_normalMatrix * normal);\n        vec3 fragPos = (uniforms.u_modelViewMatrix * pos).xyz;\n        v_fragPos = fragPos;\n        gl_Position = uniforms.u_modelViewProjectionMatrix * pos;\n    }\n`;\n\nconst fs = `#version 450\n    precision highp float;\n    layout(set=0, binding=0) uniform Uniforms{\n        mat3 u_normalMatrix;\n        mat4 u_modelViewProjectionMatrix;\n        mat4 u_modelViewMatrix;\n        vec3 diffuse;\n    } uniforms;\n\n    layout(location=0) in vec3 v_fragPos;\n    layout(location=1) in vec3 v_normal;\n\n    layout(location=0) out vec4 fragColor;\n\n    void main(){\n        float light = max(dot(v_normal, vec3(0, 1, 1)), 0.0);\n        vec3 normal = normalize(v_normal);\n        vec3 diffuse = uniforms.diffuse;\n        vec3 color = diffuse * light;\n        fragColor = vec4(color, 1);\n    }\n`;\n\nconst context = canvas.getContext('gpupresent');\n\nconst swapChainFormat = 'bgra8unorm';\n\nconst swapChain = context.configure({\n    device,\n    format: swapChainFormat,\n});\n\nconst verticesData = boxGeometry.vertices.data;\nconst verticesBuffer = device.createBuffer({\n    size: verticesData.byteLength,\n    usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST,\n    mappedAtCreation: true\n});\nnew Float32Array(verticesBuffer.getMappedRange()).set(verticesData);\nverticesBuffer.unmap();\n\nconst indicesData = boxGeometry.indices.data;\nconst indicesBuffer = device.createBuffer({\n    size: indicesData.byteLength,\n    usage: GPUBufferUsage.INDEX | GPUBufferUsage.COPY_DST,\n    mappedAtCreation: true\n});\nnew Uint16Array(indicesBuffer.getMappedRange()).set(indicesData);\nindicesBuffer.unmap();\n\nconst normalsData = boxGeometry.normals.data;\nconst normalsBuffer = device.createBuffer({\n    size: normalsData.byteLength,\n    usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST,\n    mappedAtCreation: true\n});\nnew Float32Array(normalsBuffer.getMappedRange()).set(normalsData);\nnormalsBuffer.unmap();\n\nconst uniformComponentCount = 16 * 2 + 12 + 4;\nconst uniformBufferSize = uniformComponentCount * 4;\nconst alignedUniformSize = Math.ceil(uniformBufferSize / 256) * 256;\n\nconst uniformBuffer = device.createBuffer({\n    size: alignedUniformSize * 2,\n    usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,\n});\n\nconst bindGroupLayout = device.createBindGroupLayout({\n    entries: [{\n        binding: 0,\n        visibility: GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT,\n        buffer: {},\n        hasDynamicOffset: true\n    }]\n});\n\nconst uniformBindGroup = device.createBindGroup({\n    layout: bindGroupLayout,\n    entries: [{\n        binding: 0,\n        resource: {\n            buffer: uniformBuffer,\n            offset: 0,\n            size: uniformBufferSize\n        }\n    }],\n});\n\nconst pipelineLayout = device.createPipelineLayout({ bindGroupLayouts: [bindGroupLayout] });\n\nconst pipeline = device.createRenderPipeline({\n    layout: pipelineLayout,\n    vertex: {\n        module: device.createShaderModule({\n            code: glslang.compileGLSL(vs, 'vertex')\n        }),\n        entryPoint: 'main',\n        buffers: [{\n            arrayStride: 3 * 4,\n            attributes:[{\n                shaderLocation: 0,\n                offset: 0,\n                format: 'float32x3'\n            }]\n        }, {\n            arrayStride: 3 * 4,\n            attributes:[{\n                shaderLocation: 1,\n                offset: 0,\n                format: 'float32x3'\n            }]\n        }]\n    },\n    fragment: {\n        module: device.createShaderModule({\n            code: glslang.compileGLSL(fs, 'fragment')\n        }),\n        entryPoint: 'main',\n        targets: [{\n            format: swapChainFormat\n        }]\n    },\n    primitive:{\n    \ttopology: 'triangle-list',\n        cullMode: 'back',\n    },\n});\n\nconst renderPassDescriptor = {\n    colorAttachments: [{\n        view: null,\n        loadValue: {\n            r: .9,\n            g: .6,\n            b: .3,\n            a: 1\n        },\n    }],\n};  \n\nfunction getUniformData(mesh){\n    const unifromData = mesh._uniformData = mesh._uniformData || new Float32Array(uniformComponentCount);\n    let offset = 0;\n    \n    unifromData.set(Hilo3d.semantic.MODELVIEWINVERSETRANSPOSE.get(mesh), offset);\n    unifromData.copyWithin(offset + 4, offset + 3, offset + 6);\n    unifromData.copyWithin(offset + 8, offset + 6, offset + 9);\n    offset += 12;\n    \n    unifromData.set(Hilo3d.semantic.MODELVIEWPROJECTION.get(mesh), offset);\n    offset += 16;\n\n    unifromData.set(Hilo3d.semantic.MODELVIEW.get(mesh), offset);\n    offset += 16;\n\n    unifromData.set(mesh.material.diffuse.elements, offset);\n    offset += 4;\n    return unifromData;\n}\n\nconst renderList = new Hilo3d.RenderList();\nfunction render(dt) {\n    Hilo3d.semantic.init({}, {}, camera);\n    stage.traverseUpdate(dt);\n    stage.updateMatrixWorld();\n    camera.updateViewProjectionMatrix();\n    renderList.reset();\n    \n    stage.traverse((node) => {\n        if (!node.visible) {\n            return Node.TRAVERSE_STOP_CHILDREN;\n        }\n\n        if (node.isMesh) {\n            renderList.addMesh(node, camera);\n        }\n\n        return Node.TRAVERSE_STOP_NONE;\n    });\n\n    const commandEncoder = device.createCommandEncoder({});\n    renderPassDescriptor.colorAttachments[0].view = context.getCurrentTexture().createView();\n    const passEncoder = commandEncoder.beginRenderPass(renderPassDescriptor);\n\n    renderList.sort();\n    let uniformOffset = 0;\n    renderList.traverse((mesh => {\n        renderMesh(mesh, uniformOffset, passEncoder);\n        uniformOffset += alignedUniformSize;\n    }));\n\n    passEncoder.endPass();\n    device.queue.submit([commandEncoder.finish()]);\n}\n\nfunction renderMesh(mesh, uniformOffset, passEncoder) {\n    device.queue.writeBuffer(uniformBuffer, uniformOffset, getUniformData(mesh));\n\n    passEncoder.setPipeline(pipeline);\n    passEncoder.setBindGroup(0, uniformBindGroup, [uniformOffset]);\n    passEncoder.setVertexBuffer(0, verticesBuffer);\n    passEncoder.setVertexBuffer(1, normalsBuffer);\n    passEncoder.setIndexBuffer(indicesBuffer, 'uint16');\n    passEncoder.drawIndexed(boxGeometry.indices.count, 1, 0, 0, 0);\n}\n\nconst ticker = new Hilo3d.Ticker(60);\nticker.start();\nticker.addTick({\n    tick(dt){\n        render(dt);\n    }\n});\n"}}]);