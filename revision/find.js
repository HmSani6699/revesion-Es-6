const phoneList = [
    { name: 'realmi', price: 10000, rem: '3gb', rom: '32gb', version: '1.2.0' },
    { name: 'oppo', price: 2000, rem: '3gb', rom: '32gb', version: '1.2.0' },
    { name: 'mi', price: 6000, rem: '3gb', rom: '32gb', version: '1.2.0' },
    { name: 'nokea', price: 1000, rem: '3gb', rom: '32gb', version: '1.2.0' },
    { name: 'iphone', price: 10000, rem: '3gb', rom: '32gb', version: '1.2.0' }
];

const output = phoneList.find(item => item.price == 1000);
console.log(output);