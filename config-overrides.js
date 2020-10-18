const path = require('path');
const isDev = process.env.NODE_ENV === 'development';
const apiPort = process.env.API_PORT;


module.exports = {
    webpack: (config, env) => {
        // console.log('config', config);
        return config;
    },
    devServer: (configFunction) => {
        return (proxy, allowedHost) => {
            const config = configFunction(proxy, allowedHost);
            config.proxy = {
                "/api": `http://localhost:${apiPort}`
            }
            // console.log('devServer', config)
            return config;
        };
    },
    paths: (paths, env) => {
        paths.appHtml = path.join(__dirname, 'src', 'public', 'index.html');
        paths.appPublic = path.join(__dirname, 'src', 'public');
        paths.appBuild = path.join(__dirname, 'build', 'public');
        paths.appIndexJs = path.join(__dirname, 'src', 'client', 'index.tsx');
        paths.appSrc = path.join(__dirname, 'src', 'client');
        // console.log(paths);
        return paths;
    },
}