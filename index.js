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

import { log } from "node:console";
import { appendFile, readFile, rmSync, unlink, writeFile } from "node:fs";
import { rm } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { callbackify } from "node:util";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/*
log(__filename);
log(__dirname);
*/

/////////////read///////////////////////////

/*
readFile(
  join(__dirname, "read.txt"),
  {
    encoding: "utf-8",
  },
  (err, data) => {
    if (!err) {
      log(data);
    }
  }
);
*/

/////////////write///////////////////////////

/*
writeFile(
  join(__dirname, "write.txt"),
  "I'm wring writeFile of Nodejs",
  {
    encoding:'utf8'
  },
  (err) => {
    if (err) {
      log(err);
    }
  }
);
*/

/////////////Append File///////////////////////////

/*
appendFile(
  join(__dirname, "write.js"),
  `
  const a = "supun";
  const b = [12,44,67,4,100];

  consle.log(a);
  consle.log(b[4]);

  `,
  (err) => {
    if (!err) {
      log("Create File");
    }
  }
);
*/

/////////////File Remove///////////////////////////

unlink(join(__dirname, "write.txt"), (err) => !err && log("File is Deleted"));
