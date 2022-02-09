// npm - node package manager
// developer thi mk se dung lai
// 1 node co sẵn
// 2 npmjs.com do cac cộng đồng dev phát triển
// node chưa có sẵn thì phải lên npmjs tìm cách cài đặt vào project(npm install package <--save>)
                                        // --save sẽ lưu lại version đó trong file package,

var readlineSync = require('readline-sync');
var obj = {}
var userName = readlineSync.question('May I have your name? ');
console.log('Hi ' + userName + '!');
var userage = readlineSync.question('How are u old? ');
console.log('Hi ' + userage + '!');

obj.name = userName;
obj.age = parseInt(userage)
console.log(obj)

var languages = [];
var language = readlineSync.question('What is u mother languager? ')
languages.push(language);
console.log(languages)
