export const getConfig = async () => {
    const [htmlCode, cssCode] = await Promise.all([
        import ('!raw-loader!~/index.html'),
        import ('!raw-loader!~/style.css'),
    ]);

    return {
        javascript: {
            code: '',
            transformer: 'javascript',
            transform(code) {
                return `(async ()=>{
                    ${code}
                })();`;
            },
            visible: true
        },
        html: {
            code: htmlCode,
            transformer: 'html',
            visible: true
        },
        css: {
            code: cssCode,
            transformer: 'css',
            visible: false
        },
        foldBoxes:['html'],
        packages: {
            js: [
                './libs/helpers.js',
                './libs/hilo3d/Hilo3d.js',
                './libs/gl-matrix/gl-matrix-min.js',
                './libs/glslang/web-devel/glslang.js',
            ]
        }
    }
};