// for ... of // truy xuat tat ca trong mang
// for ... in // truy xuat all trong 1 object

var employees = [
    { name: 'Thinh', age: 24 },
    { name: 'Tuan', age: 22 },
    { name: 'Thanh', age: 14 },
];
// for ... of
// vong lap kieu toi uu: viet de hon, 
// dung de lap qua all cac phan tu trong mang
for (var employee of employees) {
    console.log(employee.name, employee.age)
}
// vong lap kieu truyen thong: biet duoc lap den i = ? nao.
console.log('============');
for (var i = 0; i < 3; i++) {
    console.log(employees[i].name, employees[i].age);
}

// for ... in
var myDog = {
    name: 'Dan',
    weight: 45,
    age: 1,
}
myDog.name; // myDog['name']
//cach truy xuat 1 cai key trong 1 object
for (var key in myDog) {
    console.log('truy xuat 1 key', key, myDog[key]);
    // truy xuat 1 key + key + value;
    //                   name  Dan  
}

// app vao html
/**

<ul id='contact-list'>
    <li></li>
</ul>
var content = '';
for ( var employee of employees){
    content += '<li>' + employee.name + '</li>';
}
document.getElementById('contact-list').innerHTML = content;
*/

// content =+ '<li>Thinh</li>'
// content =+ '<li>Tuan</li>'
// content =+ '<li>Thanh</li>'
// content =+ '<li>Thinh</li><li>Tuan</li><li>Thanh</li>'