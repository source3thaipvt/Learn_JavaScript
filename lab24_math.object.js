// math object in javascript
/**
 * Math.PI // 3.14
 * Math.ceil(number) // lam tron len
 * Math.floor(number) // lam tron xuong
 * Math.round(number)
 * Math.max(x1,x2,x3,...)
 * Math.min(x1,x2,x3,...)
 * Math.random()
 * documnet gg keyword: Mozilla Math object
 */
function discArea(r) {
  return r * r * Math.PI;
}
var s = discArea(5);
console.log("S hinh tron: ", s);

console.log(Math.ceil(9.2)); // 10
console.log(Math.floor(9.7)); // 9

console.log(Math.max(10,2,4,8,7,22)) // 22
console.log(Math.min(10,2,4,8,7,22)) // 2

console.log('Random : ',Math.random())
function tossCoin(){
    var random = Math.random()
    console.log(random)
    if(random>0.5){
        return 'Mat Sap'
    }
    return 'Mat ngua'
}
console.log(tossCoin())


// bai tap do xuc xac 6 mat
function getRandomInt(max) {
    return Math.ceil(Math.random() * max);
  }
console.log('Do Xuc Xac: ',getRandomInt(6));