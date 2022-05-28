"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
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
--- Making our code more explicit
--- Declaring the type of function and parameters
--- working closely with typescript rules to make our code more safer
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
/***** IT IS BETTER TO ADD EXPLICITY TO OUR CODE WITH TS */
// For example It is better to tell the function what It will return 
/*** This function is explicity written stating that function is constant which takes
 * parameters that are strings and function itself is returning or is string function
 * this will be more precise and it will decrease the chances of getting bugs and errors
 */
var getFullName = function (name, surname) {
    return name + " " + surname;
};
console.log(getFullName("Dilli", "Hang"));
/**
 *  Day-5
   - Typescript understands object by default
   - Interfaces
   - Use/Importance of Interface
   - Errors in Interface
   - Entity in Ts Interface
*/
/* Let's say we have user object
   which holds name and age
   below the code we see two user which are user and user2
   that must hold name and age but mistakely user has not got the age
   so in this js will not help us and we may not know that the age
   is missing or required for user2 for such cases Typescript comes to resuce we use
   special powerful feature of Ts which is called interface.
*/
/** Technically this code is correct **/
var user = {
    name: "Dilli",
    age: 23
};
var user2 = {
    name: "Hari"
};
/*** Interface --
 * What is Interface?
 * /
 
 /*
 * An interface is a syntactical contract that an entity should conform to. In other words, an interface defines the syntax that any entity must adhere to.
 * It helps to describe the entities.
 * It define properties, methods, and events, which are the members of the interface.
 * The only job of an interface in TypeScript is to describe a type. While class and function deal with implementation,
 * interface helps us keep our programs error-free by providing information about the shape of the data we work with.
 */
/** Remember this should be the explicit form of above code */
var userA = {
    name: "Ram",
    age: 23
};
var userB = {
    name: "Shyam"
};
var user = {
    name: "Moster",
    age: 30
};
var user2 = {
    name: "Jack"
};
var userAlpha = {
    name: "Jedel",
    age: 25
};
// Now we get type interface here const userBeta: EgUser
var userBeta = {
    name: "Jacky"
};
// It's time to log some information on the console.
console.log(userAlpha.name);
// Ts catching the error 
// error is Property 'namee' does not exist on type 'EgUser'. Did you mean 'name'?
console.log(userAlpha.namee);
;
// After Adding getMessage() function we are getting all errors everywhere on objects
// this is error --- Property 'getMessage' is missing in type '{ name: string; }' but required in type 'exUser'
// simply adding and returning the correct data type inside the objects we can solve this
var userX = {
    anotherName: "dilli",
    age: 23,
    getMessage: function () {
        return "Hello I am ";
    }
};
var userY = {
    anotherName: "Dipen",
    getMessage: function () {
        return "Hello I am ";
    }
};
console.log(userY.anotherName);
// we can get the created functions
console.log(userY.getMessage());
var world = {
    anotherName: "dilli",
    getMessage: function () {
        return "Hello I am ";
    }
};
// Note: Always avoid clashing of naming between interface and classes
// for eg: both are going to have same name 
Class;
User;
{ }
/**
 * Unions in Typescript
 *
 * Normally we declare the datatype in Typescript in this way
 *
 * let username: string = "dilli";
 *
 * BUT WHAT IF I WANT STRING AS WELL AS NUMBER DATA TYPE ?
 * FOR THAT UNIONS COMES TO RESCUE which will allow us to
 * provide string or number to the variable data type
 */
var username = "Dilli";
//  this is the way of writing the union
// so what exactly happens here is that newusername may be string or number as
// as we have provided number 45 so it will number by default
var newusername = 45;
//  in this errorMessage variable we have either string or null value
// be default we are setting null as value
var errorMessage = null;
//  what if we didnot set the null 
//  IT WILL BE UNDEFINED AND VERY BAD PRACTICE TO KEEP IT
//  SO IT IS BEST PRACTICE TO KEEP ANY DATA TYPE BY DEFAULT
var errorMessages;
var customerName = "Peter";
var customerPageNumber = "0414";
// This is competely fine to write or insert the interface inside the unions within a variables 
var customerFullName = null;
/*** This One is Disaster Please donot do this! This is very bad practice It doesnot ensure the security of your code. */
var customerFullNameIs;
//  Passing Union Type in Function Parameter
//  Down below we have passed value as parameter which holds unions of number and string
//  we have applied typeof which finds the data type of value and strictly compare the argument value
// in this way we can use unions inside the function
function display(value) {
    if (typeof (value) === "number")
        console.log("The given value is number data type!");
    else if (typeof (value) === "string")
        console.log("The given value is of string data type!");
}
display(123);
display("this is string");
/** Passing Union Type to Arrays  */
// we can use unions declaring the arrays types as we have discussed earlier
// here firstArrayType can be string of number and string of array
var firstArrayType;
var i;
var j;
firstArrayType = [0, 1, 2, 3, 4, 5, 6, 7, 8];
console.log("This is Array of Number type: ");
// we are using the for loop and we have i variale holding number datatype
// and we are looping the array of number and string with i and printing it on the console
// Examples: 
for (i = 0; i < firstArrayType.length; i++) {
    console.log(firstArrayType[i]);
}
firstArrayType = ["string", "datatype", "in", "secondArray"];
console.log("This is string array");
for (j = 0; j < firstArrayType.length; j++) {
    console.log(firstArrayType[j]);
}
/** Day - 8  - Exercises on Typesript
 *           - Learing Source https://www.w3schools.com/typescript/typescript_exercises.php
 *           - Typescript assignments methods to declare data type
 *
 */
/**
 *  Today I try to learn in a different manner. I found some exercises on Typescript
 *  on w3schools.com which are based on few basic topics that I have covered on my
 *  learning journey.
 */
// Exercise was simply the best.
//  What did I learn?
/**
 * 1. Typescript allows developers to add Types to Javascript
 
 * 2. Javascript is loosely typed language whereas Typescript is not.

 * 3. Typescript file is always needed to gets complied to Javascript Files and it can be configured on tsconfig.json (json-format) file.

 * 4. There are two main ways that TypeScript assigns a type.
        - Explicit and Implicit (explained below)

  * 5. Infer in Ts and How does it work?

 */
/* Eg of Explicit way to assign a Type
//  Explicit simply means writing out the type. Explicit types assignment method are
   easier to understand, read and more interntional.
   If someone is using this explicit method that means he/she exactly knows the data type
   and intend to use particular datatype.
**/
var firstName = "dilli";
/* Eg of Implicit way to assign a Type **/
var fullName = "Dilli Hang Rai";
/*  In this method Typescript simply guess the type, based on the assigned value
    - that means Typescript guess the types of value which is called infer
     - This implicit method will forces Typescript to infer the value
     - Sometimes our Typescript donot properly infer the variable data type if such
     conditions arises then it will set the type to any which disables
     type checking.
**/
var json = JSON.parse("23");
// hover over the typeof json we get any as data type
console.log(typeof json);
// Forcing Typescript to disable the type checking with any keyword
var myAge;
// unknown in Ts means it is not known value data type ,it can be anything
var myAddress;
/**
 * NOTE: I have only practiced some exercise based on topics I have covered in Typescript.
 * More Exercises will be covered in upcoming Days.
 */
/** Day - 9 - Revising and Practice
 *          - Revised Intefaces, Unions, const, types
 *          - coded with Examples
 */
// Revision No: 1 const is really constant in typescript 
// once constant is declared it/similar named variable cannot be reused in whole program   
var hari = "this is constant hari";
var ram = "this is constant ram";
console.log(hari);
console.log(ram);
// hovering over hari we get Cannot assign to 'hari' because it is a constant.
hari = "this is supposed to be new hari";
ram = "we are trying to change the constant ram";
console.log(hari);
// let in Typescript works similar way in javascript but hovering
// over the variable we get any type let jackson:any
var jackson = "jackson is 3d object";
console.log(jackson);
jackson = "Jackson is now 4d object";
console.log(jackson);
// Revision No: 2
/* over the variable we get any type let jackson:any
// that means typescript understands if no any data type is provided
// it means any data type or Ts understand the type depending upon the
// value we have provided how do we know that just hover over the
// console.log(jackson)
// we get to see let jackson:string
**/
// Revision No: 3 
/* Providing then one data type in Typescript which is called union
   this is important when we need more than one data type like
   if I need string and number of arrays both we can use union
   union allows us to declare and use more than one type
   pipe(|) sign represents the union in Ts
 *
 */
var myFirstArray;
myFirstArray = ["number system", "octal", "BCD", "radix", "base of number system"];
myFirstArray = [0, 4, 8, 16, 24, 32];
var sportOne = {
    sportName: "football",
    sportNumber: 4
};
var sportTwo = {
    sportName: "BasketBall",
    sportTime: true
};
var sportThree = {
    sportName: volleyball,
    sportTime: boolean
};
/** In the above we have used type inside the interface named petsInterface will hold either
 * string or number value similarly we can use type petNumber in variable too
 */
var myPetNumber;
//getting error here type myPetNumber is not assignable to boolean 
myPetNumber = false;
//error free as our type knows this is string which is assignable
myPetNumber = "string";
// this is okay but using type entity could be clear and understandable
var popularSinger = ["adrian", "narayan gopal", "asha bhusal", "tara devi", "rajesh payal rai"];
// this will show type with string of arrays[]
var popularSingers = ["adrian", "narayan gopal", "asha bhusal", "tara devi", "rajesh payal rai"];
// could be used as  type mayBePopularSinger = string | null;
// but we are combining the unions with type alias
var newPopularSingerCollection = null;
// donot provide empty array it will throw errors --> Type 'undefined[]' is not assignable to type 'string'.
// instead supply strings of arrays declaring that mayBePopularSinger has string of array []
var newPopularSingers = ["donot", "supply", "empty", "arrays"];
/** Day - 11 - Data types in Typescript
 *           - Types of Data Type Typescript
 *           - Void Data type
 *           - Any Data type (Special Data type)
 *           - Errors Reading and handling
 */
/**
 * 1. Data type
      - whenever we declare we except to provide it some kind of value right not only value
      but that particular value must have data types like it can be number,string, boolean, undefined, null
      so similarly in Typescript we have data type . As Typescript is superset of javascript it supports all
      the data types of Javascript.
      It is very important to learn and understand the data type. As data type is also responsible how
      much memory it can hold/reserved after the variable is declared.
      It also inform the type of data it is holding with value.
 */
// for eg: we have syntax 
// [Keyword] [Variable Name]: [Data Type] = [Value];
var firstString = "string Data type";
var firstNumber = 45451211;
var firstBoolean = true;
var firstNull = null;
var firstUndefined = undefined;
//  2. Kinds of Typescript Data Types
/***
 *                Typescript Data Types
 *                           |
 *          ----------------------------------------
 *          |                 |                    |
 *      Primitive Types      any          User-Defined Types
      - Number            (super set)        - enums
      - String             + special         - classes
      - Boolean            Data type         - interfaces
      - Void                                 - arrays
      - Null                                 - tuple
      - Undefined
*/
/* Void Data type in Typescript
   - easiest and simplest data type in Typescript
   - it returns zero or nothing or no output:undefined
   - eg with function voidFunction
   - hover over the console.log we get console.log(..data: []):void and on over voidFunction we get const voidFunction: ()=> void
   - this means typescript understands bydefault it is void data type if it is not returning anything
   - but it is always best practice to include the void
*/
var voidFunction = function () {
    console.log("this is void data type!");
};
var anotherVoidFunction = function () {
    console.log("This is void function ");
};
// examples showing the void returns undefined or nothing value
var voidEg = undefined;
voidEg = "I want to assign new value";
// got error type 'string' is not assignable to 'void' type
// solution will be
voidEg = undefined;
// 3. Any Data Type
/** This is special data type which is superset of both User-defined and Primitive Data type
 *  Using this data type disable the Typescript type-checking and compile time checking
 *  this is dynamic and regarded as wrost data type (wrost based on its main feature)
 */
// for eg: using any data type below shows that we can now do anything with our variable
// this clearly shows Typescript has been disabled and it is loosing it's essence here 
var arrow = "dilli";
arrow = 4545;
arrow = true;
arrow = undefined;
arrow = null;
//  what the heck is .arrow() method it should have thrown error in normal case by Ts
// but any data type means it could be any and Typescript does allow to do anything
// this can surely brings bugs in big projects.
console.log(arrow.arrow());
/** Day - 12 - Continue Data Type in Typescript
 *           - Never & Unkown Data Type
 *           - Uses of never, any & unknown Data Type
 *           - Errors Reading , Handling & Solving
 */
/**
 * Typescript any data type completely ignores the data type value assigned to the variable
 *  - but the advantages of any data type is if we donot know how to fix the bug or we got
    - error only at a line no : 121 and then  at that  point we may be use any so that
    - all program or project runs

    ----- If you cannot fix error type any data
    ----- It is best practice to use only 4 or 5 any data type in project
    ---- if you ever have to use any in project for more than dozen times
    ---  think/maybe you are lacking some proper knowledges and solving the errors
    ---  using any is like bottle with small/tiny holes
 */
/* 1. Never Data Type
       - This Data type may not be as popular as other Data types
       - it values(contain no value) that will be never and if we are using this means some values
          will never occur in our project

       - used for throwing error or if we need to throw an expection or error
       then we make a function that will throw error

       - use the never type to represent the return type of a function that always throws an error. For example:
          function raiseError(message: string): never {
             throw new Error(message);
           }
*/
// Eg of function throwing always never
var neverFunctionExample = function () {
    throw "never";
};
// 2. Unknown Data Type
/**
 *  - Introduced in Typescript version 3
    - Unknown Data type is somehow similar to any but we can only assign any and unknown(that means value)
      whose data type is not known to the unknown type so we can it is type-safety not like any which can bring
      bugs in our code so if we have to use unknown data type after it's declaration it must be precisely
      defined with value and data type otherwise we cannot use it or access any properties.
*/
// Example :
var vAny = 708;
var vUnknown = 822;
var randomV = vAny;
var randomUnknownV = vUnknown;
// From above example we now clearly knew that
// unknown data type cannot be assigned untill it's data type is known
// so we get error ----> Type 'unknown' is not assignable to type 'string'.
// but any can be used with no any error so Unknown data type is awesome and safe then any
// this shows that unknown data type means we donot know yet what data type will be used in such cases
/* but as we keep on working with project we will surely know exactly what data type will come
   so in such cases we bring our unknown data type and assign the data type and use it.
*/
/* For eg: How we assign the data type to unknown?
          -> simply using as keyword we can assign required data type to unknown and use it in variable
*/
var presentUnknownFutureKnown = 23;
var nowWeKnowDataType = presentUnknownFutureKnown;
//        ----> unknown  to  string data type
// similarly can be used with any
var pageNumberAny = "1";
var pageNumberAnyT = pageNumberAny;
var myWord = "one";
var myNumbericWord = myWord;
/* now we getting error as error --> Conversion of type 'string' to type 'number' may be a mistake because neither
type sufficiently overlaps with the other. If this was intentional, convert the expression to 'unknown' first.ts(2352)
*/
/**
 *     This means first converts string to unknown and unknown to number
 * -- this process/functionality is called type assertion in typescript
 *     ------------ string -----> unknown ---> number
 */
var mySolveNumbericWord = myWord;
// Notes:-Best Practice to use void and unknown as well as never(which is not popular) & to avoid any data type.
/** Day - 13 - Working with DOM in Typescript
 *           - Accessing the Elements Properties
 *           - Making Typescript Understands HtmlElement Types
 *           - Adding Listener to Typescript
 *           - Errors Reading , Handling & Solving
 */
// Working with DOM in Typescript
var oneElement = document.querySelector(".select");
//  Typescript has lots of types for DOM out of the box
/**
  const oneElement = document.querySelector(".select");
  // here const oneElement is variable with .select as className

  Hovering over the oneElement we get oneElement: Element
  this means it is Element or oneElement understands that it is element Data Type
 */
/**
  As our Typescript Only understands the data type it has no idea
  on markup , it doesnot parse it and doesnot see at all
  it only really cares/sees only about data types in typescript

*/
var twoElement = document.querySelector(".select2");
console.log('This is Two Element', twoElement.id);
console.log('Typescript now understands the methods', twoElement.innerHTML);
// Elements is the highest class in hiearchy
// what if I want to do something with .select2 like I want to get the
// value from it? 
/**
 * Then we can simply do .value or .val like in jquery or js
 * right but it brings problems in Js
 * -- error- --> Property 'value' does not exist on type 'Element'.
 */
console.log('oneElement', oneElement.value);
// we can solve this by just passing the any data type
console.log('oneElement', oneElement.value);
// BUT NEVER FOLLOW OR DO THIS CHANGE IT TO ANY THIS WILL BRING
// CRACK IN CODE RATHER DO THIS BELOW
var notGenericElement = document.querySelector(".select");
var getHTMLElement = document.querySelector(".gettingValue");
// This shows completely no error as HtmlInputElement does have .value method
// that returns some value of HTMLelement
console.log("Some are HtmlInput some are not we can access to properties with these methods ", notGenericElement.value);
// Adding Listener to the Typescript
var addListenerElement = document.querySelector(".listen");
// Typescript supports the .addEventListener method which holds the two parameters
// One parameter is event (in our case it is fade which is event name) -- fade means we try to fade it
// then it has event function which is taking event param and logging the event and param event
addListenerElement.addEventListener('fade', function (event) {
    console.log('This is function event', event);
});
/** Hover over (event) we get
 * event is actually Event which is generic , they are same generic
 * both addListenerElement and event
 * this shows that event is also the highest class in hiearchy
**/
// How to read the event value now??
// getting error when we want to get value from event .
// error --> Property 'value' does not exist on type 'EventTarget'.
addListenerElement.addEventListener('fade', function (event) {
    var target = event.target;
    console.log('This is function event', target.value);
});
/**
 * as event is generic so we have to tell the typescript that event.target
 * is not generic but htmlelement that has value by declaring the target as variable
 * now we can remove the event and add target.value directly as we know htmlinputelement holds value
// Typescript Doesnot Have any access to our MARKUP
/** 1. First Define the correct type of DOM Element
 *  2. Then Typescript will decide either that element has any method
 *  Element and Event is one of the highest class in  hiearchy.
 *  This may be the way to workout with DOM elements in Typescript.
*  */
/** Day 14 - Classes in Typescript (OOP-Concepts)
 *         - Basics of Classes, Fields, Methods
 *         - Class Constructor and Class Instance Objects
 *         - Examples of Class in Typescript
 */
/*

Classes in Typescript
   -> classes are the fundamental entities which are used to create reusable components.
   - Just like in OOP (object-oriented Progamming Language) like Java,C++
   - Typescript fully supports the Classes along with some added features,syntax & antonations
   - It is like a blueprint for creating objects in terms of OOP concepts
   - and our Typescript is like OOP which suports classes, interfaces,
   - data binding. ES6 version of Js supports the classes and Good news is Typescript is based on
   - ES6 and latest version.
   
   
Classes Includes:
   - Fields  -- it is any variable declared in a class
   - constructors - allocating memory gor the objects of the class
   - methods or functions - represent the execution or actions taken by objects

Basic Syntax of Class is
  class ClassName {

  }
*/
// this is an example of class in typescript with normal properties type
var Books = /** @class */ (function () {
    function Books() {
    }
    return Books;
}());
// accessing the  properties of Classes
var books = new Books();
books.name = "The art of war";
/* constructor in Ts classes
class Books {
        constructor(bookName: string){
        this.bookName = bookName
    }
}
Constructor is special function of the class that is responsible for intializing the variables/properties of Class
- Ts has constructor keyword, it is a function and can be parameterized
- here this keyowrd refers to current instance of the class object
- let's look with an example below the code we see bookName twicely once
- inside the parentheses of constructor function another as variables of class newBooks

### this ---> this keyword always avoid ambiguity, the class’s field is prefixed with the this keyword.
*/
var newBooks = /** @class */ (function () {
    function newBooks(bookName) {
        this.bookName = bookName;
    }
    newBooks.prototype.bookFunction = function () {
        console.log("This is function from inside the Class named newBooks !");
    };
    return newBooks;
}());
// Creating Instance objects
/**
  - With the help of new keyword we can create an instance class like constructor has created for us up there.
  - new keyword is responsible for instantiation.
  - Basic syntax is --
    var object_name = new class_name([ arguments name ])
 */
var egNew = new newBooks("Hello from instance objects");
// Accessing Attributes 
egNew.bookName;
//accessing function's properties 
egNew.bookFunction();
// Examples of Class in Typescript
var Guitar = /** @class */ (function () {
    function Guitar(guitarName, guitarRate) {
        this.guitarName = guitarName;
        this.guitarRate = guitarRate;
    }
    Guitar.prototype.getGuitar = function () {
        return this.guitarName + " " + this.guitarRate;
    };
    return Guitar;
}());
var fullGuitar = new Guitar("gibson les paul", 1960);
/** Day 15 - Brief on Encapsulation(OOP-Concepts)
 *         - Access Modifiers in Typescript
 *         - Brief on Readonly in Typescript
 *         - Erros Reading & Handling
 */
/* 1. Encapsulation Concept:
              - It is one of the fundamental concept in object-oriented programming
              - It is also often used to hide the the internal representation, state, or let's say working mechanism of any code/object
                from the outside which is also called information hiding.
              - It also means a process where attribute is not visible from the outside of an object and we bundle it with
                methods that provide read or write access, such access facilities of writing and reading specific information is allowed
                by encapsulation.

  2. Data Modifiers in Typescript
              - From above definition of encapsulation of we might know that in OOP, the concept of
                'Encapsulation' is used for making class (class that we have created in previous Day)
                members public or private which means class can control the visibility of its data and
                members that are present inside it.

            Q. But how to control or take access of it?
               - With the help of Access Modifiers we can do it.

           
                                 Access Modifiers
                                       |
        -------------------------------------------------------------------
        |                              |                                  |
      Public                        Private                         Protected
               
3. Note: By default Typescript treats properties and methods as public by default if no any modifier is applied to them.

// Example below shows that class Buses methods and properties can be accessed by creating instance class object
   it means busName and busCode are default till now by default . so keeping public busName or just busName is same.
**/
// 4. Public Modifiers: - All the public members can be accessed anywhere without any restrictions. 
var Buses = /** @class */ (function () {
    function Buses() {
    }
    return Buses;
}());
var Bus = new Buses();
Bus.busName = "Sajha Yatayat";
// 5. Private Modifiers
var Os = /** @class */ (function () {
    function Os() {
    }
    // protected and private can only be accessed inside the particular class.
    Os.prototype.getOperatingSystem = function () {
        return "".concat(this.apple, " ").concat(this.kernel);
    };
    return Os;
}());
var OS = new Os();
OS.apple = "ios operating system"; // we cannot directly accessed the private memebers
// getting error --> Property 'apple' is private and only accessible within class 'Os'.
OS.osNumber = 1999; // this is good can be complied
/* 5. Readonly
        - Readonly is the one of keyword in Ts which allow us to only read the property of class, type or interface.
        - It cannot be modified but can be accessed from inside & outside too.
        - It all depends on their initializing/declaration part inside the class Constructor

        Example of syntax(may not be 100% accurate):
              class className {
                  readonly propertyName: datatype;
              }
              let newClassName  = new className;
              newClassName.propertyName;
 *
*/
/*** Day -16  -...continue Readonly , Readonly vs const
 *            - Interface + Class with access modifiers
 *            - Typescript - Static
 *            - Erros Reading & Handling
 */
/**
 *  # Readonly vs const
           - const is variable but Readonly is access modifiers
           - we can make class immutable with Readonly but const cannot
           - initialization of const is in the declaration but for Readonly both in the declaration or in the constrcutor of same class

 *   Example of initializing the readonly in constructor of the same class:
           class Bikes {
                readonly bikeName: string;

                constructor(bikeName: string){
                    this.bikeName = "Royal Enfield";
                }
           }
 *
 */
var collectionHistory = /** @class */ (function () {
    function collectionHistory(historyBook) {
        this.historyBook = historyBook;
    }
    return collectionHistory;
}());
var oldBook = new collectionHistory(new Date(1972, 05, 4));
// getting error --> Cannot assign to 'historyBook' because it is a read-only property.
// as we have set the historyBook as readonly and is already declared as new Date(1972,05,04)
oldBook.historyBook = new Date(1956, 05, 12); //getting compile error
oldBook.modernBook = "Age of Empire";
oldBook.modernBook = "Game of Thrones";
var newPI = { PIValue: 3.14 };
console.log(newPI.PIValue);
// error --> Cannot assign to 'PIValue' because it is a read-only property.
newPI.PIValue = "three point One Four";
newPI.dynamic = "This is dynami vale";
// If we want to make some property inside the class constant we can use readonly which is super handy
var regularUser = /** @class */ (function () {
    function regularUser(firstName, lastName) {
        // this firstName and outside firstName is different
        this.firstName = firstName;
        this.lastName = lastName;
        this.unchangeableName = firstName;
    }
    // trying the assign the value to unchangeableName
    regularUser.prototype.changeUnchangeableName = function () {
        // error on compiling 
        this.unchangeableName = "Trying to change the unchangeable Name!";
    };
    regularUser.prototype.getFullUserName = function () {
        return this.firstName + " " + this.lastName;
    };
    return regularUser;
}());
var dailyUser = new regularUser("Dilli", "Hang Rai");
console.log(dailyUser.firstName);
/* Day - 17   - Continue learning the intercept + static + class with access modifiers....
              - inheritance in Typescript
              - Generics in Typescript...


/** getting error -->Class 'mixinginterfaceExample' incorrectly implements interface 'addInterface'.
    Property 'addingInteface' is missing in type 'mixinginterfaceExample' but required in type 'addInterface'.ts(2420)
    main.ts(1272, 9): 'addingInteface' is declared here. */
var mixinginterfaceExample = /** @class */ (function () {
    function mixinginterfaceExample() {
    }
    return mixinginterfaceExample;
}());
// REMOVING ERROR SIMPLY BY INSERTING THE  addingInteface() method
var validMixingInterfaceExample = /** @class */ (function () {
    function validMixingInterfaceExample() {
    }
    validMixingInterfaceExample.prototype.addingInteface = function () {
        return "HELLO WORLD";
    };
    return validMixingInterfaceExample;
}());
/* ## Typescript - Static
        - Static is introduced in ES6 so does in Typescript. As name suggets static it has static functionality

        -##very useful source: https://codingbeam.com/static-methods-properties-typescript-tutorial/

        - They are accessible by ClassName.[propertyName] or Class.[methodName].

        - Example:Math.floor() is a static method available in Math Class which don’t need any instance
          for using it, and another example is Math.PI which has static value of 3.14.

        - The static methods and properties are available in a class which have the static functionality
          and they are available without any instance object.
 *
*/
var exampleStatic = /** @class */ (function () {
    function exampleStatic() {
    }
    exampleStatic.gValue = 9.8;
    return exampleStatic;
}());
// look no error
exampleStatic.gValue;
// look error without instance objects
exampleStatic.radius;
// can be solved by creating instance object with new keyword
var anotherStatic = new exampleStatic();
anotherStatic.radius = 8548448;
/** Day - 18  - ...continue concept of inheritance in Typescript
 *            - Generics in Typescript
 *            - Generate Unique id using generics too
 *            - Using Generics with Interface
*/
var BigBoy = /** @class */ (function () {
    function BigBoy(boyName, boyAge) {
        this.boyId = 822;
        this.boyCash = "Rs. 12000";
        this.boyName = boyName;
        this.boyAge = boyAge;
    }
    BigBoy.prototype.getFull = function () {
        // return " getFull functio returns string";
        return this.boyName + " " + this.boyAge;
    };
    BigBoy.prototype.getBoy = function () {
        return this.boyCash + " " + this.boyId;
    };
    BigBoy.boyEyeColor = "red";
    return BigBoy;
}());
var boy = new BigBoy("Dilli", "Hang");
boy.boyGender = "male";
boy.boyAge = 23;
// try to get the protected and private data 
BigBoy.boyEyeColor;
boy.getBoy();
boy.getFull();
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Admin.prototype.setEditor = function (editor) {
        this.editor = editor;
    };
    Admin.prototype.getEditor = function () {
        return this.editor;
    };
    return Admin;
}(BigBoy));
/**
 * A class can reuse the properties and methods of another class.
 * This is called inheritance in TypeScript. The class which inherits properties and methods is called the child class.
 * And the class whose properties and methods are inherited is known as the parent class.
 * These names come from the nature that children inherit genes from parents.
*/
/** Inheritance explanation in own words
 *  Inheritance is a major pillar of objected-orineted progamming.
 *  There are different kinds of inheritance in OOP but for now we are only using single heritance
 *  let me explain in plain langauage for exmaple if we check our DNA and compare to the parent's DNA we find the proof
 *  or our information is surely being inherited similarly inheritance in OOP is also works in a same way.
 */
/*
 * Single Inheritance in TypeScript: In single inheritance, the properties and behaviour of the base class
 *  can be inherited into at most one derived class. It used to add new functionality to the already implemented class.
 * Example: In this example, we are creating a Person as a base class and using single inheritance
 * implementing Teacher as a Derived class.
 * class baseClassName {
       }
   class derivedClassName extends baseClassName {
   }
*/
/**
 * Typescript - Generics
 *     - It is very important and we always need a reuseable components that makes the program flexible as
 *         well as scalable in the long-term.
 *     - Generics in Typescript helps us to create reusable component and make components work with any
 *       data type and not restrict to only one data type.
 *
 *
 *
 *
 
// Day - 19     - Continue with Generics in Typescript
                - Understandig the Generics with Function
                - Errors Reading & Handling

 *     - Generics in Typescript is similar to C# generics and can be called or used with a variety of data type.
 *     - Generics uses the type variable , a special kind of variable that denotes types.
 *       The type variable remembers the type that the user provides and works with that particular type only.
 *    - In generic we pass a parameter called type parameter which is put in between the lesser and greater sign
 *      < > for eg: < type_parameter_name>.
 */
// Example of function without using generic
function sum(items) {
    return new Array().concat(items);
}
var numArray = sum([1, 2, 3, 4, 5]);
var stringArray = sum(['this is ', 'a ', 'string']);
console.log(numArray);
console.log(stringArray);
//Example of function with using generics
function getMe(items) {
    return new Array().concat(items);
}
var myNumArray = getMe([451, 45, 856]);
var myStrArray = getMe(["Hello", "World"]);
myNumArray.push(400);
myStrArray.push("Pushing only string");
// we are getting compile error because we have generic type T for myNumArray as type number number of array
myNumArray.push("Hi this is array"); // Compile Error 
// Generic Type <T> as string of array
myStrArray.push(5000); // compile Error
// Generate Unique Id with Generics
// (obj) is throwing the warning called--> Parameter 'obj' implicitly has an 'any' type, but a better type may be inferred from usage.
// this is because we have not provided any data type to the obje which is meant to be parameter of function addId
// --> we use generics here <T> as Big T 
var addId = function (obj) {
    var id = Math.random().toString();
    return __assign(__assign({}, obj), { id: id });
};
var userUniqueId = {
    name: "dilli"
};
var userResult = addId(userUniqueId);
console.log("User Dilli has unique id --->", userResult);
var ownName = {
    id: 708,
    trade: "Trademark"
};
// Holding A as number and B as string here similarly can be used with other local variables
var otherName = {
    id: true,
    trade: null
};
var createId = function (obj) {
    var myId = Math.random().toString(16);
    return __assign(__assign({}, obj), { myId: myId });
};
// creating a constant user which will have unique 16 characters string
var otherUser = {
    userName: "Dilli Hang Rai"
};
// Here calling a createId function which will have interface as Generics with parameter otherUser
// This is also an example of explicit declarations which help to read code more easily
/* Hover over createId to show -- >
       const createId: <creatingInterface>(obj: creatingInterface) => creatingInterface & {
                  myId: string;
        }
* */
var finalOutput = createId(otherUser);
console.log("FinalOutput is  ", finalOutput);
// PROBLEM HERE IS CODE CAN BE BROKEN WITH ANOTHER TYPE 
/* Now our function works as obj -->  const createId: <string>(obj: string) => string & { myId: string; } */
var finalResult = createId("This is string ");
console.log("FinalResult is --> ", finalResult);
// This code can be used more secure by setting the default Generic type as <T extends object> with our function at previous stage
var sumId = function (obj) {
    var uId = Math.random().toString(16);
    return __assign(__assign({}, obj), { uId: uId });
};
var namingUser = {
    name: "Dilli",
    data: 451.10
};
//getting error as -Type 'string' does not satisfy the constraint 'object'.
var finalUser = sumId("adding string");
console.log("finalUser is --> ", finalUser);
// This will satisfy our condition that satisy the setting default Generic Type as <T>
var finalUsers = sumId(namingUser);
console.log("FinalUsers --->", finalUsers);
var customUser = {
    superName: "Dilli",
    // this is like json object
    address: {
        object: "Itahari"
    }
};
var dynamicUser = {
    superName: "dilli",
    address: ["Itahari", "Sunsari", "Nepal"]
};
/* Day - 21  - Enums in Typescript
             - Types of Enums in Typescript
             - Intialization of Enums
*/
/**
 * Enums/Enumeration in typescript
 * - It is a special 'class'that represents a group of constants(unchangeable variables).
 * - It is new data type in Typescript as introduced in other langauges such as Java or C++
 * - It allows to create a set of named constant
 * - this is like collection of related values that can be string or nunmber values
*/
// Types of Enums in Typescript
/**
                    Enums
                      |
----------------------------------------------------
|                     |                           |
Numeric enum        String enum              Heterogeneous enum

// Basic Syntax of Enum
      enum enum_name {
          // values....
        }
*/
// Basic Syntax Example: 
var exampleEnum;
(function (exampleEnum) {
})(exampleEnum || (exampleEnum = {}));
/**
 *  Initializing of Numberic Enums
 *     # Default - Numeric Enums
         - By default, enums will initialize the first value to 0 and add 1 to each additional value:
       
       # Mannual Initializing
        - But we can intialize it by giving the value of the first numeric enum and have it auto increment from that
*/
// Default Enums
var defaultEnum;
(function (defaultEnum) {
    defaultEnum[defaultEnum["up"] = 0] = "up";
    defaultEnum[defaultEnum["down"] = 1] = "down";
    defaultEnum[defaultEnum["right"] = 2] = "right";
    defaultEnum[defaultEnum["left"] = 3] = "left";
})(defaultEnum || (defaultEnum = {}));
var currentEnum = defaultEnum.up;
console.log(currentEnum); // check logs should be 0 
// Setting Mannual Enums
var mannualEnum;
(function (mannualEnum) {
    mannualEnum[mannualEnum["up"] = 1] = "up";
    mannualEnum[mannualEnum["right"] = 4] = "right";
    mannualEnum[mannualEnum["left"] = 10] = "left";
    mannualEnum[mannualEnum["down"] = 5] = "down";
})(mannualEnum || (mannualEnum = {}));
console.log(mannualEnum.up);
console.log(mannualEnum.down); // logs must be 4
// It is not necessary to assign sequential values to Enum members they can have any value
// Fully Initializtion of Numeric Enums
var statusCode;
(function (statusCode) {
    statusCode[statusCode["errorCode"] = 404] = "errorCode";
    statusCode[statusCode["internalError"] = 500] = "internalError";
    statusCode[statusCode["myId"] = 822] = "myId";
    statusCode[statusCode["success"] = 200] = "success";
})(statusCode || (statusCode = {}));
console.log(statusCode.errorCode); // logs must be 404
console.log(statusCode.success); //logs must be 200
/** String Enums
 *     - Enums can also contain strings
 *     - This Enum type is also popular because of it's readability and debug helper
 *     - There values are intialized with string values rather than numeric values
 *     - unlike numeric enum string enums are not auto-incremented
 *
 *  let's understand with examples
 */
var stringEnum;
(function (stringEnum) {
    stringEnum["up"] = "upward";
    stringEnum["down"] = "downward";
    stringEnum["right"] = "rightSide";
    stringEnum["left"] = "leftSide";
})(stringEnum || (stringEnum = {}));
console.log(stringEnum);
// output will be { up: 'upward', down: 'downward', right: 'rightSide', left: 'leftSide' }
console.log(stringEnum.left);
stringEnum['rightSide']; //return rightSide
// Heterogeneous Enum - As name suggets they are enums type that contain both string and numeric values
var heteroEnum;
(function (heteroEnum) {
    heteroEnum["status"] = "active";
    heteroEnum[heteroEnum["statusCode"] = 100] = "statusCode";
    heteroEnum[heteroEnum["pending"] = 101] = "pending";
})(heteroEnum || (heteroEnum = {}));
heteroEnum.status;
/* Day - 22  - Brief on object
*            - object vs Objects in Typescript
*            - Typescript Objects
*            - Types of Typescript Objects
*/
/* # Brief on object:
          - object is alos known as real world entity
          - it can include properties, methods and more importantlty state and behavior
          - State of the object is represented by data members or fields
          - Behaviour is represented by methods.
   

  # object in Typescript
    - It is an instance which contains set of key value pairs covered by curly braces{}
      { name: "dilli" }
         |        |
        key     value
    - assigned values can be scalar, functions or array
**/
var objectCollection = {
    key1: "this is value or scalar value",
    key2: function () {
        console.log("Key returning the function ");
    },
    //collection
    key3: ["array element1", "array element2", "array element3"]
};
var userObj = {
    name: "dilli",
    id: 822,
    age: 23
};
userObj.name;
userObj.id;
/**
 *   # object vs Objects
 *     - one is small/lowercase 'o' object and another is uppercase 'o' Objects
 *     - object = represents all non-primitive values
 *     - Object = type describes the functionality of the objects(like method)
 *  for eg: the Object type has the methods toString(),valueOf methods that can
 *            be accessible by any object.
 *
 *
 *    let eg: {} = {};
 *    console.log(eg.toString());
 *
 *   // output will be
 *     [object Object]
 *       eg     toString
 */
var exampleObjects = {};
console.log(exampleObjects.toString());
var anotherexample = { key1: 450 };
console.log(anotherexample.toString());
function namingFun(nameInter) {
    return "Hello " + nameInter;
}
namingFun("Dilli");
var exampleMore = {
    "indexKey1": "string1",
    "indexKey2": "string2",
    708: "Dilli Hang ",
    822: "BIB no",
    "unionEg": false,
    "true": false
};
//example of index signature
var nameCollect = {};
nameCollect.Dilli = 23;
console.log(nameCollect);
// output will be { Dilli: 23 }
nameCollect.HangRai = "string"; //compile error -> Type 'string' is not assignable to type 'number'
var newGuitar = {
    model: 45154,
    name: "hex",
    price: 15000
};
var oldGuitar = {
    model: 451,
    name: "gibson"
};
// error be-->Property 'price' is missing in type '{ model: number; name: string; }' but required in type 'guitar'.ts(2741)
// 'price' is declared here.
// error has araise because our interface always checks the members present inside it with correct data type
// SO what if we may not need either model, name , price any properties for that utility types comes to rescue
/** Day - 24 - continue Typescript Utility Types
*            - keyof in Typescript
*            - revision from the start
*/
var exampleGuitar = {
    model: "epiphone",
    name: "gibson les paul"
};
// see no error even not providing price, this shows partial has made type to arguments which are optional
exampleGuitar.model;
// with required utility 
var studentMaths = {
    calcus: "Very interesting",
    variables: "declare a variable"
};
// getting error as ---> Property 'equation' is missing in type '{ calcus: string; variables: string; }' but required in type 'Required<Maths>'.ts(2741) -- 'equation' is declared here.
// solve error by providing the equation
var studentMath = {
    calcus: "Very interesting",
    variables: "declare a variable",
    equation: "no equation"
};
// # Record utility is used to define an object type with a specific key and value type.
// Record<string, number> is equivalent to { [key: string]: number }
var fixedUser = {
    'Bob': 51,
    'Marley': 41
};
var errEg = {
    1: "string",
    "string": 1
};
var pickedUser = {
    id: 1,
    name: "dilli"
};
pickedUser.name;
pickedUser.id;
var exampleOmit = {
    id: 708,
    first_name: "Dilli Hang",
    last_name: "Rai"
};
var erroromit = {
    age: 23,
    address: "Tarahara",
    id: 822
    // getting error as --Type '{ age: number; address: string; id: number; }' is not assignable to type 'Omit<exOmit, "id" | "first_name" | "last_name">'.
    // Object literal may only specify known properties, and 'id' does not exist in type 'Omit<exOmit, "id" | "first_name" | "last_name">
};
var myValue = 15454; // error as --Type '15454' is not assignable to type 'string | boolean'.
var pupil = {
    name: "harry",
    age: 22
};
function findCollect(collection, details) {
    console.log("finding the right collection is ".concat(details, ": \"").concat(collection[details], "\""));
}
var finalCollect = {
    name: "smaple",
    founder: "alibaba",
    year: 1999
};
findCollect(finalCollect, "name"); // it should give  finding the right collection is: "sample".
// Exercise 1 - Typescript allows developers to add types to the javascript.
var eam = "this is string"; // this feature is not allowed in Js
var eamM = "string";
// Exercise 2 - Javascript is loosely typed language where as typescript is not.
eam.toLocaleLowerCase();
eam.hike(); // this is error in typescript but no error in pure javascript file
// Exercise 3 - Typescript allow or provide feature of configuration throught tsconfig.json file 
// which is javascript notation format .json whereas Javascript doesnot have any config file
// Exercise 4 - Methods to assign type/ method to type anotation in Typescript
// one is explicitly and another is implictly
// Explicit --> adding a type directly to our codebase
var deer = "animal";
var river = "source of water";
// Implicit --> adding a type / inferred by the Typescript inference
var dynamic = "inferred string";
// hover over dynamic to see --> let dynamic: string
// Exercise 5 -  How to disable type checking in Typescript
// simply adding special data type any 
var all;
all = null;
all = "string";
all = 4515454;
/*
// Day - 26  - Typescript Tuples
          - Operations in Tuples
          - Tuples in functions
          - Readonly and Destructuring of Tuples
*/
/** ## Typescript Tuples
           - Arrays are the set of collection of similar in a general way of understanding.
*           - It is a new data type which contain minimum two or more than two values of different of data types.
*           - We define tuple by speciying the each element data type inside the array for eg: nameofTuple = [number,string,boolean];
*           - It has pre defined length and types for each index.
*
// This could be lengty process if we want to store the different data types inside the collection
var exampleTupe: number;
var exampleTyple:string;

// Tuples comes in resuce where we can makeour array more secure
// Definiing Tuples:
let namesCollection = ["Hello", true, 0.154, null]; // this is an ordinary array with different data types

// correctlydefined tuples with different data types
let ourArrays: [boolean, string, number] = [true, "This is a string", 45154];

var universeArray: [string, number, boolean];
universeArray = ["string", 454, true];

// what if I want to put it in random data types inside the universeArray
universeArray = [true, "string", 87845848]; // compile error

// error --> Type 'boolean' is not assignable to type 'string'
// assign correct data type inside the defined element data type
*/
var correctTuples;
// should have   
/* let correctTuples: [string, number, boolean];
                        |        |       |
      correctTuples = ["string", 7058, false];
 */
correctTuples = ["string", 7058, false];
// Operations in Tuples
// -- Push and Pop
/**
 * push -- add element to the tuple
 * pop -- remove the element to the tuple
 */
correctTuples.push("addingstring");
correctTuples;
correctTuples.pop();
// Update/modify the  Tuple Elements
var delTup = ['physics', 'maths', 'c', 'dl'];
delTup[0] = 'It';
console.log(delTup); // output will be  ['It', 'maths','c','dl'];
// # Tuples could be cleared but cannot be deleted or tuple variables cannot be deleted
// we can clear the fields of a type by assigning it with an empty tuple field 
var empTuple = ["Hari", "25", "Javascript"];
empTuple = [];
console.log(empTuple); // output []
// Readonly tuple 
/** - It is good practice to make our tuple readonly.
 * -Tuples only have strongly defined types for the initial values.
 *
 */
var makeTup = [822, true, "This is string"];
makeTup.push("trying to push something!"); // compile error
// getting error as --> Property 'push' does not exist on type 'readonly [number, boolean, string]'.
/**
 * If you have ever used React useState function then you might have notice we initially state the set values and types
 *   useState returns a tuple of the value and a setter function.
 *   const [mobileNumber, setmobileNumber] = useState('98245154115') is a common example.
 *  Because of the structure we know our first value in our list will be a certain value type in this case a string and the second value a function.
 */
/** Day 27  - Continure Tuples in Typescript
 *          - Typescript Exercises
 *          - Revision & Practice
*/
// # Destructuring Tuples in Typescript
/*  - Tuples are arrays so we can destruct them
    - Breaking up the structure of an entity is called destructuring
**/
var deArr = [10, "dilli", false, null];
var deb = deArr[0], dec = deArr[1];
console.log(deb);
console.log(dec);
// output will be
//  [10, "dilli", false, null]
// 10
// dilli
// Exercises
// Exercise 5 - specify the variable to unknown type
var unknow;
console.log(unknow); // could be unknown variable type
//Exercise 6 - Prevent the array from being changed 
var exaArr = ["Nochange in array", "nochange"];
console.log(exaArr);
// Exercise 7 - Tuples must have order of value types
// const tupleE = [string, number, boolean];
// const tupleE = ["string", 822, true]; // this is correct tuple form
// const tupleE = [true, "hello", 8554]; // this is wrong tuple form
// Exercise 8 -  Defining the tuples list as string number 
// let defineMe = [string, number];
// Exercise 9 - adding the correct types for the object
// assigning correct data types inside the parameters of an object
var guitarReview = {
    name: "Fender Stratocaster",
    model: "Mexican 7045",
    electric: true
};
// Exericse 10 - optional concept - specify the second propery called model as optional
// ans with adding just ? 
var mobile = {
    fullName: "iphone 13 pro Max"
};
// Exercise 11 - Enum creation with constants members
// - Create an enum called ourEnum with 7 constants(I, we , you, they, have, them, us) with default values
var ourEnum;
(function (ourEnum) {
    ourEnum[ourEnum["I"] = 0] = "I";
    ourEnum[ourEnum["love"] = 1] = "love";
    ourEnum[ourEnum["progamming"] = 2] = "progamming";
    ourEnum[ourEnum["solving"] = 3] = "solving";
    ourEnum[ourEnum["coding"] = 4] = "coding";
    ourEnum[ourEnum["reading"] = 5] = "reading";
    ourEnum[ourEnum["creating"] = 6] = "creating";
})(ourEnum || (ourEnum = {}));
//Exercose 12 - Put all the values inside the enums member by creating meaningful enum
var myGuitar;
(function (myGuitar) {
    myGuitar["name"] = "crescent";
    myGuitar["type"] = "electric";
    myGuitar[myGuitar["string"] = 6] = "string";
    myGuitar["color"] = "black";
})(myGuitar || (myGuitar = {}));
/** Day 28  - Continue Exercises with Typescript
 *          - Completed Total 30Exercsise of Ts(w3schools)
 *          - Typescript in Codecademy
 */
// Exercise 14 - Typescript Union Types
// Specify the parameter of any function can be either string or number
function anyFunc(myVar) {
    console.log("This is myVar which is either number or string ", myVar);
}
// Exercise 15  - Typescript Functions
// Create a function that returns the string with the return type explicitly defined:
function wholeYear() {
    return "I love solving the problems with my best effort!";
}
// Exercise 16 - Create a function that specifically does not return a value
function wholeSem() {
    console.log("I am learning typescript besides node js!");
}
// Exercise 17 -  Create a function with any two parameters with same type
function myFish(firstPara, secondPara) {
    return (firstPara + secondPara);
}
myFish("Javascript", "Typescript");
function anotherMe(first, second) {
    return (first + second);
}
anotherMe(822, 708);
// Exercise - 18 - Create a function with 2 parameters with same type either one is optional
function visitMe(fir, sec) {
    return (fir + sec);
}
visitMe("This is fixed string argument");
// Exercise -19 - Casting in Typescript - Cast unknown variable as a string using keyword
var tokyoMe = "This is string";
// this is type casting to any type with as keyword
console.log(tokyoMe.length);
// Exercise - 20 - Cast the "unknown" variable firstVar as a string, using bracket sign <>
var everMe = "String";
// using bracket <> string with variable to access the length property
console.log(everMe.length);
var guitarBuy = 1900;
console.log(guitarBuy.toLocaleString);
var buyAudio = "Focusrite";
console.log(buyAudio.toUpperCase);
// Exercise 20  - Private, public & protected concept exercise
// Specify that any className.property can be only be accessed within the class but that method 
// className.property() can be accessed anywhere
var demoClass = /** @class */ (function () {
    function demoClass(prName) {
        this.prName = prName;
    }
    return demoClass;
}());
// console.log() we cannot access to prName as it is private and can be only be accessed inside the class demoClass
var anotherClass = /** @class */ (function () {
    // creating public constructor for class
    function anotherClass(guest) {
        // private variable
        this.guest = "dilli";
        this.guest = guest;
    }
    // now guest is public inside the getGuest() method
    anotherClass.prototype.getGuest = function () {
        return this.guest;
    };
    return anotherClass;
}());
/** Day 29   - Continue Exercises in Typescript
 *           - Learning Typescript from Codecademy
 *           - Lessons 2 - 4 with exercises
 */
// Exercise - 21 - Typescript Basic Generics
// create a function generic type
function createPair(x, y) {
    return [x, y];
}
console.log(createPair('digital logic', 01));
function myOWn(a, b) {
    return [a, b];
}
console.log(myOWn("C-progamming", 1972));
var kindPerson = {};
var newSub = {};
var symbol = {
    sampleName: "Borax",
    expiryDate: 2025,
    illegal: false,
    spam: null
};
// Execrise - 14 -  Record
// The TypeScript Record<Keys, Type> utility type is used to construct a new type whose properties are
// Keys and values are Type. The Record type helps you create a new TypeScript type from a union type.
// Record  <string, number> is equivalent to { [key: string]: number }
var createMe = {
    okay: 200,
    bad: 404
};
var consF;
consF.thor = "string";
console.log(consF); // output must be string value
// WAP to print the dog's age following the correct data type and value
var aged = true;
var realAge = 4;
if (aged) {
    realAge = 4;
}
var dogAge = realAge * 1;
console.log("The age of Dog is ".concat(dogAge, " years old")); // output must be The age of Dog is 4 years old.
// WAP to print your number in thor variable from above interface
consF.thor = "dilli";
console.log(consF);
/** Day 30   - Continue From Lesson 3
 *           - Lesson 3 to 5 (Learning from Codecademy)
 *           - Review of Learned Lessons
*/
// ## Lesson 3 - Type Shape
// By default primitive data types is known by Typescript
/** # Type Shapes in Typescript
 *         - Typescript doesnot only knows the types but also shapes or objects
 *         - That means it can know what properties and methods does shapes have
 *         - As Javascript built in types know their properties and methods
 *         - for eg for string it will know string.length(), string.toLowerCase() method...
 */
var nickName = "dilli hang rai";
nickName.toUpperCase(); // no compile error 
nickName.run(); // compile error as there is no .run() method in string object shape
// but if you code same in Js it won't show error in JS as Js is dynamic/loosely typed language
// # Lesson - 4
/** Any
 *   - Any is special case where Typescript has no idea what data type it is
 *   - Typescript will not able to infer when variables is declared without assigning an initial value
 *   - in such situation Typescript will simply consider variable be of type any
 *   - any means it could be anything and typescript will not throw any errors.
 *
 */
var doubt; // hover over doubt which shows let doubt: any
doubt = 0;
doubt = 1;
// this means doubt is now any data type 
// Declare a variable with any data type assigning all primitive data types and compile it with no error
var random;
random = "String";
random = 822;
random = null;
random = true;
random = undefined;
random = 45.52;
// tsc compile it --(note: any type is dangerous to use in our big project. It is just like boats with many holes. )
// If I want any input or parameter of any data type or anything with no regards then we use any 
var inputId;
function getId(username) {
    inputId = 822;
    return username + " " + " 's" + inputId;
}
getId("Dilli"); //expected output will be Dilli's 822; 
// # Lesson-5  # Variable Type Annotations
/** Type Annotations:
 *         - In Javascript we just causally declare and assign values to variables
 *         - Same in Typescript if we just do that process meaning of using Ts is useless
 *         - Typescript may refer the unassigned type to any which could break our code anytime
 *         - Type anotation comes to rescue in such cases, it used alongside the variables
 *         - We use type anotation by appending a variable with a colon (:) eg: variablename: string = "String";
 */
var examAno;
var exafg;
var exfgn;
examAno = "This is the part of me!";
exafg = 8224541;
exfgn = "String"; // compile error as exfgn variable have boolean as type anotation
exfgn = true; // no error 
// Note: above all type anotations are declared explicitly and when it is compiled in Js Ts auto remove the anotations
/* # Reviews on Learned Lessons + Practice Sessions
  1. Typescript is a superset of Javascript that add types and have some added features + functionality.

  2. Type System refers to TypeScript's understanding of how our code is meant to be function:
        For eg:let examStr = "Rodong"; // hover over examStr and we let examStr: string

  3. Type interface allows us to use multiple variables to match the type of value intially assigned.
      One of the most popular and widely used functionality of Typescript, superhandy.

  4. Object Shape describes/Undestands/know the methods & properties that it contain or not.

  5. If Typescript doesnot know the type of implicit variable it will consider/assign to any.

  6. Type anotations are little pieces of code indicate the variable's type meant to be. It is always present besides the variable.
**/
// Review 1
var helloMe = "Hello from Javascript"; // this is only javascript
var hello_me = "Hello from Typescript"; // this is in typescript, Javascript won't allow this
// Review 2
var examStr = "Rodong"; // infer to type string
var gheeY = false;
// interface used for creating an object
var nuh = {
    xName: "Dilli",
    xAge: 855,
    xId: 451,
    xAddress: "Nepal"
};
// interface used for creating variable accessing interface members which is a string
var mhn;
mhn.xAddress = "Itahari-20";
// Review 4
var jumpOver = "UPPERCASE";
jumpOver.toLocaleLowerCase(); // no error
jumpOver.runover(); // compile error no such properties exists
// Review 5
var ghy; // any as no infered data type
ghy = "string";
ghy = 45145;
// var ghy: any Variable 'ghy' implicitly has an 'any' type, but a better type may be inferred from usage.
/**# The tsconfig.json file
 *            - As we all know typescript adds types to javascript regular code. It detects the syntax errors before run time.
 *            - Because of these features typescript has flexibility. It has default rules which it tries to enforce.
 *            - tsconfig.json is used, If we donot want to add default rules and make more customization telling the compiler what to run and more.
 */
/* # tsconfig.json
            - It is in json format & always placed in the root of our project so we can customize the rules and tell the compiler what
              to enforce. Let's see the example:
              {
                "compilerOptions": {
                "target": "es2017",
                "module": "commonjs",
                "strictNullChecks": true
            },
//           "include": ["**/ 
    * .ts;
"];
//        }
// Notes: tsconfig.json can be configured and customized according to project needs at the begining of project.
/**
 * #Let's understand the tsconfig.json files properties,
 *    - compilerOptions - It is a nested object that contains the rules for the Typescript Compiler to enforce.
 *       -- Inside the compilerOptions
 *           - "target", with value es2017 that means it is telling compiler to compile the ts file into ecmascript2017 versions standard of Javscript.
 *           - "module", our project will using common.js syntax to import and export modules
 *           - "strictNullChecks", telling true that means it will check strictly , variable can only have null or undefined values, if they are explicitly
 *              assigned those values.
 *
 *      - "include"
 *         - it determines what files the compiler applies the rules to, above tsconfig.json instructs the compiler should check every single file that has a.ts extension
 * # with tsconfig.json projects and team will always stays on same page with common configuration.
 * # with tsc filename.ts we can compile the Typescript file to regular Javascript.
 */
// # Lesson -6 Intro of Function in Typescript
/**    - error handling solutions to avoid undesirable effects --> throw new Error ()
 *     - Javascript often allows function to be invoked with unexpected argument types.
*/
// Example showing javascript allows function to be invoked with invalid types
function singer_song(lyrics) {
    console.log(lyrics.length);
}
singer_song(3); // output will be undefined
// create a function that prints the name of a person more than6 times passing the number as count
function nameCreate(name, count) {
    // looping
    for (i = 0; i < count; i += 1) {
        console.log("Number of count is " + "".concat(count) + " " + "".concat(name));
    }
}
nameCreate("Dilli", 6); // expecred it prints the name of person 6 times with count 6
// Create function which only execute if supplied argument is number
function printSum(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        // throwing error
        throw new Error("Both arguments must be number! You must have entered the characters or string!");
    }
    console.log(x + y, x / y);
}
//calling function
printSum(98, 6);
/** Day - 32   - Lesson 7 - 10 from Codecademy
 *             - Parameter Type Anotations
*              - Optional Parameters
               - Inferring Return Types

// # Lesson 7  - Parameter Type Annotations
                  - We use function parameters with type anotations with the same syntax as we explicitly declare in variable
                  - using colon next to the variable name like this (variableName: string) this is the benefit of using Ts
                  - It makes our code secure and avoid the code breakage

**/
// function without Parameter Type Anotations
// hover over parameter it show any data type 
function givingID(name, userID) {
    return name + userID;
}
givingID("Dilli", 822);
// Function with Parameter Type Anotations
function trip(id) {
    return id * 2;
}
function giveTrip(username, id) {
    console.log("".concat(username, ", ").concat(trip(id), "!"));
}
giveTrip("Dilli", 708); //output Dilli, 1416
/*Lesson 8 -#Optional Parameters
 *         - Typescript strictly make compulsory to all the arguments in a function
 *         - arguments must be provided value with data type but this may not be required or desirable
 *         - suppose I have function which return user address and companyNumber but it is optional to get companyNumber
 *         - for that case we need optional functionality in our code/app which is optional Parameters
 *         - with question mark syntax we can use optional features within Typescript
 */
// Function without optional parameters
function noOptional(color, hexCode) {
    return color + hexCode;
}
noOptional("black"); // compile error --Expected 2 arguments, but got 1.
// Function with optional Parameters
function getUser(status, ipAddress) {
    console.log("".concat(status) + "".concat(ipAddress));
}
getUser("online"); // see no error 
// adding ? along parameter tells Typescript that parameter is allowed to be undefined and not necessary to be provided
function student(name) {
    console.log("Hello, ".concat(name || 'Anonymous', "!"));
}
student(); //prints Hello, Anonymous
/* Lesson 9 # Default Parameters
               - if we have optional parameter then we also have default parameter (if parameter is assigned to default value)
               - default parametes is same as variable with no type assigned is infered by Typescript
               - This functionality is used if unknown/guest users enters in our system/app
               */
// Example with default parameters
function hello(name) {
    if (name === void 0) { name = 'Anonymous'; }
    console.log("Hello, ".concat(name));
}
hello(); // prints Hello Anonymous if no argument passed as default parameters is given
// note: remember it only accepts string not other argument type
// write a function with for loop having default parameter which return default parameter for more than 3 times or 1 time
function proN(status, repeat) {
    if (status === void 0) { status = "online...."; }
    if (repeat === void 0) { repeat = 0; }
    if (status = 'online', repeat != 0) {
        for (var i_1 = 0; i_1 < repeat; i_1 += 1) {
            console.log("".concat(status));
        }
    }
    else if (repeat == 0) {
        console.log('offline...');
    }
}
proN(); //output offline
proN('online..', 1); // output online print once
/** # Lesson 10    # Inferring Return Types
 *                     - Typescript can alos infer the types of values returned by functions
 *                     - It does this by looking at the types of the values after a function’s return statements.
 */
// we have created a function with string parameter which is concat with return statement
// our return statement will know that it is infered to string type till now no assiging the value
// after that function is stored in variable providing the string value inside argument of function lookup()
function lookup(guest) {
    return "THIS IS , ".concat(guest);
}
var looked = lookup('jacky is guest with string type'); // no error as string is intialized here as value
var lookeD = lookup(74848); // compile error
// VERY GOOD EXAMPLE & CHALLENGE
/* Challenge! Using what you’ve learned above, create a variable myVar with the type number. To make this more interesting:
You must not use the : character.
You must not type any numbers into your code.
You may not use functions other than the one provided in main.ts.
*/
function getRandomNumber() {
    return Math.random(); // Math.random is a built in function that generates random numbers
}
var myVariable = getRandomNumber(); // output 0.9091967502712321
/** Day - 33   - Lesson 11 - 14 from Codecademy
*              - Explicit Return Types +  Void Return Type
*              - Documenting Functions
*              - Game to Find the Real Culprit
**/
// Leeson 11 - Function with explicit return types
// We have declared variable explicitly with type we do same process with Function
function createFly(name) {
    if (name) {
        return " This is , ".concat(name, " airlines!");
    }
    return undefined; // return undefined if name is not string type 
}
// Here function is only returning string type which make our code more tighter
// Explicit Return Type can also be used in Arrow Function
var makeFly = function (airName) {
    if (airName) {
        return "This is ".concat(airName, ", Please Be Patient!");
    }
    return undefined; // return undefined if string type is not assigned
};
// Lesson 12 -  Void Return Type
/*                  - We have used explicit return type to Function which is very good practice
                    - But what if we donot know what return type will be for that we use void return type
                    - It is good practice to use void return type if those functions don't return anything
*/
// Function without void return type
// It has no returned value so we must treat them as type void
function login(year) {
    console.log("This is the year, ".concat(year));
}
// Function with void return type -- A proper type anotation of this function
function loginN(year) {
    console.log("This is void ".concat(year, "!"));
}
// Lesson 13 - Documenting Functions / Comments in Typescript 
// -------- Documentation Commments ----------
// This is single-line comment in Javascript.
/*
 This is multi-line comment in Javascript!
*/
/**
 *  This is third comment style introduced in Typescript
 *  It has new feature that it starts with double ** with backslash for mulit line comment
 *  And again always starts with * for each new line.
*/
/**
 *  It is very good practice use required comment in our code! Lol I may be the one who is using lot of comments.
 *  We place documentatino comments of functions above it's head.
 *
 * @param name: name of a person
 * @param caste: caste of a person
 * @returns the name of person `name` with caste `caste`
 * These special tags @param, @returns describe the function's parameters and returns of a function which is super handy for developers
 */
function getUserName(name, caste) {
    return "Customer Name with caste ".concat(name, " ").concat(caste);
}
/** This function returns the salad which is nothing but combination of fruits
 * @param fruit1
 * @param fruit2
 * @returns
 */
function makeFruitSalad(fruit1, fruit2) {
    var salad = fruit1 + fruit2 + fruit2 + fruit1 + fruit2 + fruit1 + fruit1;
    console.log(salad);
}
/**
 * This function prints out the result as I'm not ready... , depending upon the looping number of times provided from arguments
 * @param status is bt default not ready
 * @param repeat assigned default numeric value 1
 * @returns I'm not ready if repeat value is greater than 0
 */
function proclaim(status, repeat) {
    if (status === void 0) { status = 'not ready...'; }
    if (repeat === void 0) { repeat = 1; }
    for (var i_2 = 0; i_2 < repeat; i_2 += 1) {
        console.log("I'm ".concat(status));
    }
}
// ** Very Interesting Game --- Program that finds the Culprit with given number 1 or 2 or not
//   function useMagnifyingGlass():string{
function useMagnifyingGlass() {
    console.log('I will use my magnifying glass.');
}
useMagnifyingGlass();
function determineCulprit() {
    return Math.floor(Math.random() * 2 + 1);
}
//   function doSleuthing(numberOfClues:number, clue1:string, clue2:string, suspect1:string, suspect2:number):void{
function doSleuthing(numberOfClues, clue1, clue2, suspect1, suspect2) {
    console.log('I am a famous detective and I will solve the crime.');
    // let unnecessaryVariable = 'Why is this here?'
    // let unnecessaryVariable = useMagnifyingGlass();
    console.log('Now I consider the first clue: ', clue1);
    console.log('Now I consider the second clue: ', clue1);
    // let culpritNumber:string = determineCulprit();
    var culpritNumber = determineCulprit();
    console.log('Now, I will return to you the culprit. There but for the grace of God go we.');
    if (culpritNumber == 1 || culpritNumber == 2) {
        return (suspect1);
    }
    if (culpritNumber == 2) {
        return (suspect2);
    }
    return "I couldn't figure out who drank the priceless milk. :( :(";
}
// let answer = 3;
//   let answer = doSleuthing('2', 'The parrot heard everything!', 'All the doors and windows were shut from the INSIDE.', 'Burglar Bob', 'Saint Sam')
var answer = doSleuthing(2, 'The parrot heard everything!', 'All the doors and windows were shut from the INSIDE.', 'Burglar Bob', 'Saint Sam');
console.log('The culprit was none other than ', answer, '!');
/** Day - 34   - Review of Lessons 14 - 15
 *             - Introduction of Array in Typescript
 *             - Array Type Annotations (Explicit)
 **/
/** # Review Section **/
// 1. We use or knew how to give type anotations to function parameters.
function paramFunc(paramOne, paramTwo) {
    console.log("This is example of function with type anotations to parameters!");
}
paramFunc("Hello", "World");
// 2. Keep default values to the function parameter
function defParam(defParam) {
    if (defParam === void 0) { defParam = "Hello"; }
    return "".concat(defParam);
}
defParam();
// 3. Deal with type anotations for optional parameters with question mark symbol (param?: string)
function optPar(paraMe) {
    return "This is optBar ".concat(paraMe, " !");
}
optPar();
//  4. Void Function Return Type
function voidNo(blank) {
    console.log("This is void function return type" + "".concat(blank));
}
voidNo();
//  5. Explicitly specify return types for functions eg: return ` ${param} printed with string data type`
function hiN(juke) {
    return " ".concat(juke, " + ").concat(juke);
}
hiN("BIB NO");
/** # Lesson 14 Introduction to array in Typescript
 *         - Array-bia:
 *         - Array is simply a set or collection of similar of different primitive data types.
 *         - Array in Javascript is similar to Array in Typescript with added type of each elements inside the array
 *         - Eg: let myArray = [0,1,2,3]; // similar data type elements -numbers
 *               let mineArray = [45, "string", [true]]; // different data type elements -number,string,array inside array
 *         - with added features in Typescript it is more easier to keep track of element types in arrays.
*/
var simpleJsArray = ["Hello", "world", "This is", "string"];
var typescriptArray = ["strings", 855, true];
// create a random data type arrays
var randomArrays = ['string', 45154, 'c.ronaldo', true, null, undefined];
// create a function that detects unsimilar data types in elements of array randomArrays
function detectArray(noErr) {
    if (typeof randomArrays !== 'string') {
        console.log("There are mixed elements in our randomArrays");
    }
    return "".concat(noErr);
}
detectArray("No mixed elements or error found"); // output must be There are mixed elements in our randomArrays
var customersArray = ['Custy Stomer', 'C. Oostomar', 'C.U.S. Tomer', 3432434, 'Custo Mer', 'Custopher Ustomer', 3432435, 'Kasti Yastimeur'];
function checkCustomersArray(el) {
    console.log("Type error: ".concat(el, " should be a string!"));
}
checkCustomersArray(3432434);
checkCustomersArray(3432435);
function stringPush(val) {
    if (typeof val === 'string') {
        customersArray.push(val);
    }
}
stringPush("strings");
// Lesson 15 - Array Type Annotations
/**             - Previously we have type annotations with parameters in function but now we do same for array
 *              - Typescript provide straightforward and easy method to do so we put [] after the element type.
 *              - Eg: let egStr: string[];  // Ts expects arrays to be string type with only string elements
 *
 */
var egArrType; // expects array of string
egArrType = ["strings", "are", "seqential", "characters"];
egArrType.length; // prints the length of arrays
// # Alternative method to array type annotations
var usersA = ["all ", "Are", "Strings"]; //expects all string
// T is for type and <> is for data type like here we have written for string
/** Day - 35   - Continue of Lesson 15 - 17
 *             - Multi-Dimensional Arrays/Complex Arrays
 *             - Arrays inside the array(assigning arrays)
 *             - Tuples in Typescript
**/
// Lesson 15 Continue Array Type Annotations
//This is just like an error assignment error with primitive types.
var first_Arr = ["push another string here"];
first_Arr.push(5656); // compile error --> Argument of type 'number' is not assignable to parameter of type 'string'.
first_Arr.push("another string is pushed with no error!");
// Write four arrays with different type annotations
// Arrays:
var bestNumbers = [7, 77, 4];
var bestLunches = ['chicken soup', 'non-chicken soup'];
var bestBreakfasts = ['scrambled eggs', 'oatmeal', 'tamago kake gohan', 'any kind of soup'];
var bestBooleans = [true, false];
/** Lesson 16 - Multi-Dimensional Arrays
 *               -In previous Lesson we have only used single array with type annotaions string[]
 *               - But we can make multiple arrays with multiple type whatever we want
 *               - We can declare multidimensional arrays: arrays of array(of some type).
 *               - syntax is -  let arr: string[][] = [['strings'], ['strings2]]
 */
var multi_arr = [["array", "number", "one"], ["array", "number", "two"]]; // arrays within the string of array
var multip_Arr = [[41521, 85645.52, 48541], [41652, 5212, 68594]];
var fun_me = [[0101, 1101, 1111, 1100], [1000, 10011, 1001]]; // Octal literals are not allowed in strict mode donot use octal literals 
// Empty Arrays: string[] = [] are compatible to any data type untill it is assigned
var namingH = []; // No type errors
var minhJ = []; // No type errors
namingH.push("Pusing string");
minhJ.push(8521);
var numberMulti = [[], [], []];
// Arrays:
var bestNumberss = [7, 77, 4];
var bestLunchess = ['chicken soup', 'non-chicken soup'];
var bestBreakfastss = ['fasting', 'oatmeal', 'tamago kake gohan', 'any kind of soup'];
var bestBooleanss = [true, false];
// Multidimensional Arrays:
var bestMealPlan = [bestLunchess, bestBreakfastss, ['baked potato', 'mashed potato']];
var bestBooleansTwice = [bestBooleanss, bestBooleanss];
var numbersMulti = [[[1], [2, 3]], [[7], bestNumberss]];
// Lesson 17 - Tuples
/**              - We have assigned type anotation to arrays and also worked with multi-dimensional arrays
 *               - But Javascript arrays are flexible and can have different types of elements
 *               - Typescript only allow to define arrays with a fixed sequence of types, which we called a tuple.
 *               - Tuple strictly checks and make sure order and specific assigned type of elments are correct
 *  Tuple types specify both the lengths and the orders of compatible tuples, and will cause an error if either of these conditions are not met.
 */
var this_tuple;
this_tuple = ["hello", 4584, true];
var dynamic_tuple;
dynamic_tuple = ["string", 45154, 451545, "string are set of characters", false]; // compile error as number is assigned in place of string
dynamic_tuple = ["helloworld", "yak", 822.2251, "dolpa", false]; // see no error 
/* Tuples:
          -As far as Javascript array and Typescript tuples also act just like arrays.
          - Tuples can also access the properties/change the elements/perform methods just like arrays
          - BUT THEY CANNOT BE ASSIGNED TO A TUPLE VARIABLE, EVEN WHEN THE ELEMENTS ARE OF THE CORRECT TYPES.
          - THIS SHOWS TUPLE SOMEHOW LACK COMPATIBLES WITHIN TYPESCRIPT
 *
 */
var myTup = ["stringOne", "stringTwo"]; // tuples
var myA_r = ["this is only", "array"]; // only array
myTup = ["this is only", "array"]; // no error
myTup = myA_r; // Type 'string[]' is not assignable to type '[string, string]'.
// ARRAY CANNOT BE ASSIGNED TO A TUPLE
// Provide the correct type annotation to existing arrays
// Question - let favoriteCoordinates = [40, 43.2, 'N', 73, 59.8, 'W'];
var favoriteCoordinates = [40, 43.2, 'N', 73, 59.8, 'W'];
// Above given numbers are coordinates please change them as 40degree 43.2minutes north latitude
// and 73 degrees 59.8minutes west longitude creating new tuple
var change_Coordinates = [17, 45, 'N', 142, 30, 'E'];
change_Coordinates[6] = -6.825; // throwing error as change_Coordinates tuple has only fixed length 6 we cannot access elements of tuple with indices greater than 5
// Last time url:https://www.codecademy.com/courses/learn-typescript/lessons/typescript-arrays/exercises/tuples
/** Day 36   - Lesson 18 - 20
*            - Array Type Inference
*            - Discussions on Rest Parameters
*            - Spread Syntax
* /
 
/* Lesson 18
    #  Array Type Inference
      - Typescript can infer variables types from initial values & return statements.
      - Similarly array type is also inferred by Typescript
      - let retE = [true, false, true]; // this will be treated as boolean[] or boolean
*/
var jukeMe = [true, false, true];
jukeMe[3] = false; //allowing us to expand array -- No type error
var neJu = [true, false, false, false];
neJu[2] = true;
//tupleOfExamAnswers has fixed length of 3
var tupleOfExamAnswers = [true, false, false];
tupleOfExamAnswers[3] = true; // Type error! The tuple only has 3 elements.
// soilve this with
tupleOfExamAnswers[2] = true; // see no error
// We can use concat method .concat() method
var myTui = [822, 708, "string"];
var myTuiResult = myTui.concat(["STRING", 45154]);
// myTuiResult has the value of [822,708, "string", "STRING", 45154]; // this shows that type interference arrays Ts infers the variable as an array of numbers,not a tuple
// Don't change this part:
var dogTup = ['dog', 'brown fur', 'curly tail', 'sad eyes'];
// Your code goes here:
var myArr = 'not a dog';
// Create a arrays of string[] and concat method .concat() storing in another variable
var juIk = ["string", 45154];
var jhuke = juIk.concat(["string is another sret"]);
var powerUp = "string is not an easy!";
/* Lesson 19 #Rest Parameters
              - Assigning Types to Rest Parameters is similar to assigning types to arrays.
              - Function without correct rest parameter type will work but it is not type safe.
              - Type annotations for a rest parameter are identical to type annotations for arrays
              - syntax is (firstParam, ...firstParam: string[])
*/
// Function without Rest Parameters
function smash(firstString) {
    var otherStrings = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        otherStrings[_i - 1] = arguments[_i];
    }
    var output = firstString;
    for (var i_3 = 0; i_3 < otherStrings.length; i_3++) {
        output = output.concat(otherStrings[i_3]);
    }
    return output;
}
smash('H', 'a', 'h', 'a', 'h', 'a', 'h', 'a', '!', '!'); // returns 'Hahahahha!'.
// Function with Typed Rest Parameters
function smuh(firstString) {
    var secondStrings = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        secondStrings[_i - 1] = arguments[_i];
    }
    /** rest of function  */
}
// Make a function whose parameters must be type annotated with function gets annotations too
function addPower(p) {
    var numsToAdd = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        numsToAdd[_i - 1] = arguments[_i];
    }
    var answer = 0;
    for (var i_4 = 0; i_4 < numsToAdd.length; i_4++) {
        answer += Math.pow(numsToAdd[i_4], p);
    }
    return answer;
}
addPower("This results ", 2, 3, 4); // This results 25
/** Rest Parameter -- introduced in ES2015 OR ES2016
 *      - It is an improved way to handle function parameter which allow us to more easily handle various input as parameters in a function.\
 *      - It also allows us to represent an indefinite number of arguments as an array.
 *      - We can call functions as many times as we want no how matter how it was defined that improves the ability to handle parameter.
 *      - It stores n number of parameters as an array. Here ... is the rest parameter
 *   syntax
 *    function functionName(...restParameters){
 *                          statement;
 *             }
 */
function sumA(a, b) {
    return a + b;
}
sumA(15, 451);
//ES6 Rest Parameters
function restMe() {
    var restPar = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        restPar[_i] = arguments[_i];
    }
    var totalI = 0;
    for (var _a = 0, restPar_1 = restPar; _a < restPar_1.length; _a++) {
        var i_5 = restPar_1[_a];
        totalI += 1;
    }
    return totalI;
}
restMe(1, 2, 3); //6
restMe(4, 5, 45, 9); //63
/** Day 37 -
 *
 */
//sources: https://www.codecademy.com/courses/learn-typescript/lessons/typescript-arrays/exercises/spread-syntax
// Note: Rest parameter must be the last given argument, as it is used to collect all the remaining arguments into an array
// this is useless nor not logical code
function hey(par, fg) {
    //code
    return;
}
// function with rest parameters returning an array
function returAr(x, y) {
    var z = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        z[_i - 2] = arguments[_i];
    }
    console.log(x); // python
    console.log(y); // C and C++
    console.log(z); // ['nodejs','django','java']
}
returAr("python", "C and C++", "nodejs", "django", "java");
/**#Lesson 20   - Spread Syntax
 *                  -The spread syntax allows an array or a string to expand in the places where zero or more arguments or elements are expected.
 *
 */
var homeCoordinates = [7, 11, "is my rollnumber", 15];
var groundCoordinates = ["vowel", "sounds", 5];
// let's use variables into function as rest parameters
function firstPr() {
    var homeCoordinates = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        homeCoordinates[_i] = arguments[_i];
    }
    return "this is ".concat(homeCoordinates);
}
console.log(firstPr);
function secondPr() {
    var groundCoordinates = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        groundCoordinates[_i] = arguments[_i];
    }
    console.log(secondPr);
}
