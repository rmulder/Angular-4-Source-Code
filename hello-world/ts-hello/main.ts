/* let a;
a = 4;
a = 'saravaba';
a = true;

let b : number;
let c : string;
let d : boolean;
let e : number[] = [1,2,3];


enum color {'blue','green','purple'};
let final = 10;
let enumCheck = color.blue;

console.log(enumCheck);
console.log(a); */

// interface String {
//     endsWith(searchString: string, endPosition?: number): boolean;
// };

/* Assertions */

// let message;
// message = 'Saravana-03'; 
// let compareWith = (message as string).endsWith('S');
// console.log(compareWith);

/* Arrows Function*/

// let log = function(content) {
//     console.log(content);
// }

// let message = 'Saravana';
// let arrowFunction = (message) => {
//     console.log(message);
// }
// console.log(message);


/* Interface */

// interface Point {
//     x : number,
//     y : number
// }

// let drawPoint = (point: Point) => {
    // console.log(point.x + point.y);
// }

// drawPoint({
//     x:12,
//     y:13
// })

/* Class */

// class Point {
//     x : number;
//     y : number;

//     constructor(x ? : number, y ? : number){
//         this.x = x;
//         this.y = y;
//     }

//     draw() {
//         console.log('X : ' + this.x + ', Y : ' + this.y);
        
//     }
//     getDistance(anotherPoint : Point) {

//     }
// }
 
// let point = new Point(8); // If will show error because we have 2 arguments in constructor.
//If you specify ? Mark in constructor it will treat as optional.
// point.draw(); // if you run you will get X and Y as Undefined,coz x and y has no value;
// point.x  = 10;
// point.y = 20;
// point.draw();

//Typescript can remove redundant code.Instead of initializing x and y as private,that can do it in
// constructor itself by specifying access modifiers.

import {Point, nameConstant} from './point'; //.point represents file location to import.

//so u can export a class file separately and can use by adding import @ top of the line.
//This is called as modules.

let point = new Point();
point.x = 0;
let value = point.getXvalue();
point.setXvalue(90);
console.log(point.getXvalue());
console.log(nameConstant);
// point.draw();


