// array reduce part 2
var number = [1, 2, 3, 4];
var sum = number.reduce(function (a, b, index,arr) {
    const returns = a + b;
    console.log(a, b, index, returns);
  /**
   * 5 1
   * 6 2
   * 8 3
   * 11 4
   */
  return returns;
}, 5);
console.log(sum);
// syntax reduce
/**
 * arr.reduce(func(item1,item2){
 * //calculation
 * return x;
 * },init);
 *
 * init: la tham so dau tien ở vòng lặp đầu(item1)
 */

var products = [
    {name: 'a', quality: 4, unitPrice: 10},
    {name: 'b', quality: 9, unitPrice: 20},
    {name: 'c', quality: 2, unitPrice: 10}
];
// total = ? 150 (Number)
var total = products.reduce(function(currentTotal, product,index){
    
    const returns = currentTotal + product.quality * product.unitPrice;
    console.log(currentTotal,returns, index);
    return returns;
},0)

//
var items = ['Tam', 'Bill', 'Kim'];
//1. use recude to make result;
// '<Tam><Bill><Kim>'
// dung string noi chuoi
console.log('<'+'Bill'+'>')
items.reduce(function(a,b){
    const returns = a+'<'+b+'>'
    const test = a +  '<'.concat(b).concat('>')
    console.log(test,'use reduce test')
    console.log(test,'use reduce')
    return returns;
},"")
//2. use map va join
//  use join: tạo và trả về 1 chuỗi được ngăn cách bởi dấu phẩy
const map = items.map(function(x, index){
    const returns = '<'+x+'>'
    console.log(returns, index)
    return returns;
})
console.log(map,'map')
//<Tam> 0
//<Bill> 1
//<Kim> 2
let joinMap = map.join('')
console.log(joinMap,'join map')

//  use join: tạo và trả về 1 chuỗi được ngăn cách bởi dấu phẩy
console.log(items.join())
//Tam,Bill,Kim
console.log(items.join('<'+''+'>'))
//Tam<>Bill<>Kim
console.log(items.join(''))
//TamBillKim
console.log(items.join('>'))

//bai tap them
const array = [15, 16, 17, 18, 19];

function reducer(previous, current, index, array) {
  const returns = previous + current;
  console.log(
    `previous: ${previous}, current: ${current}, index: ${index}, returns: ${returns}`
  );
  return returns;
}

array.reduce(reducer);

/**
 * > "previous: 15, current: 16, index: 1, returns: 31"
 * > "previous: 31, current: 17, index: 2, returns: 48"
 * > "previous: 48, current: 18, index: 3, returns: 66"
 * > "previous: 66, current: 19, index: 4, returns: 85"
 */
