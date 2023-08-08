var shopCart = {
  book: 3,
  pen: 5,
  note: 4,
  calender: 6,
}
var myPen = shopCart.pen
myPen = 34;
shopCart.note = 110;
shopCart.pen = 90;
shopCart['calender'] = 43;
var myMouse = 'book';
shopCart['myMouse'] = 76;
console.log(shopCart);

//solution 2
const person = {
  name: "Hasina",
  age: 73,
  height: 5.5,
  color: 'brown',
  address: {
    present: 'Porto, Portugal',
    permanent: 'Subangonj, Bangladesh'
  }
}
for (const element in person) {
  //console.log('my information about  : ', element);
  //console.log('my response is :', person[element]);
  console.log(element, ': ', person[element]);
}
