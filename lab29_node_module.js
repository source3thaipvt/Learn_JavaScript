var Mouse = require('./model/mouse')
var Cat = require('./model/cat')

var jerry = new Mouse('orange', 20);
var mickey = new Mouse('white', 50);

var tom = new Cat();

console.log(tom)

tom.eat(jerry).eat(mickey);
console.log(tom)
