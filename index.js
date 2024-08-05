/*
const yName = "Supun";
console.log(yName);

console.log("///////////////");

//os package
//const os = require('os');
import os from 'node:os';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(import.meta.url);


console.log(os.platform());
console.log(os.version());
console.log(__dirname);
console.log(__filename);

console.log("///////////////");



//path package
//const path =require('path');
import path from 'node:path';


console.log(path.basename(__filename));
console.log(path.basename(__dirname));
console.log(path.extname(__filename));
*/


/////////////File Handle///////////////////////////

//import path from "node:os"; //all details import 
import { dirname } from "node:path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
//const __dirname = path.__dirname(__filename);//all details import 
const __dirname = dirname.__dirname(__filename);



