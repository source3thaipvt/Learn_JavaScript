// setInterval vs clearInterval
/** Syntax
 *  setInterval(func, timer)
 *  sau mỗi timer thì chạy lại hàm func, chạy vô hạn
 */
var i = 0
// var intervalID = setInterval(function(){
//     i++;
//     console.log(i)
//     if(i===10){
//         clearInterval(intervalID)
//     }
// },1000)

//bai tap dem tu 1-10 return promise
function countFrom(a, b){
    return new Promise(function(resolve, reject){
        var intervalID = setInterval(function(){
            a++;
            console.log(a)
            if(a===b){
                resolve()
                clearInterval(intervalID)
            }else{
                
            }
        },100)
        
    })
}
countFrom(1, 5).then(function(){
    console.log('Done')
})
