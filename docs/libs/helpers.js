/**
 * Modified from https://github.com/austinEng/webgpu-samples/blob/master/src/helpers.ts
 */

const helpers = {};

helpers.createTextureFromImage = async function createTextureFromImage(device, src, usage, needCors) {
    const img = new Image();
    if (needCors) {
        img.crossOrigin = 'anonymous'
    }
    img.src = src;
    await img.decode();

    const imageCanvas = document.createElement('canvas');
    imageCanvas.width = img.width;
    imageCanvas.height = img.height;

    const imageCanvasContext = imageCanvas.getContext('2d');
    imageCanvasContext.translate(0, img.height);
    imageCanvasContext.scale(1, -1);
    imageCanvasContext.drawImage(img, 0, 0, img.width, img.height);
    const imageData = imageCanvasContext.getImageData(0, 0, img.width, img.height);

    let data = null;

    const bytesPerRow = Math.ceil(img.width * 4 / 256) * 256;
    if (bytesPerRow == img.width * 4) {
        data = imageData.data;
    } else {
        data = new Uint8Array(bytesPerRow * img.height);
        let imagePixelIndex = 0;
        for (let y = 0; y < img.height; ++y) {
            for (let x = 0; x < img.width; ++x) {
                let i = x * 4 + y * bytesPerRow;
                data[i] = imageData.data[imagePixelIndex];
                data[i + 1] = imageData.data[imagePixelIndex + 1];
                data[i + 2] = imageData.data[imagePixelIndex + 2];
                data[i + 3] = imageData.data[imagePixelIndex + 3];
                imagePixelIndex += 4;
            }
        }
    }

    const texture = device.createTexture({
        size: {
            width: img.width,
            height: img.height,
            depth: 1,
        },
        format: "rgba8unorm",
        usage: GPUTextureUsage.COPY_DST | usage,
    });

    device.queue.writeTexture({
        texture
    }, data, {
        offset: 0,
        bytesPerRow
    }, {
        width: img.width,
        height: img.height,
        depth: 1,
    });
    return texture;
};