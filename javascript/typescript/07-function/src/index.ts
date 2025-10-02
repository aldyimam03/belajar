// fungsi 

function sayHello(name: string): string {
  console.log(`Hello, ${name}!`);
  return `Hello, ${name}!`;
}

function add(a: number, b: number): number {
  return a + b;
}

sayHello("Aldy");
console.log(add(5, 10));

// fungsi anonim
const sayHelloAnon = function(name: string): string {
  console.log(`Hello, ${name}!`);
  return 'true';
};

sayHelloAnon("Aldy");

// fungsi panah
const sayHelloArrow = (name: string): string => {
  return `Hello, ${name}!`;
};

sayHelloArrow("Aldy");

//parameter opsional
function greet(name: string, greeting?: string): string {
  if (greeting) {
    console.log(`${greeting}, ${name}!`);
    return `${greeting}, ${name}!`;
  }
  console.log(`Hello, ${name}!`);
  return `Hello, ${name}!`;
}

//parameter default
function greetWithDefault(name: string, greeting: string = "Hello"): string {
  console.log(`${greeting}, ${name}!`);
  return `${greeting}, ${name}!`;
}

console.log(greetWithDefault("Aldy")); // Output: Hello, Aldy!

// nipper function
function multiplyBy(factor: number) {
  return function (x: number): number {
    return x * factor;
  };
}

const double = multiplyBy(2);
const triple = multiplyBy(3);

console.log(double(5)); // Output: 10
console.log(triple(5)); // Output: 15