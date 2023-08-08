function isInteger(number) {
  if typeof number(!=== "number") {
    return 'Please provide a number';
  } else {
    if (number % 1 === 0) {
      return true;
    } else {
      return false;
    }
  }
} console.log(isInteger(4))

//  solution 2
function numbers(a, b, c) {
  let sum = a + b + c;
  return sum;
}
let num1 = 10;
let num2 = 20;
let num3 = 30;
let result = numbers(num1, num2, num3);
console.log('Total is :', result);