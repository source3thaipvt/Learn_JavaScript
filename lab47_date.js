// object Date
// moment.js // npm i moment --save // 
var moment = require('moment')

var today = new Date();
var myBirthDay = new Date(1999, 4,17) // 17-4-1999

// number of milliseconds from 1-1-1970 +7 +9
console.log(today.getTime())
console.log(myBirthDay.getTime())

var now = moment('2022-02-22 07:00')
// 2022-02-08 07:00
console.log(now.fromNow()) //now so sanh voi ngay gio hien tai
// 2 days ago // 2day truoc
console.log( now.format('DD/MM/YYYY'))
// 08/02/2022
console.log( now.calendar())
// Tue Feb 08 2022 07:00:00 GMT+0700
//keyword: fromNow < lay ngay gio hien tai >
//         format < dinh dang theo y minh >
/**        toString <tra ve 1 chuoi string day du thu thang ngay nam >
 *         toJSON
 *         calendar <Lich task du kien >
 *         tham khao them
 *         https://momentjs.com/
 *         https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/UTC
 */