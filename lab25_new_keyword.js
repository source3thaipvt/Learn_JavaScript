//'new' keyword: all cac function deu co the goi new duoc
var today = new Date();
console.log(today);

// create a new object, obj literal(doi tuong theo nghia den)
var mouse = {
    weight: 52,
    getWeight: function(){
        return this.weight;
    }
}
console.log(mouse.getWeight())
//constructor function
function Mouse(color,weight) {
    this.type = 'mouse';
    this.color = color;
    this.weight = weight

}
var mouse1 = new Mouse('White',0.5);
var mouse2 = {type: 'mouse'};
var mouse3 = new Mouse('Black',0.2);
console.log(mouse1) // Mouse { type: 'mouse' } //Khai bao co new: Ra Kieu cua Object
console.log(mouse2) // { type: 'mouse' }       //Khai bao ko co new: Ra 1 cai Object
console.log(mouse3)

var tom = {
    name : 'tom',
    stomach: [],
    eat: function(mouse){
        this.stomach.push(mouse)
        return this;
    }
}
var m1 = {name: 'm1'}
var m2 = {name: 'm2'}
var m3 = {name: 'm3'}

tom.eat(mouse1.color).eat(mouse2).eat(mouse3.color); //method chainning, goi duoc nhieu lan < vi co "return this">
console.log(tom)
