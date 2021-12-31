/**
 * Cac methods trong array
 * a.concat(b)  hợp nhất 2 mảng
 * a.push(b)    thêm 1 or nhiều phần tử vào cuối mảng
 * a.pop()     loại bỏ phần tử cuối cùng của mảng
 * a.shift()    loại bỏ phần tử đầu tiên của mảng
 * a.unshift()  thêm 1 or nhiều phần tử vào đầu mảng
 * Tự đọc tren MDN (Mozilla Developer Network)
 * google keyword: array Methods 
 * a.slice()    trả về 1 phần của mảng xuất phát từ index start -> end
 * a.splice()   insert(chèn) 1 phần tử và xóa 1 phần tử trong mảng 
 *     splice(start,deleteCount,item1,item2,...) deleteCount = 0 tức là ko xóa
 * Bài sau: find, filter, sort, map, reduce, etc.
 */

var a = [1, 3, 2];
var b = [4, 2, 7];
var c = [4.2, 0]

// syntax concat(value0, value1, ... , valueN) hợp nhất 2 or nhiều mảng
var concat = a.concat(c, b);
console.log('Array concat()', concat);
// display Array concat() [ 1, 3, 2, 4.2, 0, 4, 2, 7 ]

// syntax push(element0, element1, /* ... ,*/ elementN)
// thêm 1 or nhiều phần tử vào cuối mảng
var push = a.push(3,4);
console.log('Array savr push()',push) 
// display 5 ( do dai cua moi cua mang) lam thay doi array a
console.log('Array push()',a) 
// display Array push() [ 1, 3, 2, 3, 4 ]

//syntax pop() loại bỏ phần tử cuối cùng của mảng, lam thay doi mang
var pop = a.pop();
console.log('Array save pop()',pop) 
// display 4 ( do dai cua moi cua mang) lam thay doi array a
console.log('Array pop()',a) ;
// display Array pop() [ 1, 3, 2, 3 ]

//syntax shift() loại bỏ phần tử đầu tiên của mảng, lam thay doi mang
var shift = a.shift();
console.log('Array save shift()',shift) 
// display '1' <value phan tu da xoa'> 
console.log('Array shift()',a) ;
// display Array shift() [ 3, 2, 3 ]

// syntax unshift(element0, element1, /* ... ,*/ elementN) 
// thêm 1 or nhiều phần tử vào đầu mảng
var unshift = a.unshift(0, 0, 9);
console.log('Array save unshift()',unshift) 
// display 6 ( do dai cua moi cua mang) lam thay doi array a
console.log('Array unshif()',a) ;
// display Array unshift() [ 0, 0, 9, 3, 2, 3 ]

// syntax slice()
// slice(start)     trả về 1 phần của mảng xuất phát từ index start -> end
// slice(start, end)

console.log('arrry a bofore', a);
// array a after slice() [ 0, 0, 9, 3, 2, 3 ]
console.log('array a after slice()',a.slice());
// array a after slice() [ 0, 0, 9, 3, 2, 3 ]
console.log('array a after slice(3)',a.slice(3));
// array a after slice(3) [ 3, 2, 3 ]
console.log('array a after slice(-2)',a.slice(-2));
// array a after slice(3) [ 2, 3 ]
console.log('array a after slice(2,-1)',a.slice(2,-1));
//array a after slice(2,-1) [ 9, 3, 2 ]

// syntax insert(chèn)/thay thế 1 phần tử từ indexStart, và xóa số phần tử sau nó
// splice(start) 
// splice(start, deleteCount)
// splice(start, deleteCount, item1)
// splice(start, deleteCount, item1, item2, itemN)
console.log('arrry a bofore', a);
// array a after slice() [ 0, 0, 9, 3, 2, 3 ]
console.log('array a delete splice(4)',a.splice(4));
// array a after splice() [ 2, 3 ] <start index:4 xóa các value phần tử sau nó>
console.log(a); // [ 0, 0, 9, 3 ]

console.log('array a delete splice(2,1)',a.splice(2,1));
// array a after splice() [ 9 ] <start index:2 xóa 1 value phần tử>deleteCount=0 là ko xóa value nào
console.log(a); // [ 0, 0, 3 ]

console.log('array a after splice(2,1,9)',a.splice(2,1,7));
// array a after splice() [ 3 ]
console.log(a); // [ 0, 0, 7 ]
console.log('array a after splice(2,1,7,3,4,0)',a.splice(0,2,7,3,4,0));
// array a after splice() [ 0, 0 ]
console.log(a); // [ 7, 3, 4, 0, 7 ]



// a.shift()
var names = ["Andrew", "Edward", "Paul", "Chris" ,"John"];

var myFish = ['angel', 'clown', 'mandarin', 'surgeon'];

console.log('myFish before:', JSON.stringify(myFish));
// myFish before: ['angel', 'clown', 'mandarin', 'surgeon']

var shifted = myFish.shift();

console.log('myFish after:', myFish);
// myFish after: ['clown', 'mandarin', 'surgeon']

console.log('Removed this element:', shifted);
// Removed this element: angel
