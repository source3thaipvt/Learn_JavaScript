// array.reduce: dich là giảm cấp
// reduce giống 1 vòng lặp
// vd var a [ x1, x2, x3, x4]
// reduce func: x1, x2 => y1
// reduce func: x3, y1 => y2
// reduce func: x4, y2 => result

// tinh tong 4 so hang trong array
var array1 = [1, 2, 3, 4];
var reducer = (previousValue, currentValue) => previousValue + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
// expected output: 15

var numbers = [1, 2, 3, 4];
var reduceNumber = numbers.reduce(function (a, b) {
    console.log(a, b);
    return a + b;
    // 1 2
    // 3 3
    // 6 4
});
console.log(reduceNumber);
// 10

var orders = [
    { name: 'a', quantity: 2, price: 50 },
    { name: 'b', quantity: 4, price: 100 },
    { name: 'c', quantity: 5, price: 15 },
];
// dung reducer de tinh tong gio hang
var mapOrder = orders.map(function (x) {
    // var rObj = {};
    // rObj[object.weight * 2] = object.height * 1.5
    // // return rObj;
    console.log(x.name,x.quantity * x.price);
    return x.quantity * x.price;
})

var reduceSumOrder = mapOrder.reduce(function (x, y) {
    return x + y;
})
console.log(reduceSumOrder);

