// Arithmetic Operators: Toán tử trong js
// 1. ++  --
// 2. *   /   %
// 3. +   -
 
var a = 5;
// ++a tra ve gia tri tang roi
// a++ tra ve gia tri truoc khi tang

var b = a++ - ++a + a-- + --a
//       5  - ++a + a-- + --a // 6
//       5  -  7  + a-- + --a // 7
//       5  -  7  +  7  + --a // 6
//       5  -  7  +  7  +  5  =  10
console.log(b);
