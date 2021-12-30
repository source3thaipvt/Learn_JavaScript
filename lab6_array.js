// DataType: array la mang trong JS
// Thuat ngu ( terms ) : Array, element, index, lenght < mảng, các phần tử, chỉ số, độ rộng >
// var nameArray = [value,value1,value2];
var numberArray = [3, 4, 2, 9];

var dog1 = {
    type: 'Corgi',
    name: 'Con hau da',
};
var dog2 = {
    type: 'Chihuahua',
    name: 'Nho con',
};
var dog3 = {
    type: 'Husky',
    name: 'husky black',
};
var bunchOfDog = [dog1,dog2,dog3];
//truy xuat 1 phan tu trong mang
console.log(bunchOfDog[1]);
//truy xuat all phan tu trong mang
console.log(bunchOfDog);
//truy xuat 1 thuoc tinh trong 1 phan tu
console.log(bunchOfDog[1].name)
//gán vị trí 0 vào 1 phan tử mới.
var dog4 = {
    type: 'Shiba',
};
bunchOfDog[0] = dog4;
console.log(bunchOfDog);

// Array dùng để lưu các List danh sách các phần tử giống nhau.
// Điện thoại -> Contacts
var contacts = [
    { name : 'Thang', phone: '13223243'},
    { name : 'Ha', phone: '10223243'},
];
console.log(contacts);
console.log(contacts[1].name);

/*
Khai báo một array "listAnimal" chứa các object mô tả danh sách các con vật.
Mỗi con vật có 2 thuộc tính: name và age trong đó name có kiểu string, age có kiểu number.
 * {name}: string;
 * {age}: number;
*/

var listAnimal = [
    {name: 'Wibu', age : 3.5},
    {name: 'Xuka', age : 18.5},
];