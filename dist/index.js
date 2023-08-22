"use strict";
console.log(Math.floor(10.24));
let nameT = "Ammar";
let age = 25;
let ginder = true;
let allDataType = 12;
nameT = "obada";
allDataType = "test";
function add(n1, n2) {
    return n1 + n2;
}
console.log(add(50, 10));
let sDataType;
sDataType = 45;
sDataType = "test";
sDataType = true;
let array = ['ammar', 'obada'];
for (let i = 0; i < array.length; i++) {
    console.log(array[i].repeat(3));
}
let arrayOne = [1, 3, 6, 4];
let arrayTwo = ['a', 'b', 'c'];
let arrayThree = [1, 2, 3, "ammar"];
let arrayFour = [1, 2, "tset", ["a", "b"]];
let showMsg = true;
function show(name, age, salary) {
    if (showMsg) {
        return `hellow ${name} age is ${age}, salary is`;
    }
    return "no data";
}
console.log(show("ammar", 25, 3000));
//# sourceMappingURL=index.js.map