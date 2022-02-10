// callback hell: long call back qua nhieu lan, dang kim tu thap
var fs = require('fs')


var song1 = fs.readFileSync('./storage/song.txt',{encoding: 'utf8'})
var song2 = fs.readFileSync('./storage/song2.txt',{encoding: 'utf8'})
console.log(song1, song2)

console.log('|++++++++++++++++++|')
console.log('start')
fs.readFile('./storage/song.txt',{encoding: 'utf8'},function(err,song1){
    console.log(song1)
    fs.readFile('./storage/song2.txt',{encoding: 'utf8'}, function(err,song2){
        console.log(song2)
        fs.readFile('./storage/song.txt',{encoding: 'utf8'}, function(err,song3){
            console.log(song3)
        })
    })
})
console.log('end')
/**
 * cach khac phu callback hell
 * Promise 
 */
