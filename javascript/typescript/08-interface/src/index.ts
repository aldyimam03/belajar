// interface
interface IEmployee {
  id: number;
  name: string;
  getSalary: (param: number) => number;
  getManagerName?: (param: string) => string;
}

class Employee implements IEmployee {
  id: number;
  name: string;
  getManagerName?: (param: string) => string;
  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  getSalary(param: number): number {
    if (param === this.id) {
      return 1000;
    }
    return 0;
  }
}

let emp = new Employee(1, "John");
console.log(emp.getSalary(1));

interface Person {
  firstName: string;
  lastName: string;
}

let person: Person = { firstName: "John", lastName: "Doe" };
console.log(person);
console.log(person.firstName);
console.log(person.lastName);

// interface untuk fungsi
interface Greeting {
  (name: string): string;
}

let greet: Greeting = (name: string) => {
  return `Hello, ${name}!`;
};
console.log(greet("Alice"));

// interface untuk array
interface StringArray {
  [index: number]: string;
}

let myArray: StringArray = ["Alice", "Bob", "Charlie"];
console.log(myArray[0]);
console.log(myArray[1]);
console.log(myArray[2]);

//interface untuk readonly property
interface Point {
  readonly x: number;
  readonly y: number;
}

let point: Point = { x: 10, y: 20 };
console.log(point.x);
console.log(point.y);

// interface untuk inheritance
interface Animal {
  name: string;
  makeSound(): void;
}

interface Dog extends Animal {
  breed: string;
  makeSound(): void;
}

let myDog: Dog = {
  name: "Buddy",
  breed: "Golden Retriever",
  makeSound(): void {
    console.log("Woof! Woof!");
  },
};

console.log(myDog.name);
console.log(myDog.breed);
myDog.makeSound();
