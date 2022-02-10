// 1 Glocal scope : pham vi hoat dong cua bien toan cau
// 2 Local scope : pham vi hoat dong cua bien trong dia phuong


// When a function is executed => create a new scope
var a = 6; //bien a la glocal
function random(x){
    var b = Math.random(); 
    console.log(b)  //bien b nam trong function random
    console.log(b * x)  
}

function doSomething(){
    a = 5
}
var y = random(a)
// Han che thay doi var name = value  glocal
// nen tao bien moi de save value