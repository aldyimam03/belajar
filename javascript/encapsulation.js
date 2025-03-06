// tanpa encapsulation
// class CoffeMachine {
//   constructor(waterAmount) {
//     this.waterAmount = waterAmount;
//     this.temperature = 90;
//   }

//   makeCoffe() {
//     console.log("Membuat kopi dengan suhu", this.temperature);
//   }
// }

// const coffee = new CoffeMachine(100);
// coffee.temperature = 60;

// coffee.makeCoffe(); // Output: Membuat kopi dengan suhu 60

// dengan encapsulation
// tanda _ menandakan bahwa temperature tidak dapat diubah, namun  tanda underscore tidak benar-benar membuat property temperature tidak dapat diubah
// class CoffeeMachine {
//   constructor(waterAmount) {
//     this.waterAmount = waterAmount;
//     this._temperature = 90;
//   }

//   set temperature(temperature) {
//     console.log("you are not allowed to change the temperature");
//   }

//   get temperature() {
//     return this._temperature;
//   }
// }

// const coffee = new CoffeeMachine(10);
// console.log("Sebelum diubah: ", coffee.temperature);
// coffee.temperature = 100;
// console.log("Setelah diubah: ", coffee.temperature);

// tanda # menandakan private agar benar benar tidak dapat diubah
class CoffeeMachine {
  #temperature = 90;

  constructor(waterAmount) {
    this.waterAmount = waterAmount;
    this.#temperature = this.#defaultTemperature();
  }

  set temperature(temperature) {
    console.log("you are not allowed to change the temperature");
  }

  get temperature() {
    return this.#temperature;
  }

  #defaultTemperature() {
    return 90;
  }
}
