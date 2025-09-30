// pada bab oop tsconfig.json diubah menjadi "module": "nodenext", "type": "module" di package.json, script "dev" : "node --loader ts-node/esm src/index.ts" di package.json
// karena pada tsconfig.json sebelumnya "module": "commonjs" menyebabkan error pada saat import class dari file lain

import { Account } from "./entity/Account.js";
import { Animal } from "./entity/Animal.js";
import { Shape } from "./entity/Shape.js";

// membuat object dari class Animal
let cat = new Animal("Kitty", 2);
let dog = new Animal("Doggy", 3);

cat.showInfo(); // output: Nama hewan: Kitty, Umur: 2 tahun
dog.showInfo(); // output: Nama hewan: Doggy, Umur: 3 tahun

// inheritance atau pewarisan
class Dog extends Animal {
  breed: string;

  constructor(name: string, age: number, breed: string) {
    // super digunakan untuk memanggil constructor dari class parent
    super(name, age);
    this.breed = breed;
  }

  showInfo(): void {
    super.showInfo();
    console.log(`Ras: ${this.breed}`);
  }
}

let dog2 = new Dog("Doggy", 3, "Golden Retriever");
dog2.showInfo();
// output:
// Nama hewan: Doggy, Umur: 3 tahun
// Ras: Golden Retriever

// ini adalah penerapan OOP encapsulation
let account = new Account(1, "Aldy", 1000);
account.id = 100;
account.deposit(500);

console.log(account);

// Ini adalah OOP polymorphism
// membuat class Shape sebagai parent class
// class Shape memiliki method getArea() yang akan di-override oleh class turunan
class Circle extends Shape {
  private _radius: number;

  constructor(color: string, radius: number) {
    super(color);
    this._radius = radius;
  }

  getArea(): number {
    return Math.PI * this._radius * this._radius;
  }

  showInfo(): void {
    super.showInfo();
    console.log(`Radius: ${this._radius}`);
    console.log(`Luas: ${this.getArea()}`);
  }
}

class Rectangle extends Shape {
  private _width: number;
  private _height: number;

  constructor(color: string, width: number, height: number) {
    super(color);
    this._width = width;
    this._height = height;
  }

  getArea(): number {
    return this._width * this._height;
  }

  showInfo(): void {
    super.showInfo();
    console.log(`Width: ${this._width}, Height: ${this._height}`);
    console.log(`Luas: ${this.getArea()}`);
  }
}

let shape1 = new Circle("Red", 10);
shape1.showInfo();
// output:
// Warna: Red
// Radius: 10
// Luas: 314.1592653589793

let shape2 = new Rectangle("Blue", 20, 30);
shape2.showInfo();
// output:
// Warna: Blue
// Width: 20, Height: 30
// Luas: 600

