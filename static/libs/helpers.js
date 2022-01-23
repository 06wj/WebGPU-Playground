/**
 * Modified from https://github.com/austinEng/webgpu-samples/blob/master/src/helpers.ts
 */

const helpers = {};

async function loadImages(srcList, needCors) {
   const imageList = await Promise.all(srcList.map(async (src) => {
        const img = new Image();
        if (needCors) {
            img.crossOrigin = 'anonymous'
        }
        img.src = src;
        await img.decode();
        return img;
    }));
    return imageList;
}

function createImageData(imageList) {
    const imageCount = imageList.length;
    let width;
    let height;
    let bytesPerRow;

    const imageDataList = imageList.map(img => {
        imageWidth = img.width;
        imageHeight = img.height;

        const imageCanvas = document.createElement('canvas');
        imageCanvas.width = imageWidth;
        imageCanvas.height = imageHeight;

        const imageCanvasContext = imageCanvas.getContext('2d');
        imageCanvasContext.translate(0, imageHeight);
        imageCanvasContext.scale(1, -1);
        imageCanvasContext.drawImage(img, 0, 0, imageWidth, imageHeight);
        const imageData = imageCanvasContext.getImageData(0, 0, imageWidth, imageHeight);

        bytesPerRow = Math.ceil(imageWidth * 4 / 256) * 256;
        if (bytesPerRow == imageWidth * 4) {
            return imageData.data;
        } else {
            const data = new Uint8Array(bytesPerRow * imageHeight);
            let imagePixelIndex = 0;
            for (let y = 0; y < img.height; ++y) {
                for (let x = 0; x < imageWidth; ++x) {
                    let i = x * 4 + y * bytesPerRow;
                    data[i] = imageData.data[imagePixelIndex];
                    data[i + 1] = imageData.data[imagePixelIndex + 1];
                    data[i + 2] = imageData.data[imagePixelIndex + 2];
                    data[i + 3] = imageData.data[imagePixelIndex + 3];
                    imagePixelIndex += 4;
                }
            }

            return data;
        }
    });

    return {
        imageDataList,
        imageCount,
        imageWidth,
        imageHeight,
        bytesPerRow,
    }
};

helpers.createTextureFromImage = async function createTextureFromImage(device, src, usage, needCors) {
    const srcList = Array.isArray(src)? src : [src];
    const images = await loadImages(srcList, needCors);
    const {
        imageDataList,
        imageCount,
        imageWidth,
        imageHeight,
        bytesPerRow,
    } = createImageData(images);

    const texture = device.createTexture({
        size: {
            width: imageWidth,
            height: imageHeight,
            depthOrArrayLayers: imageCount,
        },
        dimension: '2d',
        format: "rgba8unorm",
        usage: GPUTextureUsage.COPY_DST | usage,
    });

    for(let i = 0;i < imageCount;i ++) {
        device.queue.writeTexture({
            texture,
            origin:{
                z: i,
            }
        }, imageDataList[i], {
            bytesPerRow,
        }, {
            width: imageWidth,
            height: imageHeight,
            depth: 1,
        });
    }
    return texture;
};