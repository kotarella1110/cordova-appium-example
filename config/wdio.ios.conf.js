const path = require('path');
const config = require('./wdio.shared.conf').config;

//
// ============
// Capabilities
// ============
// Define your capabilities here. WebdriverIO can run multiple capabilities at the same
// time. Depending on the number of capabilities, WebdriverIO launches several test
// sessions. Within your capabilities you can overwrite the spec and exclude options in
// order to group specific specs to a specific capability.
//
// If you have trouble getting all important capabilities together, check out the
// Sauce Labs platform configurator - a great tool to configure your capabilities:
// https://docs.saucelabs.com/reference/platforms-configurator
//
config.capabilities = [
    {
        platformName: 'iOS',
        platformVersion: '12.1',
        deviceName: 'iPhone XS',
        app: path.join(process.cwd(), 'platforms/ios/build/emulator/CordovaAppiumExample.app'),
        autoWebview: true,
    },
];

exports.config = config;
