// const validator = require("validator");

// console.log(result)
// console.log(validator.isMobilePhone("628123456789", "id-ID")); // cek nomor hp 
// console.log(validator.isNumeric("123a")); // false

import chalk from "chalk";

const log = console.log;

log(chalk.red("Hello world!"));


// chalk dalam string literal 
const lorem = `
${chalk.red.bgBlue("Hello world!")}
${chalk.green.bgRed.italic.strikethrough("Hello world!")}
${chalk.blue.bgGreen.bold("Hello world!")}
`;

log(lorem);

// nodemon install global caranya : npm install -g nodemon
// nodemon install lokal caranya : npm install --save-dev nodemon
// kalo mau pake nodemon secara lokal maka harus disimpen dalam script di package.json
// contoh script : "dev": "nodemon app.js" nanti diterminal jalanin npm run dev