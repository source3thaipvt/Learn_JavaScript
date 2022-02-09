// while, do... while loops: 2 vòng lặp< để làm đi làm lại công việc.
/**
 * syntax: 
 * while(condition){
 *      // do something
 * }
 */
for ( let i = 1; i<=5; i++){
    console.log(i)
}

let i = 1;
while(i<=5){
    console.log('while',i);
    i++
}
console.log(i)
/** syntax: 
* do{
*      // do something
* }while(consition)
*/
let j = 1;
do{
    console.log('do while',j)
    j++
}while(j<=5)