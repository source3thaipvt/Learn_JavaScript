// Promise.all de thu gon lai code
var fss = require("fs");
function readFilePromise(path) {
  return new Promise(function (resolve, reject) {
    fss.readFile(path, { encoding: "utf8" }, function (err, data) {
      // Phai tra ve Promise mới gọi được hàm .then()
      // resolve: được gọi khi hàm function thực hiện xong(khi đọc file xong rồi)|| những gì resolve sẽ truyền vào .then()
      // reject: là hàm báo lỗi                                                  || những gì reject sẽ truyền vào .catch()
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

readFilePromise('./storage/song.txt')
 .then(function(song1){
     console.log(song1)
     return readFilePromise('./storage/song2.txt')
 })
 .then(function(song2){
    console.log(song2)
    return readFilePromise('./storage/song.txt')
})
.then(function(song3){  
    console.log(song3)
})

Promise.all([
    readFilePromise('./storage/song.txt'),
    readFilePromise('./storage/song2.txt'),
    readFilePromise('./storage/song.txt') // resolve
]).then(function(values){
    console.log(values)
}).catch(function(err){
    console.log(err)
})