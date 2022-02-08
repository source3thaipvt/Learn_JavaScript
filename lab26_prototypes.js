// prototypes: nguyên mẫu( khuôn mẫu ) là constructor function 
// là tạo ra 1 function có các đối tượng(thuộc tính)
// Prototypes obj được chia sẻ giữa các obj được tạo bởi new Obj

function Mouse(color, weight){
    this.name = 'mouse';
    this.color = color;
    this.weight = weight
}

console.log(Mouse.prototype,'Tro vao prototype')
console.log(Mouse.prototype.constructor === Mouse,'Trong prototype co constructor tro nguoc ve function Mouse')
var mickey = new Mouse('white', 20)
console.log(mickey.color)

// Prototypes obj được chia sẻ giữa các obj được tạo bởi new Obj
Mouse.prototype.sleep = function(){
    console.log(this.color,' Zzzzzz...')
}
var jerry = new Mouse('orange',20)
console.log(jerry)
// sleep la 1 method cua prototype, ma prototype duoc chia se cho all cac object duoc tao boi new, prototypes mouse
// nen jerry co the truy cap vao duoc Prototypes Mouse
jerry.sleep();

mickey.sleep();
console.log(jerry.sleep === mickey.sleep)