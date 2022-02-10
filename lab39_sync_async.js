// Sync and Async:(Synchoronous and Asynchoronuos ) Đồng bộ và không đồng bộ trong js
// Sync: 

var fs = require('fs')

// console.log('Start')
// // ReadfileSync: doc file dong bo
// var song1 = fs.readFileSync('./storage/song.txt',{encoding: 'utf8'})
// console.log(song1)
// var song2 = fs.readFileSync('./storage/song2.txt',{encoding: 'utf8'})
// console.log(song2)
// console.log('End')

// Start
// Hello Word
// Im is soucre3thaipvt
// End

//Make coffee => 5 minutes
// Wear clothes
// Making bed
//
// Sync
// |=============|====================|==============|==========>
// Make coffee     Wear clothes       Wear done       Done
//                 Coffee done        Make bed
//
// Async
// |===============|============|==========|====================>
// Make coffee    Wear clothes  Make bed   Done



console.log('Start')
// Readfile: doc file khong dong bo
var song1 = fs.readFile('./storage/song.txt',{encoding: 'utf8'}, function(err, data){
    console.log(data);
})

var song2 = fs.readFile('./storage/song2.txt',{encoding: 'utf8'},function(err,data){
    console.log(data);
})
console.log('End')

// Start
// End
// Hello Word
// Im is soucre3thaipvt

// Read/Write file
// Network mất time load data nên sẽ dùng Async rất nhiều
