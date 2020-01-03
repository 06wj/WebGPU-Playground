import {
    getConfig,
} from '~/commonConfig';

export default async () => {
    const [javascript, commonConfig] = await Promise.all([
        import ('!raw-loader!./index.js'),
        getConfig()
    ]);

    commonConfig.javascript.code = javascript;
    return commonConfig;
};