
const yName = "Supun";
console.log(yName);

console.log("///////////////");

//os package
const os = require('os');
console.log(os.platform());
console.log(os.version());
console.log(__dirname);
console.log(__filename);

console.log("///////////////");

//path package
const path =require('path');
console.log(path.basename(__filename));
console.log(path.basename(__dirname));
console.log(path.extname(__filename));


