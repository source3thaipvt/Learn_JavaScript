function Class(){
    this.listStudent = [];
}
Class.prototype.add = function(name){
    this.listStudent.push(name);
    return this;
}
module.exports = Class;