// static method dan property adalah method dan property yang dimiliki oleh classnya langsung bukan oleh objectnya

class MathUtil {
  static PI: number = 3.14;

  static hitungLuasLingkaran(jariJari: number): number {
    return this.PI * jariJari * jariJari;
  }
}
console.log(MathUtil.PI);
console.log(MathUtil.hitungLuasLingkaran(10));

class Employee {
  static headcount: number = 0;
  constructor(
    private firstName: string,
    private lastName: string,
    private salary: number
  ) {
    Employee.headcount++;
  }

  public static getHeadcount(): number {
    return Employee.headcount;
  }
}

let emp1 = new Employee("John", "Doe", 1000);
let emp2 = new Employee("Jane", "Doe", 2000);
console.log("Nilai headcount: " + Employee.getHeadcount());

console.log("Nilai headcount: " + Employee.headcount);
console.log(emp1);
// Employee.headcount = 10; // error karena headcount adalah static property yang hanya bisa diakses melalui classnya langsung
// emp1 // emp1.headcount = 10; // error karena headcount adalah static property yang hanya bisa diakses melalui classnya langsungheadcount = 10; // error karena headcount adalah static property yang hanya bisa diakses melalui classnya langsung
// console.log("Nilai headcount: " + emp1.headcount); // error karena headcount adalah static property yang hanya bisa diakses melalui classnya langsung
