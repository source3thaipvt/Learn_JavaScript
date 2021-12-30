// DataType: undefined : la chua gan gia tri cho no
var a;
console.log(a);
// se chay ra undefined

// DataType: null : la chua gan gia tri rong
var b = null;
console.log(b);
// se chay ra null

//DataType: object dùng để mô tả 1 đối tượng
// var object = {
//     key: value,
//     key1: value
// };

var myDog = {
    name: 'Lợn',
    weight: 45,
    isAlive: false,
};
//thay doi thuoc tinh trong doi tuong.
myDog['isAlive'] = true;

console.log(myDog.name);
console.log(myDog);
console.log(myDog['name']);
// tuong tu myDog.name

/**
 * Sử dụng kiến thức đã học khai báo object person gồm các property name, age, gender. 
 * Ví dụ:
 *  var person = {
 *    name: 'Pham Thinh',
 *    age: 25,
 *    gender: 'male'
 *  };
 */
 var person = {
    name : 'soucre3thai',
    age : 25,
    gender: 'nam',
}