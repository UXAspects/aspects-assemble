var fs = require('fs');
var path = require('path');
var _ = require('lodash');

var files = fs.readdirSync(__dirname).filter(filename => path.extname(filename) === '.svg');

var output = [];

files.forEach(filename => {
    var name = filename.replace('.svg', '');

    var camelCase = _.camelCase(name);

    var str = `static ${upperCamelCase}: string = require('!!svg-inline-loader!../../assets/icons/${filename}');`;

    output.push(str);
});

fs.writeFileSync('output.txt', output.join('\r\n'));

debugger;