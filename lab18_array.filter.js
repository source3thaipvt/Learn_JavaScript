// array.filter: loc ra cac phan tu dat dieu kien => tao thanh 1 array moi'
// syntax
// // Arrow function
// filter((element) => { /* ... */ } )
// filter((element, index) => { /* ... */ } )
// filter((element, index, array) => { /* ... */ } )

// // Callback function
// filter(callbackFn)
// filter(callbackFn, thisArg)

// // Inline callback function
// filter(function(element) { /* ... */ })
// filter(function(element, index) { /* ... */ })
// filter(function(element, index, array){ /* ... */ })
// filter(function(element, index, array) { /* ... */ }, thisArg)

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]

var number = [1, 2, 3, 4, 5, 6];
var evenNumbers = number.filter(function (x) {
    return x % 2 === 0;
});
number.filter(x => x % 2 !==0);
// [ 1, 3, 5 ]
console.log(evenNumbers);
// [ 2, 4, 6 ]
