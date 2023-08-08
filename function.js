let numbers = [12, 13, 14, 23, 34, 45];
console.log(numbers);

let person = {
  name: "joni",
  age: 30,
  city: "Porto",
};
person.age = 33;
console.log(person);
// problems  3
function feetToInch(feet) {
  const inchOneFeet = 12;
  const inches = feet * inchOneFeet;
  return inches;
}
let feetValue = 5;
let result = feetToInch(feetValue);
console.log('feetValue :  ', result);

// problems 4
function toMeter(centiMeters) {
  const oneMeter = 100;
  const meters = centiMeters / oneMeter;
  return meters;
}
let centimValue = 150;
let totalCent = toMeter(centimValue);
console.log(totalCent);