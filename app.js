// const readline = require("readline");

import readline from "readline";

// const { generateMetadata } = require("./controllers/openaiControllers");

import generateMetadata from "./controllers/openaiControllers.js";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Youtube Video Title: \n", generateMetadata);
