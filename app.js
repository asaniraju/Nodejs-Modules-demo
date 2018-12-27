var path = require('path');
var os =require('os');

var pathObj = path.parse(__filename);

console.log('====================================');
console.log(pathObj);
console.log('====================================');

var freeMemory = os.freemem();
var totalMemory = os.totalmem();

console.log(`freeMemory: ${freeMemory}`);
console.log(`totalMemory: ${totalMemory}`);

