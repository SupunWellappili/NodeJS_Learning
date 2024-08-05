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

/*
//import path from "node:os"; //all details import
import { dirname, join } from "node:path";
import { readFile } from "node:fs";
import { fileURLToPath } from "url";
import { log } from "node:console";

const __filename = fileURLToPath(import.meta.url);
//const __dirname = path.__dirname(__filename);//all details import
const __dirname = dirname(__filename);

readFile(join(__dirname, "myName.txt"), 'utf-8', (err, data) => {
  if (err) {
    console.log(err);
  }
  //console.log(data.toString());
  console.log(data);

});
*/

/////////////File System///////////////////////////

import { log } from 'node:console';
import { dirname } from 'node:path';
import {fileURLToPath} from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

log(__filename);
log(__dirname);


