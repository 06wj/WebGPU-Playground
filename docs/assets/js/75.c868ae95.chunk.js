(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{477:function(n,t,e){"use strict";e.r(t),t.default="<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>WebGPU Playground</title>\n</head>\n<body>\n    <div id='not-supported'>\n        Your browser does not support WebGPU, please visit <a href='https://webgpu.io' target=\"_blank\">webgpu.io</a> for more information.\n    </div>\n    <script>\n        const tokens = {\n            github: 'Ah2C6UK9sqQbhW2nDXiDqp3w6iE10h5Rbfv1knrXRBnjv7rg5PDGUX1ppa+uAV5qQyPxcmb2RknJb0u08nAvFQ0AAABheyJvcmlnaW4iOiJodHRwczovLzA2d2ouZ2l0aHViLmlvOjQ0MyIsImZlYXR1cmUiOiJXZWJHUFUiLCJleHBpcnkiOjE2NjM3MTgzOTksImlzU3ViZG9tYWluIjp0cnVlfQ==',\n            gitee: 'AiGqWc2gKu8OyFk9ifDFdq+oZ7KsoHCa86QhsWjxUikrfRAS5t+rOXuufXocVZOwb+yJhlCITio/VnlCfVdA4g0AAABseyJvcmlnaW4iOiJodHRwczovL2Zvcmstb3Blbi1zb3VyY2UuZ2l0ZWUuaW86NDQzIiwiZmVhdHVyZSI6IldlYkdQVSIsImV4cGlyeSI6MTY2MzcxODM5OSwiaXNTdWJkb21haW4iOnRydWV9',\n            local: 'AmvVzmt1qqOMaMFBcJF52WXA8S2wMSc72S47TICKfh7TsaQTIOORHgw5q7w/mOwrdoOZbc93O2lZ9ajuD+gQ8w0AAABJeyJvcmlnaW4iOiJodHRwOi8vbG9jYWxob3N0OjIzMzMiLCJmZWF0dXJlIjoiV2ViR1BVIiwiZXhwaXJ5IjoxNjYzNzE4Mzk5fQ=='\n        };\n        const meta = document.createElement('meta');\n        meta.setAttribute('http-equiv', 'origin-trial');\n        let token = tokens.github;\n        if (location.href.indexOf('gitee') > -1) {\n            token = tokens.gitee;\n        } else if (location.href.indexOf('local') > -1) {\n            token = tokens.local;\n        }\n\n        meta.setAttribute('content', token);\n        document.head.appendChild(meta);\n    <\/script>\n    <canvas id='canvas'></canvas>\n    <script>\n        window.showNotSupport = () => {\n            alert('Your browser does not support WebGPU!');\n            document.body.querySelector('#not-supported').style.display = 'block';\n        };\n        if (!navigator.gpu) {\n            showNotSupport();\n        } else {\n            navigator.gpu.requestAdapter().catch(() => {\n                showNotSupport();\n            });\n        }\n    <\/script>\n</body>\n</html>"}}]);