// function as a parameter (callback)
// dung function nhu 1 tham so
function sum(a, b) {
    return a + b;
}
var sum = sum(2, 5); // number, string, object, true, array
console.log(sum);

var coffeMachine ={
    makeCoffee: function(onFinsh){ //ham onfinsh
        console.log("makeKing coffee....");
        onFinsh();
    },
};
var beep = function(){
    console.log("Tit tist.");
};// beep la 1 ham`
coffeMachine.makeCoffee(beep);//name convention

/**
 * 1. Khai bao 1 ham trc beep
 * 2. truyen ham vao coffeMachine.makeCoffee(beep);
 * 3. Goi ham callBack
 */

 coffeMachine.makeCoffee(function(){
    console.log("Pe'p Pep");
 });