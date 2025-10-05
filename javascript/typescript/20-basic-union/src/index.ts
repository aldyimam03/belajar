// union adalah sebuah tipe data yang bisa berisi beberapa tipe data sekaligus
// union digunakan untuk membuat kode lebih fleksibel
// union juga digunakan untuk membatasi nilai yang bisa diterima oleh sebuah variabel

let code: string | number; // ini adalah union

code = "Hello"; // ini adalah string
console.log(code); // Hello

code = 123; // ini adalah number
console.log(code); // 123

// code = true; // Error: Type 'boolean' is not assignable to type 'string | number'

let empId: (string | number); // union type untuk employee id

empId = "EMP001";
empId = 1;
// empId = false; // Error: Type 'boolean' is not assignable to type 'string | number'

// function dengan parameter union type
function displayId(id: string | number): void {
  console.log(`ID: ${id}`);
}

displayId("EMP001");
displayId(1);
// displayId(false); // Error: Argument of type 'boolean' is not assignable to parameter of type 'string | number'

// guarding dengan union type
interface Cat {
  name: string;
  meow: () => void;
}

interface Dog {
  name: string;
  bark: () => void;
}   

function speak(animal: Cat | Dog): void {
  console.log(animal.name);
  if ("meow" in animal) {
    animal.meow();
  } else if ("bark" in animal) {
    animal.bark();
  }
}

speak({ name: "Kitty", meow: () => console.log("Meow") });
speak({ name: "Doggy", bark: () => console.log("Bark") });
// speak({ name: "Unknown" }); // Error: Argument of type '{ name: string; }' is not assignable to parameter of type 'Cat | Dog'. 

