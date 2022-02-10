// setTimeout vs clearTimeout
/** Syntax
 * setTimeout(func, minute) //milliseconds
 * //timer // khi timer về 0 => bắt đầu chạy
 *
 *  clearTimeout(nameSetTimeout) // xoa timer di
 */
setTimeout(function () {
  console.log("Start Timer out");
}, 1000);
console.log("Done");

var done = function() {
  console.log("Start Timer our !!!");
}
var timeID = setTimeout(done, 2000);
clearTimeout(timeID)
