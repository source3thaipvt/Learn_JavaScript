// Object Methods : mô tả vật thể bằng các thuộc tính của nó
// Các phương thức của object

var myDog = {
    weight: 45,
    name: 'Dan',
    //name1 : 'Dan',
    age: 1,
    // brak : tieng sua?
    brak: function () { // anonymous function <ko co ten>
        console.log('meo meo, my name is ' + this.name);
        console.log('meo meo, my name is ' + this.name1);
        // this.name chi dung trong ngu canh Object
        // truong hop name1 ko xach dinh se la undefined
    },
    eat: function (bone){
        this.weight += bone.weight;
        return this;
    }
};
// khai bao object Xuong(bone)
var bone ={
    weight: 2,
}
//Weight truoc khi an cua Dog
console.log('Befone eating', myDog.weight);
//weight sau khi an cua Dog
myDog.eat(bone);
console.log('After eating', myDog.weight);

myDog.brak();
function bark() {
    console.log('ut it, my name is ' , this.name);
    // khong goi duoc thuoc tinh ở trên this.name 
    // tra ve underfined
}
bark();

//vd:
var profile = {
    fistName : 'Phan',
    lastName : 'Thai',
    weight : 49,
    fullName : function(){
        console.log( this.fistName + ' ' + this.lastName);
        return this;
    },
    eat: function(eating){
        this.weight += eating.weight;
        return this;
    }
}
var eating = {
    weight: 1.5,
}
profile.fullName();
console.log('Befone eating', profile.weight);
profile.eat(eating);
console.log('After eating', profile.weight);