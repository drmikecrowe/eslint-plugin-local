const { existsSync } = require('fs');
const { dirname } = require('path');

let dir = dirname(__dirname);
let rfile = `${dir}/.eslintplugin`;
while (dir !== "//" && !existsSync(`${rfile}.js`)) {
    dir = dirname(dir);
    rfile = `${dir}/.eslintplugin`;
}
module.exports = require(rfile);
