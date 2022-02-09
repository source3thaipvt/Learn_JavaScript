// JSON object
// 1. JSON stringify - chuyển đổi 1 cái obj thành 1 chuỗi JSON string
// 2. parse -  chuyển đổi ngược lại từ JSON string => 1 obj

var myDog = { name: 'Milu', age: 1, dead: false}

var myDogString = JSON.stringify(myDog)

var myCatString = '{"name": "Tom", "age": 2, "dead": true}';
var myCat = JSON.parse(myCatString)

console.log(typeof myDog)
console.log(typeof myDogString)
console.log(typeof myCat)

var fs = require('fs');
var readlineSync = require('readline-sync');

var students = []
var student = {};
var att = true;
while(att) {
    var questions =  'Your question: \n 1. Show all students \n 2. Create a new Student \n 3. Save & exit';
    console.log(questions);
    var answer = parseInt(readlineSync.question('Choose your question: '));
    switch(answer) {
        case 1: 
            var read = fs.readFileSync("data.JSON", "utf8")
            studentObject = JSON.parse(read)
            console.log(studentObject);
            break;
        case 2: 
            var name = readlineSync.question('Your name: ');
            var age = readlineSync.question('Your age: ');
            var yourClass = readlineSync.question('Your class: ');
            student.name = name;
            student.age = parseInt(age);
            student.class = yourClass;
            students.push(student);
            console.log('-----------Add a new student successfull---------');
            break;
        case 3:  
            var studentString = JSON.stringify(students);
            var write = fs.writeFileSync("data.JSON", studentString);
            console.log('Save successfully');
            att = false;
            break;
        default : console.log('Choose 1 or 2 or 3, please.')
    }
}