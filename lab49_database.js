// database design
const { table } = require('table');
var classes = [
  {
    id: 0,
    name: "1A",
    teacher: 0,
    student: [13, 15],
  },
  {
    id: 1,
    name: "2A",
    teacher: 1,
    student: [4, 11, 12],
  },
  {
    id: 2,
    name: "3A",
    teacher: 2,
    student: [5, 2, 8, 10],
  },
  {
    id: 3,
    name: "4A",
    teacher: 3,
    student: [1, 3, 6, 9, 0],
  },
  {
    id: 4,
    name: "5A",
    teacher: 4,
    student: [14, 7],
  },
];
var studens = [
  { id: 0, name: "Minh", height: 170, class: 3 },
  { id: 1, name: "Tuan", height: 170, class: 3 },
  { id: 2, name: "Thinh", height: 170, class: 2 },
  { id: 3, name: "Bao", height: 170, class: 3 },
  { id: 4, name: "Mai", height: 170, class: 1 },
  { id: 5, name: "Ong", height: 170, class: 2 },
  { id: 6, name: "Nam", height: 170, class: 6 },
  { id: 7, name: "Mai", height: 170, class: 4 },
  { id: 8, name: "Thao", height: 170, class: 2 },
  { id: 9, name: "Thuy", height: 170, class: 9 },
  { id: 10, name: "Thinh", height: 170, class: 2 },
  { id: 11, name: "Tran", height: 170, class: 1 },
  { id: 12, name: "Mai", height: 170, class: 1 },
  { id: 13, name: "Phong", height: 170, class: 0 },
  { id: 14, name: "Hanh", height: 170, class: 4 },
  { id: 15, name: "Anh", height: 170, class: 0 },
];
var teachers = [
  {
    id: 2,
    name: "Huyen",
    age: 19,
  },
  {
    id: 0,
    name: "Quynh",
    age: 18,
  },
  {
    id: 1,
    name: "Linh",
    age: 20,
  },
  {
    id: 3,
    name: "Lam",
    age: 21,
  },
  {
    id: 4,
    name: "Mai",
    age: 22,
  },
];

function getStudentInClass(className) {
  var classObject = classes.find(function (x) {
    return x.name === className;
  });
  var studentInClass = studens.filter(function (x) {
    return x.class === classObject.id;
  });
  return studentInClass;
}
var studentInClass = getStudentInClass("4A");

console.log(studentInClass)
// console.log(table(studentInClass));
// Tao 1 database trang bao dien tu
// Design databse ban hang



