// 01
const name = 'Md Sani Sorkar';
// name = 'apu'
// console.log(name)

var name1 = 'pappo';
name1 = 'rogbaj';
name1 = 'noman';
// console.log(name1)

let name3 = 'madrasa';
name3 = 'school';
// console.log(name3)


//02

const tempolet =
    `My Name is Md: ${name}
My friends Name ${name1}
`

const student = { name: 'Abol Basar', age: 28, address: 'sirabo', class: 'therr' };
const tem = `
My Student Name ${student.name}
he is ${student.age} yers old
his loketion ${student.address}
he rid in class ${student.class}
`
// console.log(tem)


//03
//3.1
const number = (num) => num / 5;
// console.log(number(10))

//3.2
const add = (num1, num2) => ((num1 + 2) * (num2 + 2));
// console.log(add(2, 2));

//3.3
const multiplay = (num1, num2, num3) => num1 * num2 * num3;
// console.log(multiplay(3, 3, 3));

//3.4
const total = (num1, num2) => {
    const frist = num1 + 2;
    const second = num2 + 2;
    const multipletion = frist * second;
    return multipletion;
}

// console.log(total(2, 2))

//05
const numbers = [2, 4, 6, 8, 10];
const stor = [];
const result = numbers.map(n => n * 5);
stor.push(result)
// console.log(stor)

//06
const numbers1 = [11, 22, 33, 44, 55, 66, 77, 88, 99, 100];
const negetive = numbers1.filter(n => n % 2 == 1);
// console.log(negetive);

//07
const ListItems = [
    { name: 'phone', price: 20000, id: 12345, verstion: 'new' },
    { name: 'glas', price: 100, id: 12345, verstion: 'new' },
    { name: 'book', price: 3000, id: 12345, verstion: 'new' },
    { name: 'mouse', price: 250, id: 12345, verstion: 'new' },
    { name: 'pen', price: 10, id: 12345, verstion: 'new' }
];

const oldPrice = ListItems.find(n => n.price == 3000);
// console.log(oldPrice)

//10
class Student {
    name;
    address = 'pakunda'
    constructor(n) {
        this.name = n;
        this.verstion = "1.2.0";
    }
}

const out = new Student('mobil');
// console.log(out)


class list {
    constructor(n, a, k) {
        this.name = n;
        this.address = a;
        this.kaj = k
    }
}
class Midia extends list {

}

class Sir extends list {
    constructor(n, a, k, s) {
        super(n, a, k)
        this.selaray = s;
    }
} 

const out2 = new Midia('sani', 'pakunda', 'techer');
const out3 = new Sir('sani', 'pakunda', 'techer', 5000);
console.log(out2)
console.log(out3)