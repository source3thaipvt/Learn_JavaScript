// array.find; Tim kiem va tra ve gia tri thoa man 
// khi thoa man dieu kien roi thi ko tim kiem nua

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.find(word => word.length > 8);

console.log(result);
// expected output: exuberant

var number = [1, 2, 3, 4, 5, 6];
var evenNumbers = number.find(function (x) {
    return x % 2 === 0 ;
});
number.find(x => x % 2 !==0);
//  1
console.log(evenNumbers);
//  2