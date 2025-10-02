// class

class Employee {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  greet(): void {
    console.log(`Hello, ${this.name}`);
  }

  public getName(): string {
    return this.name;
  }

  public setName(name: string): void {
    this.name = name;
  }
}

let emp = new Employee("John");
emp.greet();
console.log(emp.getName());
emp.setName("Doe");
console.log(emp.getName()); 
