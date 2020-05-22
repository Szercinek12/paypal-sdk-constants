/* @flow */
/* eslint import/no-nodejs-modules: off */

import { getWebpackConfig } from 'grumbler-scripts/config/webpack.config';

const FILE_NAME = 'paypal-sdk-constants';
const MODULE_NAME = 'ppsdkconstants';

export let WEBPACK_CONFIG = getWebpackConfig({
    filename:   `${ FILE_NAME }.js`,
    modulename: MODULE_NAME
});

export let WEBPACK_CONFIG_MIN = getWebpackConfig({
    filename:   `${ FILE_NAME }.min.js`,
    modulename: MODULE_NAME,
    minify:     true,
    vars:       {
        __MIN__: true
    }
});

export let WEBPACK_CONFIG_TEST = getWebpackConfig({
    nazwa pliku :    `$ {  FILE_NAME  } .js` ,
    nazwa modułu : MODULE_NAME ,
    
    options:    {
        devtool: 'inline-source-map'
    },
    vars: {
        __TEST__: true
    }
});

export default [ WEBPACK_CONFIG, WEBPACK_CONFIG_MIN ];
