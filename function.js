
// solve 1
function add(num1, num2) {
  var sum = num1 + num2
  console.log(sum);
}
add(3, 12);

//solve  2
function myAvrg(assin1, assin2, assin3) {
  const total = assin1 + assin2 + assin3;
  const average = total / 3;
  return average;
}
const assinMark1 = 57;
const assinMark2 = 51;
const assinMark3 = 47;
var subtotal = myAvrg(assinMark1, assinMark2, assinMark3);
console.log('my avrg mark ', subtotal);

//solution 3
function foo() {
  console.log('You are foo');
}
foo()

//solution 4

function makeAverg(num1, num2, num3) {
  const total = num1 + num2 + num3;
  const myAverg = total / 3;
  return myAverg;
}
var result = makeAverg(23, 24, 29);
console.log('My average result  : ', result);