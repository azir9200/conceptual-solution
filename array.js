let nums = [12, 14, 15, 13, 23, 43, 32, 34];
//console.log(nums);
for (var i = 0; i < 5; i++) {
  //console.log(i);
}

for (var i = 72; i < 83; i += 2) {
  //console.log(i);
}

//need solution
for (var i = 0; i <= 20; i++) {

  if (i < 12) {
    break;
  }
  console.log(i);
}


var item = ['bottle', 'glass', 'cups', 'jugs', 'mugs'];
for (var i = 0; i < item.length; i++) {
  if (item[i] === 'cups') {
    continue;
  }
  //console.log('I have a beautiful  : ', item[i]);
}
//solved 
var arr = [10, 15, 20, 30, 40, 50,];
// for (var i = 0; i < arr.length; i++) {
// if (arr[i] === 30) {
//   continue;
//}
for (const element of arr) {
  //console.log('Here is my number  : ', arr);
}

//solution  4
const itemsName = ['Laptop', 'Television', 'Mobile', 'Desktop', 'Pen'];
// for (let i = 0; i < itemsName.length; i++) {
//   const element = itemsName[i];
for (const element of itemsName) {
  //console.log('Here my all products : ', element);

}
// find out biggest number
let myPlan = [20, 34, 45, 46, 50, 70];
for (let number of myPlan) {
  if (number > 50) {
    console.log(number);
  }
}