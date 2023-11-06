//#Question 1

import { type } from "mocha/lib/utils";

//Write a function, double, that takes a number and returns 2 times the number.
function double(num:number):number{
    return 2 * num;
}

//#Question 2
//Write a function times100 that takes a number and returns 100 times the number
function times100(num:number):number{
    return 100 * num;
}

//#Question 3
//Write a function, myMap, that takes an array and a function and returns a new array that has
// the function applied to each element of the input array. Use your myMap function with your
// double and times100 functions.

function myMap(arr:number[],callBack:(num:number)=>number):number[]{
    let newArray:number[] = [];
    for(let ele of arr){
        let times:number = callBack(ele);
        newArray.push(times)
    }
    return newArray;
}
const numbers: number[] = [1, 2, 3, 4, 5];
const multipliedBy100: number[] = myMap(numbers, times100);
const doubledNumbers: number[] = myMap(numbers, double);

console.log("Original Array:", numbers);
console.log("Array after multiplying each element by 100:", multipliedBy100);
console.log("Array after doubling each element:", doubledNumbers);

//#Question 4
//(Not covered on exam 1) Demonstrate your myMap function with an anonymous function that
//triples the input value. Write this as an anonymous function expression. Then write it using an
//arrow expression. Write these functions in the mocha tests where it says 


//using the anonymous function
const tripledNumbersAnonymous: number[] = myMap(numbers, function(num: number): number {
    return 3 * num;
});

console.log("Array after tripling each element (Anonymous Function):", tripledNumbersAnonymous);

//using the arrow function
const tripledNumbersArrow: number[] = myMap(numbers, (num: number): number => 3 * num);

console.log("Array after tripling each element (Arrow Function):", tripledNumbersArrow);


type Employess = {
    id:number;
    name: string;
}
interface User {
    id:number;
    name:string;
}
let user: User = {
    id:100,
    name:"NATE"
}

type Student = {
    studentId:number;
    quizAnswers:number[];
}

let student1:Student = {
    studentId:101,
    quizAnswers:[1, 1, 2,4],
}
let student2:Student = {
    studentId:102,
    quizAnswers:[2, 1, 2,2]
}
let student3:Student = {
    studentId:103,
    quizAnswers:[3, 1, 3,4]
}
let stuQuizAnswer:number[][] = [];
stuQuizAnswer.push(student1.quizAnswers)
stuQuizAnswer.push(student2.quizAnswers)
stuQuizAnswer.push(student3.quizAnswers)
let answer = [3,1,2,4];
let ans:number[] = [];
for (let i = 0; i < stuQuizAnswer.length; i++) {
    let count = 0;
    for (let j = 0; j < stuQuizAnswer[i].length; j++) {
        if(stuQuizAnswer[i][j] === answer[i]){
            count++;
        }
        ans.push(count);
    }
}
