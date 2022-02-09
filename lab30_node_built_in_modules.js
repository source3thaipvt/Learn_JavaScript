// node built - in modules
// huong dan cach su dung moudule ma node co san
// Hnay hoc File system Moudule : Đọc và ghi file trong may

var fs = require('fs');
// doc file
var text = fs.readFileSync('./storage/song.txt', {encoding: 'utf8'});
console.log(text)

//ghi file

fs.writeFileSync('./storage/song2.txt','Im is soucre3thaipvt');
var text2 = fs.readFileSync('./storage/song2.txt', {encoding: 'utf8'});
console.log(text2)
