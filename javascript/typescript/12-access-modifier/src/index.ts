// access modifier

// 1. private -> hanya bisa diakses di dalam class
// 2. protected -> bisa diakses di dalam class dan turunannya (inheritance)
// 3. public -> bisa diakses di mana saja (default)

// penerapan private
class Account {
  private _id: number;
  private _name: string;
  private _balance: number;

  constructor(id: number, name: string, balance: number) {
    this._id = id;
    this._name = name;
    this._balance = balance;
  }

  public get id(): number {
    return this._id;
  }
  public set id(value: number) {
    this._id = value;
  }

  public get balance(): number {
    return this._balance;
  }
  public set balance(value: number) {
    this._balance = value;
  }
  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }
}

let account = new Account(1, "Aldy", 1000);
console.log(account.id);
console.log(account.name);
console.log(account.balance);

// penerapan public
class Animal {
  public name: string;
  public age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  showInfo(): void {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  }
}

let animal = new Animal("Kucing", 2);
animal.showInfo();
console.log(animal.name);
console.log(animal.age);

// penerapan protected
class Person {
  protected name: string;
  protected age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  showInfo(): void {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  }
}

let person = new Person("Budi", 30);
person.showInfo();
// console.log(person.name); // error karena protected
// console.log(person.age); // error karena protected

// cara mengakses protected dengan inheritance
class Student extends Person {
  studentId: number;

  constructor(name: string, age: number, studentId: number) {
    super(name, age);
    this.studentId = studentId;
  }

  showStudentInfo(): void {
    this.showInfo();
    console.log(`Student ID: ${this.studentId}`);
  }
}

let student = new Student("Ani", 20, 12345);
student.showStudentInfo();
console.log(student.studentId); 
