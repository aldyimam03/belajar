const message = (name) => {
  console.log(name);
};

message("Gilang");

const memoryInformation = process.memoryUsage();

console.log(memoryInformation);

// const initialMemoryUsage = process.memoryUsage.heapUsed;
// const yourName = process.argv[1];
// const environment = process.env.NODE_ENV;

// for (let i = 0; i <= 10000; i++) {}

// const currentMemoryUsage = // TODO 4
//   console.log(`Hai, ${yourName}`);
// console.log(`Mode environment: ${environment}`);
// console.log(
//   `Penggunaan memori dari ${initialMemoryUsage} naik ke ${currentMemoryUsage}`
// );

const Tiger = require("./Tiger");
const Wolf = require("./Wolf");

const fighting = (tiger, wolf) => {
  if (tiger.strength > wolf.strength) {
    tiger.growl();
    return;
  }

  if (wolf.strength > tiger.strength) {
    wolf.howl();
    return;
  }

  console.log("Tiger and Wolf have same strength");
};

const tiger = new Tiger();
const wolf = new Wolf();

fighting(tiger, wolf);

// HARUS INSTALL npm install moment
// const moment = require('moment');

// const date = moment().format("MMM Do YY");
// console.log(date);
