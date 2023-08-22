console.log(Math.floor(10.24));

let nameT:string ="Ammar";
let age:Number= 25;
let ginder:boolean=true;

let allDataType:any=12;

nameT="obada";
allDataType="test";

function add(n1:number,n2:number) {
    return n1+n2;
}
console.log(add(50,10));

/*
    type annotations with arrays
*/

let sDataType: string|number|boolean;
sDataType=45;
sDataType="test";
sDataType=true;

let array:string[]= ['ammar','obada'];

for( let i=0; i<array.length;i++){
    console.log(array[i].repeat(3))
}

let arrayOne:number[]=[1,3,6,4];
let arrayTwo:string[]=['a','b','c'];
let arrayThree:(string|number)[]=[1,2,3,"ammar"];
let arrayFour:(string|number|string[])[]=[1,2,"tset",["a","b"]];

let showMsg= true;

function show(name: string,age: number,salary: number):string {
    // let t= 10;
    if(showMsg)
    {
        return `hellow ${name} age is ${age}, salary is`;
    }
    return "no data";
}


console.log(show("ammar",25,3000));