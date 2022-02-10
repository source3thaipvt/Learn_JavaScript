//node co: đơn giản hóa lập trình bất đồng bộ promise
// setup npm i co
/** Syntax:
 * co(function* () {
    var result = yield Promise.resolve(true);
    return result;
    }).then(function (value) {
    console.log(value);
    }, function (err) {
    console.error(err.stack);
    });
 */
var fss = require("fs");
var co = require("co");

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

co(function* () {
  //generator function
  var song1 = yield readFilePromise("./storage/song.txt");
  var song2 = yield readFilePromise("./storage/song2.txt");
  var song3 = yield readFilePromise("./storage/song3.txt");
  return console.log(song1, song2, song3);
});
//Hello Word Im is soucre3thaipvt song 3
co(function* () {
//   generator function
  var song1 = yield readFilePromise("./storage/song.txt");
  var song2 = yield readFilePromise("./storage/song2.txt");
  var song3 = yield readFilePromise("./storage/song3.txt");
  return [song1, song2, song3];
})
  .then(function (values) {
    console.log(values);
  })
  .catch(function (err) {
    console.log(err);
  });
//[ 'Hello Word', 'Im is soucre3thaipvt', 'song 3' ]

co(function* () {
    //generator function
      var values = yield [
          readFilePromise("./storage/song.txt"),
          readFilePromise("./storage/song2.txt"),
          readFilePromise("./storage/song3.txt"),
      ]
    return values;
  })
    .then(function (values) {
      console.log(values);
    })
    .catch(function (err) {
      console.log(err);
    });
//[ 'Hello Word', 'Im is soucre3thaipvt', 'song 3' ]
    
var readFiles = co.wrap(function*(files){
    // return yield Promise.resolve(files); // khong ap dung duoc 
    // output [ './storage/song.txt', './storage/song2.txt', './storage/song3.txt' ]
    // [String] => [Promise]
    var values = yield files.map(function(file){
        console.log(typeof files.map(files=>files))
        return readFilePromise(file);
    })
    return values
})

readFiles(['./storage/song.txt','./storage/song2.txt','./storage/song3.txt'])
    .then(function(values){
        console.log(values)
    })
    .catch(function(err){
        console.log(err)
    })

    //[ 'Hello Word', 'Im is soucre3thaipvt', 'song 3' ]