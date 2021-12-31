// array.map : Dịch là ánh xạ
// map dùng để biến đổi các phần tử trong array cũ thành 1 array 2 mới;
/** syntax
Arrow function
map((element) => {  tranform  })
map((element, index) => {  ...  })
map((element, index, array) => {  ...  })

// Callback function
map(callbackFn)
map(callbackFn, thisArg)

// Inline callback function
map(function(element) {  ...  })
map(function(element, index) {  ...  })
map(function(element, index, array){  ...  })
map(function(element, index, array) {  ...  }, thisArg)
*/
var numbers = [1,2,3,4];
var squaredNumbers = numbers.map(function(x){ // x dai dien cho tung phan tu trong array
    return x*x;
})
console.log(squaredNumbers);

var rectangles = [
    { weight:20, height:5},
    { weight:30, height:15},
    { weight:50, height:30},
];
var changedRectangles = rectangles.map(function(object){
    var rObj ={};
    rObj[object.weight * 2]  = object.height *1.5
    // return rObj;
    // [ { '40': 7.5 }, { '60': 22.5 }, { '100': 45 } ]
    return (object.weight*object.height);
    // [ 100, 450, 1500 ]
})

var s = rectangles.map(x=>x.weight*x.height)

console.log(rectangles);
console.log(changedRectangles);
console.log(s);
// [ 100, 450, 1500 ]