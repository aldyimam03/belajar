// ini adalah penerapan OOP inheritance
// membuat class Animal sebagai parent class
export class Animal {
  name: string;
  age: number;

  // constructor adalah method khusus yang akan dipanggil pertama kali saat membuat object dari class
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  showInfo(): void {
    console.log(`Nama hewan: ${this.name}, Umur: ${this.age} tahun`);
  }
}