const _ = require("lodash"); // TODO

const myOddEvenArray = _.partition([1, 2, 3, 4, 5, 6], (n) => n % 2);

console.log(myOddEvenArray);

const { EventEmitter } = require("events");

const myEventEmitter = new EventEmitter();

// fungsi yang akan dijalankan ketika event coffee-order terjadi
const makeCoffee = (name) => {
  console.log(`Kopi ${name} telah dibuat!`);
};

const makeBill = (price) => {
  console.log(`Bill sebesar ${price} telah dibuat!`);
};

const onCoffeeOrderedListener = ({ name, price }) => {
  makeCoffee(name);
  makeBill(price);
};

myEventEmitter.on("coffee-order", onCoffeeOrderedListener);

// mendaftarkan fungsi makeCoffee sebagai listener event coffee-order
// myEventEmitter.on("coffee-order", makeCoffee);
// myEventEmitter.on("coffee-order", makeBill);

// Memicu event 'coffee-order' terjadi.
myEventEmitter.emit("coffee-order", { name: "Tubruk", price: 15000 });

// TODO 1
// const { EventEmitter } = require("events");
// const myEventEmitter = new EventEmitter();

// TODO 2
const birthdayEventListener = (name) => {
  console.log(`Happy birthday ${name}!`);
};

// TODO 3
myEventEmitter.on("birthday", birthdayEventListener);

// TODO 4
myEventEmitter.emit("birthday", "Dimas");
