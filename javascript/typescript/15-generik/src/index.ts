// generik adalah kemampuan untuk membuat sebuah function atau class yang dapat digunakan untuk berbagai tipe data

// generik pada function
function getData<T>(data: T): T {
  return data;
}

let dataString = getData<string>("Hello");
console.log(dataString);

let dataNumber = getData<number>(123);
console.log(dataNumber);

// generik inversi
let dataBoolean = getData("<boolean>(true)");

console.log(dataBoolean);


// generik constraint adalah kemampuan untuk membatasi tipe data yang dapat digunakan pada generik

interface Length {
  length: number;
}

function getLength<T extends Length>(data: T): number {
  console.log(data.length);
  return data.length;
}

let arrayLength = getLength([1, 2, 3, 4, 5]);
console.log(arrayLength);

//generik interface adalah kemampuan untuk membuat sebuah interface yang dapat digunakan untuk berbagai tipe data
interface Pair<K, V> {
  key: K;
  value: V;
  
}

let pair1: Pair<string, number> = { key: "Aldy", value: 123 };
console.log(pair1);