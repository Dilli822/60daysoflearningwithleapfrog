var a = "Hello From Typescript";
// red underline shows the error on our code
console.log("typescript is static type checker", a.jump());
console.log("printing the variable ", a);
/*  Day -- 3 #60daysofLearning #LearningWithLeafFrog
// How to declare variables in Ts?
// Variables Declaration in Ts?
// Possible errors that may arise in Variables
/*

 ------ Variables Declaration -----
 Same as Js const, var & let

 const ho = "Hello";

 Hover over code we get to see the type and variable
 actual statement understood by Ts is
 type is hello with variable hi
 const hi: "Hello"

 but if we declare another same variable const name it will be error
 because in Ts const mean real constant once it is declared it will constant forever
 untill it changed
 so below the code we are seeing the error cannot assign const hi

*/
var hi = "Hello";
hi = "another Hello";
/** But we have other variables declaration right
 * so it won't be problematic with let we can declare
 * the changeable variable everytime we with same name
 * as want so for example:
 *
 */
var namaste = "greetings";
namaste = "this is nepali style greetings";
/**
 * This won't araise error this is technically right code
let namaste = "greetings";
namaste = "this is nepali style greetings";

____ But what if we assign other data type ?

let namaste = "greetings";
namaste = "this is nepali style greetings";

This is string data type
But if I assign other data types like number, boolean, float rather then previously
assigned value it will show error
------------------------------
namaste = true;
-------------------------------
error will be Type 'boolean' is not assignable to type 'string'.
*
*/
namaste = true;
/***
 * Typescript allows us to declare variable type like this
 * let myName: string = "Dilli"
 * which means myName is a changeable variables with string data type named Dilli
 * As we have studied previously that Ts only understand the early
 * assigned data type it won't accept or understand after declared data type
 * for example if we type
 * myName = []
 * we want to make myName array right with let but Ts won't allow with stating errors
 * Type 'undefined[]' is not assignable to type 'string'
 * because we have previously declared variable as string not as arrays, boolean or numbers
 */
var myName = "Dilli";
myName = [];
/* # Day -4
--- Functions in Typescript
---
 */
//  How do write Function in Ts?
var firstFunction = function (name, age) {
    return name + " " + age;
};
console.log(firstFunction("dilli", 21));
/** Above function is arrow function which is well written
 * simple and working function right
 * it is working simple function in javascript and typescript too
 * BUT WE ARE NOT WRITING IT IN A BEST AND TYPESCRIPT WAY
 * WE ARE JUST WRITING IT AS WE WRITE IT IN JAVASCRIPT
 *
 * SO What is the right way to write it in Ts way?
 *
 * If we hover our mouse over the function firstFunction parameters
 * name and age we get message as
 * Parameter 'name' implicitly has any type, but a better type may be inferred from usage
 * --- this means it is better and safe to declare our parameters type in order to
 * maintain our function as unbreakable and more secure
 *
 *
 * ***********************************************************
 * --- But wait what is parameter ?
 * --- Parameters are local variables established in the function declarations which are the
 * storage places for the values of the arguments that are passed when the function calls
 *
 * Let's look with example
 *                name and age are parameters of function firstFunction and brackets() is called parentheses
 *                      |     |
const firstFunction = (name, age) => {
    return name + " " +  age
}
console.log(firstFunction("dilli",21));
 *                          |
    The values passed are  arguments

****************************************************************

*/
/**
 * SO LET'S MAKE OUR FUNCTION MORE SECURE AND USE TS BENEFITS
 */
var secondFunction = function (name, age) {
    return name + " " + age;
};
console.log(secondFunction("dilli", 21));
// What if we assign other data type to arguments 
// hover and we get message Argument of type 'number' is not assignable to parameter of type 'string'.
var thirdFunction = function (name, age) {
    return name + " " + age;
};
console.log(thirdFunction(45, true));
// Solve it by passing the right data type arguments there
// console.log(thirdFunction("ocean", 45));
/*** BIG QUESTION WHY TO DECLARE SUCH TYPE IN TS?
 *
 * declaring data type in parentheses we secure our function
 * developers who will use this function or code will know what data type should be used in particular function
 * it will clean and clear function which will be for particular task like if we need function that may collect
 * the user name and phone number then this type of function may be the best to use.
 */
//  Note: We are using the tsc -w which is watching all our error or check your console.
