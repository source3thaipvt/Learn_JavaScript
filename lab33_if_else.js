//if ... else
/**
 * syntax: if(condition){
 *      //coding todo if condition true
 * }else{
 *      // coding todo if condition false}
 */

function tossCoin() {
  var value = Math.random();
  if (value < 0.5) {
    console.log("Sap");
  } else {
    console.log("Ngua");
  }
}
tossCoin();

function shouldIDateHer() {
  var value = Math.random();
  if (value < 0.5) {
    console.log("Yes, of course");
  } else {
    console.log("No, she has a boyfriend");
  }
}
shouldIDateHer();
function xucXac() {
  var value = Math.random() * 6;
  console.log("Do Xuc Xac: ", Math.ceil(value));
}
xucXac();

function countBill(bills) {
  let total = 0;
  for (var bill of bills) {
    if (!bill.fake) {
      total += bill.value;
    }else{
        console.log('fake bill', bill)
    }
  }
  return total;
}
var bills = [
  { value: 20000 },
  { value: 10000, fake: true },
  { value: 10000 },
  { value: 5000 },
];
var total = countBill(bills);
console.log(total);
