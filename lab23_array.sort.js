// arr.sort: sắp xếp các phần tử trong mảng
/**
 * syntax: arr.sort(function(a,b) { }) => return a sorted array
 *                         sort func
 * if sort function
 *  returns a value < 0
 *      a will come before b
 *  returns a value > 0
 *      a will come after b
 *  returns a value = 0
 *      a and b will stay unchanged(a va b se ko hoan doi vi tri cho nhau)
 */         

var numbers = [ 2 ,4, 6, 3, 1];

const sortNumber = numbers.sort(function(a,b){
    const sortOne = a - b
    // value < 0
    //[ 1, 2, 3, 4, 6]
    const sortTwo = b - a
    // value > 0
    //[ 6, 4, 3, 2, 1]

    return sortTwo;
},0);
console.log(sortNumber);

var employees = [
    { name: 'Edward', age: 21 },
    { name: 'Bharpe', age: 37 },
    { name: 'And', age: 45 },
    { name: 'Che', age: 12 },
    { name: 'Fagnetic', age: 13 },
    { name: 'Deros', age: 37 }
  ];
console.log(employees);

//sort by age
var sortEmployees = employees.sort(function(a,b){
    // a = employees[0] , b = employees[1]
    //expect: a come after b
    return b.age - a.age //  >0
})
console.log(sortEmployees, 'cach 1')


// sort by name: theo bang chu cai
const sortEmployeesName = employees.sort(function(a, b) {
    var nameA = a.name.toUpperCase(); // ignore upper and lowercase
    var nameB = b.name.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
  
    // names must be equal
    return 0;
  });
console.log(sortEmployeesName);
// sort by name: theo bang chu cai cach 2
const sortEmployeesNameShort = employees.sort(function(a, b) {
    return b.name.localeCompare(a.name);
  });
console.log(sortEmployeesNameShort, 'cach 2');