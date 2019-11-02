var wdioConfig = require('./wdio.conf.js').config;

var debugConfig = Object.assign(wdioConfig, {

    debug: true,

    execArgv: ['--inspect-brk'], 

    capabilities: [
         {
            maxInstances: 1,
            browserName: 'chrome',
            acceptSslCerts: true,
            acceptInsecureCerts : true,
        }
    ],

    exclude: [
      //none
    ],

    baseUrl: "https://hsynlwsss201.amwaternp.net:8443/selfservice-web/login.do"
    //baseUrl: "https://hsynlwsss101.amwaternp.net:8443/selfservice-web/login.do"
});

exports.config = debugConfig;