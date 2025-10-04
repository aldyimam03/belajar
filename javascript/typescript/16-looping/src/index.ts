// looping 
// for
// ini adalah looping angka
for (let i = 0; i <= 10; i++) {
  console.log(`Perulangan ke-${i}`);
} 

// ini adalah looping array
let fruits: string[] = ["Apple", "Banana", "Orange"];
for (let fruit of fruits) {
  console.log(fruit);
}


// ini adalah looping object
let person: any = {
  name: "Aldy",
  age: 20,  
  city: "Jakarta",
  gender: "Male"
};

for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}

// while 
let i = 0;
while (i < 10) {
  console.log(`Perulangan ke-${i}`);
  i++;
}

// do while 
let j = 0;
do {
  console.log(`Perulangan ke-${j}`);
  j++;
} while (j < 10);

// nested looping
for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    console.log(`Perulangan ke-${i}-${j}`);
  }
}

// break & continue
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    continue;
  }
  console.log(`Perulangan ke-${i}`);
}

for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(`Perulangan ke-${i}`);
}

// labeled statement
outerLoop: for (let i = 0; i < 5; i++) {
  innerLoop: for (let j = 0; j < 5; j++) {
    if (i === 2 && j === 2) {
      break outerLoop;
    }
    console.log(`Perulangan ke-${i}-${j}`);
  }
}