(window.webpackJsonp = window.webpackJsonp || []).push([[75], { 479: function (n, t, e) { "use strict"; e.r(t), t.default ="<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>WebGPU Playground</title>\n</head>\n<body>\n    <div id='not-supported'>\n        Your browser does not support WebGPU, please visit <a href='https://webgpu.io' target=\"_blank\">webgpu.io</a> for more information.\n    </div>\n    <script>\n        const tokens = {\n            github: 'AqwaJIkdykbQujsbonJ5FC1mji+0InK/DCvny3pkTSYNodWyiWM9Rnlw3/bKkiPGUqGdsLrg7tE8b8biE2cFxgYAAABheyJvcmlnaW4iOiJodHRwczovLzA2d2ouZ2l0aHViLmlvOjQ0MyIsImZlYXR1cmUiOiJXZWJHUFUiLCJleHBpcnkiOjE2OTE3MTE5OTksImlzU3ViZG9tYWluIjp0cnVlfQ==',\n            gitee: 'AlVHJjkqWKAO0p8TbuvHaoEB5i5v6xaXW3zRHHw62h+eh0BVUvQXuI4fHb6gQPn/l7l+/+EYaIb/lHa36f+LrgQAAABseyJvcmlnaW4iOiJodHRwczovL2Zvcmstb3Blbi1zb3VyY2UuZ2l0ZWUuaW86NDQzIiwiZmVhdHVyZSI6IldlYkdQVSIsImV4cGlyeSI6MTY3NTIwOTU5OSwiaXNTdWJkb21haW4iOnRydWV9',\n            local: 'ArxQ72tk4k5PJDVUagmofjd0/6lwmdOBfKBbjO/TmogyBWTTApG6/3tKep9XY7SyJX0z4Qoj+P+mALwx/AL6aA0AAABJeyJvcmlnaW4iOiJodHRwOi8vbG9jYWxob3N0OjIzMzMiLCJmZWF0dXJlIjoiV2ViR1BVIiwiZXhwaXJ5IjoxNjkxNzExOTk5fQ=='\n        };\n        const meta = document.createElement('meta');\n        meta.setAttribute('http-equiv', 'origin-trial');\n        let token = tokens.github;\n        if (location.href.indexOf('gitee') > -1) {\n            token = tokens.gitee;\n        } else if (location.href.indexOf('local') > -1) {\n            token = tokens.local;\n        }\n\n        meta.setAttribute('content', token);\n        document.head.appendChild(meta);\n    <\/script>\n    <canvas id='canvas'></canvas>\n    <script>\n        window.showNotSupport = () => {\n            alert('Your browser does not support WebGPU!');\n            document.body.querySelector('#not-supported').style.display = 'block';\n        };\n        if (!navigator.gpu) {\n            showNotSupport();\n        } else {\n            navigator.gpu.requestAdapter().catch(() => {\n                showNotSupport();\n            });\n        }\n    <\/script>\n</body>\n</html>"}}]);