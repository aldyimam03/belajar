// percabangan if else

let nilai: number = 80;
if (nilai >= 90) {
  console.log("Nilai A");
} else if (nilai >= 80) {
  console.log("Nilai B");
} else if (nilai >= 70) {
  console.log("Nilai C");
} else if (nilai >= 60) {
  console.log("Nilai D");
} else {
  console.log("Nilai E");
}

// nested if else
let username: string = "admin";
let password: string = "admin123";

if (username === "admin") {
  if (password === "admin123") {
    console.log("Login berhasil");
  } else {
    console.log("Password salah");
  }
} else {
  console.log("Username salah");
}

// switch case
let day: number = 3;
switch (day) {
  case 1:
    console.log("Senin");
    break;
  case 2:
    console.log("Selasa");
    break;
  case 3:
    console.log("Rabu");
    break;
  default:
    console.log("Hari tidak valid");
    break;
}

// ternary operator
let age: number = 20;
let isAdult: string = age >= 18 ? "Dewasa" : "Anak-anak";
console.log(isAdult);

// nested ternary operator
let score: number = 85;
let grade: string =
  score >= 90
    ? "A"
    : score >= 80
    ? "B"
    : score >= 70
    ? "C"
    : score >= 60
    ? "D"
    : "E";
console.log(grade);

// short-circuit evaluation
let isLoggedIn: boolean = true;
isLoggedIn && console.log("User is logged in");

let isMember: boolean = false;
isMember || console.log("User is not a member");

// optional chaining digunakan untuk mengakses properti dari sebuah object yang mungkin undefined atau null
// nullish coalescing operator digunakan untuk memberikan nilai default jika sebuah variabel bernilai null atau undefined
interface Address {
  street?: string;
  city?: string;
}

interface User {
  name: string;
  address?: Address;
}

let user: User = { name: "Aldy" };

console.log(user.address?.street ?? "Street not available");