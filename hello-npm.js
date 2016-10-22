

var ansi = require('ansi');
var cursor = ansi(process.stdout);

console.log('test');

cursor.beep();
