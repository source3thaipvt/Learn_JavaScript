// Syntax: cú pháp
// for(init; contidion; final-expresion){
//      statements;   
// }exit(if 2 is else)
// Keywords: for
// The loop exits when 2 is false

for (var i = 0; i<10;i++){
    console.log(i)
}
/**
 * 1. i = 0
 * 2. i < 10 -> true
 * 3. display 0
 * 4. i = 1
 * 5. 1 < 10 -> true
 * 6. display 1
 * ...
 * when i = 10 < 10 -> false
 * => exits for loop
*/
var employees = [
    {name: 'Thinh', age: 24},
    {name: 'Tuan', age: 22},
    {name: 'Thanh', age: 14},
];
// Hien thi nhan vien theo line
console.log(employees[1].name);
console.log('============');
for ( var i = 0; i < 3;i++){
    console.log(employees[i].name, employees[i].age);
}