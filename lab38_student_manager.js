// Bai tap: tap app quan ly sinh vien
// Hien thi list sinh vien hien tai
// Add them sinh vien
var fs = require('fs')
var readlineSync = require('readline-sync')

function showMenu(){
    console.log("1.Show student ")
    console.log("2.Create a new student ")
    console.log("3.Save and Exit ")
    var key = readlineSync.question('Vui long lua chon chuc nang? ')
    switch(key){
        case '1':
            showStudents();
            showMenu()
            break;
        case '2':
            showCreateStudent();
            console.log(students)
            showMenu()
            break;
        case '3':
            showSaveExit();
            break;
        default:
            console.log('Worong option')
            showMenu()
            break;
    }
}

var students = []
function loadData(){
    var read = fs.readFileSync('./storage/student.json')
    students = JSON.parse(read);
    console.log(students)
}

function showStudents(){
    for( var student of students){
        console.log(student.name, student.age, (!student.gender) ? 'female': 'male')
    }
}
function showCreateStudent(){
    var name = readlineSync.question('Name: ')
    var age = readlineSync.question('Age: ')
    var gender = readlineSync.keyInYN('Neu ban la Nam chon Y or Nu chon N: ')
    console.log(gender)
    var student = {
        name: name,
        age: parseInt(age),
        gender: gender
    }
    students.push(student)
    
    
}
function showSaveExit(){
    var jsonStudent = JSON.stringify(students)
    console.log(jsonStudent)
    fs.writeFileSync('./storage/student.json',jsonStudent,{encoding: 'utf8'})
}
function main(){
    loadData()
    showMenu();
    
}
main();