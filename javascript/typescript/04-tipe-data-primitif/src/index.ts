// type data primitif

// string
let nama: string = "Aldy";
console.log(nama);

// number
let umur: number;
umur = 20;
umur = 20.5; // bisa desimal
umur = 0b1010; // bisa biner
umur = 0o12; // bisa octal
umur = 0xa; // bisa hexadecimal
umur = Infinity; // bisa infinity
umur = -Infinity; // bisa -infinity
console.log(umur);

// boolean
let isLogin: boolean;
isLogin = true;
isLogin = false;
console.log(isLogin);

// null
let dataNull: null;
dataNull = null;
console.log(dataNull);

// undefined
let dataUndefined: undefined;
dataUndefined = undefined;
console.log(dataUndefined); // undefined

// bigint
let big: bigint;
big = 9007199254741991n; // harus diakhiri dengan n
console.log(big);

// symbol
let sym1: symbol = Symbol("Aldy");
let sym2: symbol = Symbol("Aldy");
console.log(sym1 === sym2); // false, karena symbol itu unik
console.log(sym1);
console.log(sym2);