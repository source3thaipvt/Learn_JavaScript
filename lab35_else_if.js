//if ... else if ... else
/**
 * syntax: if(condition1){
 *      //coding todo if condition1 true
 * }else if(condition2){
 *      // coding todo if condition2 true}
 * }else{
 *      // coding todo if condition2 false}
 * }
 */

function getTicker(person){
    let bestPrice = 10000
    let result;
    if(person.age<15){
        result = 'Discount 20%'
        return bestPrice *0.8
    }else if(person.age>60){
        result = 'Discount 50%'
        return bestPrice * 0.5
    }else{ 
        result = "10000/ticker"
        return bestPrice;
    }
}
var person = {
    age: 14
}
var fee = getTicker(person);
console.log(fee)