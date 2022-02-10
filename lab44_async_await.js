// async await (node >=7.6)
/**
 * Nếu bạn chỉ viết nó ra để và cho nó chạy bất đồng bộ sẽ không kiểm soát đc kết quả cái nào xog trc, cái nào sau.
 *  Nếu bạn có 1 function dùng kết quả của 1 tác vụ bất đồng bộ sẽ có thể dẫn tới undefined , 
 * do tác vụ đó chưa xog mà function đã chạy. Asyn await bắt các await phải chờ nhau để thực hiện. 
 *  Do đó kiểm soát được kết quả
 * Bất đồng bộ khiến các promise trở nên đồng bộ hơn bởi trả về cùng 1 kết quả khi các promise chờ nhau thực hiện xong
 */
var fs = require("fs");
var co = require("co");

function readFilePromise(path) {
  return new Promise(function (resolve, reject) {
    fs.readFile(path, { encoding: "utf8" }, function (err, data) {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

async function run(){
    var song1 = await readFilePromise('./storage/song.txt');
    var song2 = await readFilePromise('./storage/song2.txt');
    console.log(song1,song2)
    return [song1,song2]
}
run().then(function(values){
    console.log(values)
})

co(function* () {
    //   generator function
      var song1 = yield readFilePromise("./storage/song.txt");
      var song2 = yield readFilePromise("./storage/song2.txt");
      var song3 = yield readFilePromise("./storage/song3.txt");
      return [song1, song2, song3];
    }).then(function (values) {
        console.log(values);
      })