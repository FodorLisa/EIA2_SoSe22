namespace L01Variablen {

let v : number = 1;
v = v + "1";
console.log(v);

interface Student {
    name: string;
    matrikel: number;
    grades: [module: string]: number;
}
let students: Student[] = [];

students.push({name: "Big Brain", matrikel: 123456, grades: {"EIA1": 1.3, "EIA2": 1.0}};
console.log();

function isDivisible(_dividend: number, _divisor: number): boolean {
    let result: boolean = (_dividend % _divisor == 0);
    return result;
  }
console.log(isDivisible(3, 3));

let v1: number = 6;
let v2: number = 4;
console.log (v2 = v1);

let v3: number [] = [1, 3, 4, 8];
let v4: number = 1; 
console.log (v4 = v3);
}