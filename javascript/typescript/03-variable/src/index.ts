// variable implicit type
let nama = "Aldy";
let umur = 20;
console.log(nama, umur);

// variable explicit type
// cara 1
let alamat: string = "Jl. Merdeka No. 1";
console.log(alamat);

// cara 2
let tinggi: number;
tinggi = 170;
console.log(tinggi);

// let, const, var
// let dan const adalah fitur dari ES6
// var adalah fitur dari ES5
// beda let dan var adalah scope
// var memiliki function scope
// let memiliki block scope
// const adalah variable yang nilainya tidak bisa diubah (immutable) dan memiliki block scope

// contoh penggunaan var
function testVar() {
  var bahasa = "JavaScript";
  if (true) {
    var bahasa = "TypeScript";
    console.log(bahasa); // output: TypeScript
  }
  console.log(bahasa); // output: TypeScript
}
testVar();

// contoh penggunaan let
function testLet() {
  let framework = "Vue";
  if (true) {
    let framework = "Angular";
    console.log(framework); // output: Angular
  }
  console.log(framework); // output: Vue
}
testLet();

// contoh penggunaan const
const negara: string = "Indonesia";
console.log(negara);
// negara = "Malaysia"; // error karena const tidak bisa di reassign
