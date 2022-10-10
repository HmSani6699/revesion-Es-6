//01
const friends = 'abdullah';
// friends = 'jakariya'
// console.log(friends);

var name = 'Khalek';
name = 'Raju'
// console.log(name);

//02
const madrasa = { name: 'pakunda', address: 'pakunda', staf: 16, student: 250 }
const tempoletStsing =
    `My Name is Md: ${name} 
My Friend name is ${friends}
he is ${20} yers old 
My Madrasa name: ${madrasa.name}
My Madrasa location in ${madrasa.address}
My Madrasa student in ${madrasa.student}
My Madrasa staf in ${madrasa.staf}`;
// console.log(tempoletStsing);

//03

// const getInput = document.getElementById('getInput')
// console.log(getInput);
// const arrow = () =>

//10
const number = (num1, num2, num3 = 7) => num1 + num2 + num3;
// console.log(number(2, 2));

//11

const schole = {
    name: 'babur schole',
    location: {
        address: 'nowadda',
        tital: 'sorkari',
        cla: {
            cName1: ['one', 'two', 'three', 'four'],
            cName2: 'two'
        }
    }
}
// console.log(schole.location.cla.cName1);
console.log(schole.location.bl?.cName1);
