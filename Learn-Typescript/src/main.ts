
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


const hi =  "Hello";
hi = "another Hello";

/** But we have other variables declaration right 
 * so it won't be problematic with let we can declare 
 * the changeable variable everytime we with same name
 * as want so for example: 
 * 
 */

let namaste = "greetings";
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

let myName: string = "Dilli";
myName = []


/* # Day -4 
--- Functions in Typescript
--- Making our code more explicit
--- Declaring the type of function and parameters
--- working closely with typescript rules to make our code more safer
 */

//  How do write Function in Ts?


const firstFunction = (name, age) => {
    return name + " " +  age
}

console.log(firstFunction("dilli",21));

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

 const secondFunction = (name: string, age: number) => {
    return name + " " +  age
}

console.log(secondFunction("dilli",21));

// What if we assign other data type to arguments 
// hover and we get message Argument of type 'number' is not assignable to parameter of type 'string'.
const thirdFunction = (name: string, age: number) => {
    return name + " " +  age
}

console.log(thirdFunction(45,true));

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
const getFullName = (name: string, surname: string):string => {
    return name + " " + surname;
}

console.log(getFullName("Dilli", "Hang"))


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
const user = {
    name: "Dilli" ,
    age: 23,
}

const user2 = {
    name: "Hari",
}

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
 const userA: {name: string, age: number} = {
    name: "Ram" ,
    age: 23,
}

const userB: {name: string, age:number} = {
    name: "Shyam",
}

/* each function has name and age which are string and number 
   we get error on const user2 
   -- Cannot redeclare block-scoped variable 'user2'
   -- Property 'age' is missing in type '{name: string;}' but required in type '{name: string, age:number}'


/** Remember it will be headache to repeat same code and type same as userA and userB so what we 
 * do is we user interface of Typescript
 *  */
interface User {
    name: string;
    age: number;
}

const user: User = {
    name: "Moster",
    age: 30,
}

const user2: User = {
    name: "Jack",
}

/* Now we get same error....   
   we get error on const user2 
   -- Cannot redeclare block-scoped variable 'user2'
   -- Property 'age' is missing in type '{name: string;}' but required in type '{name: string, age:number}'
**/

/** This is much important as we are desigining our software architecture right? so
 * it is important to define the REQUIRED Numbers of entities inside the interface which 
 * can cover overall the requirements needs so that it won't break apart with better communication of our codes(entity)
 * 
 */

 /** Tricks/Hack for making our interface more efficient and handy */
 /** Not all the Time we need name and age both from users so what can we do as we
  * may need age but not name and name but not age so for that Typescript has provided us 
  * best option to do with just ? mark allow us to be mandatory or not.
  */

  interface EgUser {
    name: string;
    age?: number;
}

const userAlpha: EgUser = {
    name: "Jedel",
    age: 25,
}

// Now we get type interface here const userBeta: EgUser
const userBeta: EgUser = {
    name: "Jacky",
}

// It's time to log some information on the console.
console.log(userAlpha.name);

// Ts catching the error 
// error is Property 'namee' does not exist on type 'EgUser'. Did you mean 'name'?
console.log(userAlpha.namee);


/*
 Day -6 - Interfaces Continued.........
        - Functions in Typescript + Avoiding Name Collisions of Classes & Interfaces
        - Unions in Typescript 
        - Good & Bad Practices of writing the Unions in Ts
*/

interface customUser {
    anotherName: string;
    age?: number;

    // simply this is the way to declare the functions in objects
    // with returned value type as string
    getMessage(): string;
};


// After Adding getMessage() function we are getting all errors everywhere on objects
// this is error --- Property 'getMessage' is missing in type '{ name: string; }' but required in type 'exUser'
// simply adding and returning the correct data type inside the objects we can solve this
const userX: customUser = {
    anotherName: "dilli",
    age: 23,
    getMessage() {
        return "Hello I am ";
    },
};

const userY: customUser = {
    anotherName: "Dipen",
    getMessage() {
        return "Hello I am " ;
    },
};

console.log(userY.anotherName);
// we can get the created functions
console.log(userY.getMessage());

const world: customUser = {
    anotherName: "dilli",
    getMessage() {
        return "Hello I am " ;
    },
};

// Note: Always avoid clashing of naming between interface and classes
// for eg: both are going to have same name 
Class User{}

interface User{

}

// it is best practie to give interface User as name UserInterface so
// that it will be easy to read and understand

interface UserInterface {
    name: string,
    age: number,
}

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

 let username: string = "Dilli";

//  this is the way of writing the union
// so what exactly happens here is that newusername may be string or number as
// as we have provided number 45 so it will number by default
 let newusername: string | number = 45;

//  in this errorMessage variable we have either string or null value
// be default we are setting null as value

 let errorMessage: string | null = null;

//  what if we didnot set the null 
//  IT WILL BE UNDEFINED AND VERY BAD PRACTICE TO KEEP IT
//  SO IT IS BEST PRACTICE TO KEEP ANY DATA TYPE BY DEFAULT
let errorMessages: string | null;


/**
 * Day - 7 - Continue Union in Typescript
 *         - Interfaces in Union
 *         - functions in Union 
 *         - Passing Union Type to Arrays
 */

// What is Union in Ts?
/* Union is a operator. It define a variable which can have multiple types of values.
   It can combine one or two different types of data (i.e., number, string, etc.) in a single type,
   which is called a union type. 
   Union types are a powerful way to express a variable with multiple types.
   We use pipe('|') symbol to combine two or more data types to achieve Union type.
   syntax: (type1|type2|type3|....|type-n)
   Union operator always combine the data type.
* 
*/

interface customUsers {
    firstName: string
    middleName?: string
    surName: string
}

let customerName: string = "Peter";
let customerPageNumber: string | number = "0414";

// This is competely fine to write or insert the interface inside the unions within a variables 
let customerFullName: customUsers | null = null;

/*** This One is Disaster Please donot do this! This is very bad practice It doesnot ensure the security of your code. */
let customerFullNameIs: customUsers | null | undefined | string | number | string[] | object;

//  Passing Union Type in Function Parameter
//  Down below we have passed value as parameter which holds unions of number and string
//  we have applied typeof which finds the data type of value and strictly compare the argument value
// in this way we can use unions inside the function
function display(value:(number | string)){
    if(typeof(value) === "number")
        console.log("The given value is number data type!");
    
    else if(typeof(value) === "string")
        console.log("The given value is of string data type!"); 
}

display(123);
display("this is string");

/** Passing Union Type to Arrays  */

// we can use unions declaring the arrays types as we have discussed earlier
// here firstArrayType can be string of number and string of array
let firstArrayType: number[] | string[];
let i: number;
let j: number;

firstArrayType = [0,1,2,3,4,5,6,7,8];
console.log("This is Array of Number type: ");


// we are using the for loop and we have i variale holding number datatype
// and we are looping the array of number and string with i and printing it on the console
// Examples: 
for(i = 0; i < firstArrayType.length; i++){
    console.log(firstArrayType[i]);
}

firstArrayType= ["string", "datatype", "in", "secondArray"];
console.log("This is string array");

for(j = 0; j < firstArrayType.length; j++){
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
 let firstName: string = "dilli";

  /* Eg of Implicit way to assign a Type **/
  let fullName = "Dilli Hang Rai";

  /*  In this method Typescript simply guess the type, based on the assigned value
      - that means Typescript guess the types of value which is called infer
       - This implicit method will forces Typescript to infer the value
       - Sometimes our Typescript donot properly infer the variable data type if such 
       conditions arises then it will set the type to any which disables 
       type checking.
  **/

  const json = JSON.parse("23");

  // hover over the typeof json we get any as data type
  console.log(typeof json);

 // Forcing Typescript to disable the type checking with any keyword
  let myAge: any;

  // unknown in Ts means it is not known value data type ,it can be anything
  let myAddress: unknown;

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
  const hari = "this is constant hari";
  const ram = "this is constant ram";
  console.log(hari);
  console.log(ram);

  // hovering over hari we get Cannot assign to 'hari' because it is a constant.
  hari = "this is supposed to be new hari";
  ram = "we are trying to change the constant ram";
  console.log(hari);

  // let in Typescript works similar way in javascript but hovering
  // over the variable we get any type let jackson:any
  let jackson = "jackson is 3d object";
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

  let myFirstArray: string[] | number[];
  myFirstArray = ["number system", "octal", "BCD", "radix", "base of number system"];
  myFirstArray = [0,4,8,16,24,32];

  // Revision No: 4
  /** Interfaces allows to work with entity 
   * it checks & describes the entity and its data types 
   * although it doesnot deals with implementation while classes and functions do
   */

  interface sports {
      sportName: string,
      sportNumber: number,
      sportTime? : boolean
  }

  const sportOne: sports = {
      sportName: "football",
      sportNumber: 4
  }

  const sportTwo: sports = {
      sportName: "BasketBall",
      sportTime? : true
  }

  const sportThree: sports = {
    sportName: volleyball,
    sportTime? : boolean
 }

 /**
  * Comparing above three examples 
  * what we can find out is we have used
  * interface in all three constant variables 
  * 
  * our first variable is not throwing any error because all
  * entities and data types inside in it are working super fine
  * 
  * our second variable is throwing 
  * 'sportNumber' is missing in type '{ sportName: string; sportTime: true; }' but required in type 'sports'
  *  which means entity is missing here
  * 
  * our third variable is throwing two errors
  * one is cannot find volleyball
  * 'boolean' only refers to a type, but is being used as a value here
  * these two errors shows we must declare entity with correct data type after using interfaces
  * and types are not to be used as value 
  */


  /**
   * Day - 10 - Alias in Typescript
   *          - Differences between Alias and Interfaces 
   *          - Uses of Alias/ best way to implement 
   *          - Combination of type alias and unions
   *          - Exceptional Error Reading & Handling
  */

  // Day - 10 - Alias in Typescript

  // Type Alias
  /**
   - Alias allows us to create a custom type in typescript.It gives a type a new name.
   - The processing  of creating the custom type which holds primitive and other data type is called 
   - aliasing.
   - In fact Typescript provides two ways to create custom types for our data and they are
   - Type aliases and Intefaces
   - Type alias is a just name for any type we intialize the type alias with type keyword 
    --eg: type userName = string
    - We can used to represent not only primitives but also object types, union types, tuples and intersections

    - whenever we introduce type keyowrd the alias will declare the type it stands for
    - same as variable it cannot be declared more than once time
    - it cannot inferred by typescript that means with type introduced it must provide
    - data type, unions eg: type pet = "dog" | "cats"
   */

    type petNumber = string | number;

    interface petsInterface {
        petNumber: petNumber,
        petName: string,
        petAge: number,
    }

    /** In the above we have used type inside the interface named petsInterface will hold either 
     * string or number value similarly we can use type petNumber in variable too
     */

    let myPetNumber: petNumber;

    //getting error here type myPetNumber is not assignable to boolean 
    myPetNumber = false;

    //error free as our type knows this is string which is assignable
    myPetNumber = "string";

    // type can be used as entity in interfaces which shows uniquness in interface


    /** Uses of Alias 
     * Alias is mainly used for re useable code purposes 
     * it is best to use when we are not using common interfaces in our project
     * But use this type as common entity in our project
     * 
     *  */ 

    /* for eg:  **/

    type popularSinger = string;
    
    // this is okay but using type entity could be clear and understandable
    const popularSinger : string[] = ["adrian", "narayan gopal", "asha bhusal", "tara devi", "rajesh payal rai"];

    // this will show type with string of arrays[]
    const popularSingers : popularSinger[] = ["adrian", "narayan gopal", "asha bhusal", "tara devi", "rajesh payal rai"];

    // Combination of type alias and union is best for larger project when we reached some point where we may get
    // uncertain with our code for eg: 

    type mayBePopularSinger = popularSinger | null;
    // could be used as  type mayBePopularSinger = string | null;
    // but we are combining the unions with type alias

    let newPopularSingerCollection: mayBePopularSinger  = null;

    // donot provide empty array it will throw errors --> Type 'undefined[]' is not assignable to type 'string'.
    // instead supply strings of arrays declaring that mayBePopularSinger has string of array []
    let newPopularSingers: mayBePopularSinger[]  = ["donot", "supply","empty", "arrays"];


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
     const firstString: string = "string Data type";
     const firstNumber: number = 45451211;
     const firstBoolean: boolean = true;
     const firstNull: null = null;
     const firstUndefined: undefined = undefined;

     

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

    const voidFunction = () => {
        console.log("this is void data type!");
    }

    const anotherVoidFunction = (): void => {
        console.log("This is void function ");
    }

    // examples showing the void returns undefined or nothing value
    let voidEg: void = undefined;
    voidEg = "I want to assign new value";
    // got error type 'string' is not assignable to 'void' type
    // solution will be
    voidEg = undefined;


    // 3. Any Data Type
     /** This is special data type which is superset of both User-defined and 
      *  Using this data type disable the Typescript type-checking and compile time checking
      *  this is dynamic and regarded as wrost data type (wrost based on its main feature)
      */

     // for eg: using any data type below shows that we can now do anything with our variable
     // this clearly shows Typescript has been disabled and it is loosing it's essence here 
     let arrow: any = "dilli";
     arrow = 4545;
     arrow = true;
     arrow = undefined;
     arrow = null;

    //  what the heck is .arrow() method it should have thrown error in normal case by Ts
    // but any data type means it could be any and Typescript does allow to do anything
    // this can surely brings bugs in big projects.
     console.log(arrow.arrow());


















    







  







