function calculateBill(billAmount, taxRate = 0.13, tipRate = 0.15) {
  console.log('Running Calculate Bill');
  const total = billAmount + billAmount * taxRate + billAmount * tipRate;
  return total;
}

calculateBill();
const firstName = 'janez';
function sayHiTo() {
  return `Helllo ${firstName}`;
}
const greeting = sayHiTo();
console.log(greeting);

const myBill4 = calculateBill(100, undefined, 0.2);
console.log(myBill4);
