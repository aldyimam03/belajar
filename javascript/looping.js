for (let kemungkinan = 1; kemungkinan <= 10; kemungkinan++) {
  console.log(`${kemungkinan} kemungkinan`); // output: 1 kemungkinan, 2 kemungkinan, dst
}

for (let i = 0; i < 5; i++) {
  if (i === 3) {
    break;
  }
  console.log(i); // output: 0, 1, 2
}

for (let i = 0; i < 5; i++) {
  console.log(i); // output: 0, 1, 2, 3, 4
}
