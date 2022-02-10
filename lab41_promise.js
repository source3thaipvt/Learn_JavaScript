// promise: lời hứa < lập trình bất đồng bộ, khắc phục callback readFile >
// setup npm i promise-fs
/**
 * syntax:
 *  fs.readFile("path/to/file")
    .then(content => console.log(String(content))) // Do something with the content
    .catch(err => console.log(err)) // Handle error
 */
var fs = require("promise-fs");

function onDone(song) {
  console.log(song);
}
function onError(err) {
  console.log(err);
}
function readFile(path) {
  return fs.readFile(path, { encoding: "utf8" });
}
readFile("./storage/song.txt")
  .then(onDone)
  // content song 1
  .then(function () {
    return readFile("./storage/song2.txt");
  })
  .then(onDone)
  // content song 2
  .then(function () {
    readFile("./storage/song2.txt");
  })
  .then(onDone)
  //underfile
  .then(function () {
    return readFile("./storage/song.txt");
  })
  .then(onDone)
  // content song 3

  .catch(onError);

var fss = require("fs");
function readFilePromise(path) {
  return new Promise(function (resolve, reject) {
    fss.readFile(path, { encoding: "utf8" }, function (err, data) {
        // Phai tra ve Promise mới gọi được hàm .then()
        // resolve: được gọi khi hàm function thực hiện xong(khi đọc file xong rồi)|| những gì resolve sẽ truyền vào .then()
        // reject: là hàm báo lỗi                                                  || những gì reject sẽ truyền vào .catch() 
        if(err){
            reject(err)
        }else{
            resolve(data)
        }
    });
  });     
}
readFilePromise("./storage/song.txt")
    
    .then(function (song1) {
        console.log('ReadFilePromise *',song1);
        // content song 1
    })
    .then(function () {
        return readFilePromise('./storage/song2.txt')
        
    })
    .then(function(song2){
        console.log('ReadFileSong 2 ', song2)
        // content song 2
    })
    .then(function () {
        readFilePromise('./storage/song.txt')
        
    })
    .then(function(song3){
        console.log('ReadFileSong 3 ', song3)
        // underfile
    })
    .catch(function(err){
        console.log(err)
    });
