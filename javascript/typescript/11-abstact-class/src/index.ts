// abstract class

abstract class Animal {
  abstract name: string;
  age: number;

  constructor(age: number) {
    this.age = age;
  }

  abstract makeSound(): void;

  eat(): void {
    console.log(`${this.name} is eating`);
  }
}

class Cat extends Animal {
  name: string;

  constructor(name: string, age: number) {
    super(age);
    this.name = name;
  }

  makeSound(): void {
    console.log("Meow");
  }
}

let cat = new Cat("Kitty", 2);
cat.makeSound();
cat.eat();
console.log(cat.name);
console.log(cat.age);

// perbedaan interface dan abstract class
// interface hanya untuk mendefinisikan struktur data, tidak bisa memiliki implementasi
// abstract class bisa memiliki implementasi, bisa memiliki property dan method biasa

// abstract
abstract class Kendaraan {
  abstract merk: string;
  abstract tahun: number;

  berjalan(): void {
    console.log(`${this.merk} berjalan`);
  }
}

// interface
interface BahanBakar {
  jenis: string;
  isiBahanBakar(liter: number): void;
}

// kalo menggunakan abstract class bisa extends, kalo interface harus implements
class Mobil extends Kendaraan implements BahanBakar {
  merk: string;
  tahun: number;
  jenis: string;
  constructor(merk: string, tahun: number, jenis: string) {
    super();
    this.merk = merk;
    this.tahun = tahun;
    this.jenis = jenis;
  }

  isiBahanBakar(liter: number): void {
    console.log(`Mengisi ${liter} liter bahan bakar ${this.jenis}`);
  }
}

const mobil = new Mobil("Toyota", 2020, "Pertalite");
mobil.berjalan(); // output: Toyota berjalan
mobil.isiBahanBakar(40); // output: Mengisi 40 liter bahan bakar Pertalite
console.log(mobil.merk); // output: Toyota
console.log(mobil.tahun); // output: 2020
console.log(mobil.jenis); // output: Pertalite
