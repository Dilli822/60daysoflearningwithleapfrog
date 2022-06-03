import { CardMembership, Light } from "@mui/icons-material";

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
     /** This is special data type which is superset of both User-defined and Primitive Data type
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
    const neverFunctionExample = (): never => {
        throw "never";
    }


    // 2. Unknown Data Type
    /**
     *  - Introduced in Typescript version 3
        - Unknown Data type is somehow similar to any but we can only assign any and unknown(that means value)
          whose data type is not known to the unknown type so we can it is type-safety not like any which can bring
          bugs in our code so if we have to use unknown data type after it's declaration it must be precisely 
          defined with value and data type otherwise we cannot use it or access any properties.
    */

    // Example :
    let vAny: any = 708;
    let vUnknown: unknown = 822;

    let randomV: string = vAny;
    let randomUnknownV: string = vUnknown;

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


    let presentUnknownFutureKnown: unknown = 23;

    let nowWeKnowDataType: string = presentUnknownFutureKnown as string;
    //        ----> unknown  to  string data type

    // similarly can be used with any
    let pageNumberAny: any = "1";
    let pageNumberAnyT: number = pageNumberAny as number;


    let myWord: string = "one";
    let myNumbericWord: number = myWord as number;
    /* now we getting error as error --> Conversion of type 'string' to type 'number' may be a mistake because neither 
    type sufficiently overlaps with the other. If this was intentional, convert the expression to 'unknown' first.ts(2352)
    */

    /**
     *     This means first converts string to unknown and unknown to number
     * -- this process/functionality is called type assertion in typescript
     *     ------------ string -----> unknown ---> number 
     */

    let mySolveNumbericWord: number = (myWord as unknown) as number;

    // Notes:-Best Practice to use void and unknown as well as never(which is not popular) & to avoid any data type.


    
     /** Day - 13 - Working with DOM in Typescript
      *           - Accessing the Elements Properties
      *           - Making Typescript Understands HtmlElement Types 
      *           - Adding Listener to Typescript
      *           - Errors Reading , Handling & Solving
      */

     // Working with DOM in Typescript
     const oneElement = document.querySelector(".select");

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

    const twoElement = document.querySelector(".select2");
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
    console.log('oneElement', (oneElement as any).value);
    // BUT NEVER FOLLOW OR DO THIS CHANGE IT TO ANY THIS WILL BRING
    // CRACK IN CODE RATHER DO THIS BELOW

    const notGenericElement = document.querySelector(".select") as HTMLInputElement;
    const getHTMLElement = document.querySelector(".gettingValue") as HTMLImageElement;


    // This shows completely no error as HtmlInputElement does have .value method
    // that returns some value of HTMLelement
    console.log("Some are HtmlInput some are not we can access to properties with these methods ", notGenericElement.value);

    // Adding Listener to the Typescript

    const addListenerElement = document.querySelector(".listen");

    // Typescript supports the .addEventListener method which holds the two parameters
    // One parameter is event (in our case it is fade which is event name) -- fade means we try to fade it
    // then it has event function which is taking event param and logging the event and param event

    addListenerElement.addEventListener('fade', (event) =>{
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

    addListenerElement.addEventListener('fade', (event) =>{
        const target = event.target as HTMLInputElement
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
    class Books {
        name: string;
        pageNumber: string | number;
    }

    // accessing the  properties of Classes
    const books = new Books();
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
    class newBooks {
        bookName: string;
        pageNumber: string | number;

        constructor(bookName: string){
            this.bookName = bookName
        }

        bookFunction() {
            console.log("This is function from inside the Class named newBooks !");
        }
    }

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

    class Guitar {
        guitarName: string;
        guitarRate: string | number;

        constructor(guitarName: string, guitarRate: number | string){
            this.guitarName = guitarName;
            this.guitarRate = guitarRate;
        }

        getGuitar(): string {
            return this.guitarName + " " + this.guitarRate;
        }
    }

    const fullGuitar = new Guitar("gibson les paul", 1960);



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
    class Buses {
        // public busName: string;
        busName: string;
        busCode: string | number;
    }

    let Bus = new Buses();
    Bus.busName = "Sajha Yatayat";

    // 5. Private Modifiers
    class Os{
        private apple: string;
        osNumber: string | number;
        protected kernel: string;

        // protected and private can only be accessed inside the particular class.
        getOperatingSystem(): string {
            return `${this.apple} ${this.kernel}`;
        }

    }

    let OS = new Os();
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

    class collectionHistory {
        readonly historyBook: Date;
        modernBook: string;

        constructor(historyBook: Date){
            this.historyBook = historyBook;
        }
    }
    
    let oldBook = new collectionHistory(new Date(1972,05,4));

    // getting error --> Cannot assign to 'historyBook' because it is a read-only property.
    // as we have set the historyBook as readonly and is already declared as new Date(1972,05,04)
    oldBook.historyBook = new Date(1956,05,12); //getting compile error

    oldBook.modernBook = "Age of Empire";
    oldBook.modernBook = "Game of Thrones";


    /**
     * Props in a type (props --> means properties ) - readonly is also used in props 
     */

    type PI = {
        readonly PIValue: string | number;
        dynamic: string | number;
    }

    const newPI: PI = { PIValue: 3.14 };
    console.log(newPI.PIValue);

    // error --> Cannot assign to 'PIValue' because it is a read-only property.
    newPI.PIValue = "three point One Four";
    newPI.dynamic = "This is dynami vale";

    // If we want to make some property inside the class constant we can use readonly which is super handy

    class regularUser {
        firstName: string;
        lastName: string;
        readonly unchangeableName: string;

        constructor(firstName: string, lastName: string){
            // this firstName and outside firstName is different
            this.firstName = firstName;
            this.lastName = lastName;
            this.unchangeableName = firstName;
        }

        // trying the assign the value to unchangeableName
        changeUnchangeableName(): void {

            // error on compiling 
            this.unchangeableName = "Trying to change the unchangeable Name!"
        }

        getFullUserName(): string {
            return this.firstName + " " + this.lastName;
        }
    }

    const dailyUser = new regularUser("Dilli", "Hang Rai");
    console.log(dailyUser.firstName);


    /** # adding interfaces to the class 
     *  - if we want to add compulsory interface to the class then we add it 
     *  - by inserting interface directly to the class with implements keywords
        - class className interfaceName {
                   
                 }

        - implement keyword -- TypeScript will check and ensure that the object 
        actually implements all the properties and methods defined inside the interface.
     * 
     */
    interface addInterface {
        addingInteface(): string;
    }


    /* Day - 17   - Continue learning the intercept + static + class with access modifiers....
                  - inheritance in Typescript 
                  - Generics in Typescript...


    /** getting error -->Class 'mixinginterfaceExample' incorrectly implements interface 'addInterface'.
        Property 'addingInteface' is missing in type 'mixinginterfaceExample' but required in type 'addInterface'.ts(2420)
        main.ts(1272, 9): 'addingInteface' is declared here. */
    class mixinginterfaceExample implements addInterface {

    }

    // REMOVING ERROR SIMPLY BY INSERTING THE  addingInteface() method

    class validMixingInterfaceExample implements addInterface {
        addingInteface(): string{
            return "HELLO WORLD";
        }
    }


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

    class exampleStatic {
        static gValue: number | string = 9.8;
        radius: number;
    }

    // look no error
    exampleStatic.gValue;

    // look error without instance objects
    exampleStatic.radius;

    // can be solved by creating instance object with new keyword
    let anotherStatic = new exampleStatic();
    anotherStatic.radius = 8548448;

    // This shows that static members are really static in class .let's another big example:
    /**
     * Example includes class with interface , readonly, protected, public, private and static members/methods
     */

    interface checkMe {
        getFull(): string;
    }


    /** Day - 18  - ...continue concept of inheritance in Typescript 
     *            - Generics in Typescript
     *            - Generate Unique id using generics too
     *            - Using Generics with Interface
    */

    class BigBoy implements checkMe {
        boyName: string;
        boyAge: string | number;
        private boyId: number = 822;
        public boyGender: string;
        protected boyCash: number | string = "Rs. 12000";

        static readonly boyEyeColor: string = "red";

        constructor(boyName: string, boyAge: number | string){
            this.boyName = boyName;
            this.boyAge = boyAge;
        }

        getFull():string {
            // return " getFull functio returns string";
            return this.boyName + " " + this.boyAge;
        }
        
        getBoy(): string {
            return this.boyCash + " " + this.boyId;
        }
    }

    let boy = new BigBoy("Dilli", "Hang");
    boy.boyGender = "male";
    boy.boyAge = 23;
    // try to get the protected and private data 
    BigBoy.boyEyeColor;
    boy.getBoy();
    boy.getFull();

    class Admin extends BigBoy {
        private editor: string 

        setEditor(editor: string): void {
            this.editor = editor
        }

        getEditor(): string {
            return this.editor
        }
    }

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
    function sum(items: any): any []{
        return new Array().concat(items);
    }

    const numArray = sum([1,2,3,4,5]);
    const stringArray = sum(['this is ', 'a ', 'string']);

    console.log(numArray);
    console.log(stringArray);

    //Example of function with using generics
    function getMe<T>(items: T[] ): T[] {
        return new Array<T>().concat(items);
    }

    let myNumArray = getMe<number>([451,45,856]);
    let myStrArray = getMe<string>(["Hello", "World"]);

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
    const addId = <T>(obj: T) => {
        const id = Math.random().toString();
        return {
            ...obj,
            id,
        }
    }

    const userUniqueId = {
        name: "dilli",
    }

    const userResult = addId(userUniqueId);
    console.log("User Dilli has unique id --->", userResult);

    /**
     *  let's understand what is happening behind the scene
     *  we have Math.random() which generates unique numbers everytime
     * Math.random()
        0.6491192220278712
        Math.random()
        0.9413353472597261
        Math.random()
        0.3192014728573176

        .toString() method will make the number into string
        Math.random().toString()
        '0.0886374026599892'

        -- setting the js to print only first 16 digits
           Math.random().toString(16)
          '0.3e12dee113c9b'

        #Spread Operator (...) will copy the object.
    **/

    /*  const addId = <T>(obj: T) => {
        const id = Math.random().toString();
        return {
            ...obj,
            id,
        } }

    const userUniqueId = {
        name: "dilli",
    }

    const userResult = addId(userUniqueId);
    console.log("User Dilli has unique id --->", userResult);
    Hover over the addId then we get below code - which shows that generics has now understood the object type

    const addId: <{
        name: string;}>
    (obj: {
        name: string;}) => {
        name: string;
    } & {
      id: string;
    }
    */



    /* Day - 20    - Interfaces + Generics in Typescript
    *              - Setting Default  Generic Type
    *              - Reusable Generic Interface
    *              - Error Reading & Handling
    */


    /*  # Typescript Generics Interfaces
            - Like we use generics in Classes we can use generics with interfaces A generic typescript has generic type paramete list in an angle
            brackets <> 

            - syntax will be
            interface interfaceName <T> {
             // ...
            }
            - Now T type parameter will make all members visible to the Interface
    */

    interface exampleInterface<T> {

    }

    /* Typescript Generic Interface with type paramter can have one or multiple types 
      for eg: 
        interface namingInterface <A,B> {
           id: A;
           trade: B;
        }
      -  it consists of two/multiple parameters members key and value with corresponding types A and B
      - Type A and B can hold any data type and value inside the namingInterface members

    **/

    interface naming <A, B> {
        id: A;
        trade: B;
    }

    let ownName: naming <number,string> = {
        id : 708,
        trade: "Trademark"
    }

    // Holding A as number and B as string here similarly can be used with other local variables
    let otherName: naming <boolean, null> = {
        id: true,
        trade: null
    }

    const createId = <T> (obj: T) => {
        const myId = Math.random().toString(16);
        return {
            ...obj,
            myId
        };
    };

    // creating interface to use/pass in Generics Type <T> 
    interface creatingInterface {
        userName: string;
    }

    // creating a constant user which will have unique 16 characters string
    const otherUser: creatingInterface = {
        userName: "Dilli Hang Rai",
    }

    // Here calling a createId function which will have interface as Generics with parameter otherUser
    // This is also an example of explicit declarations which help to read code more easily
    /* Hover over createId to show -- > 
           const createId: <creatingInterface>(obj: creatingInterface) => creatingInterface & {
                      myId: string;
            }
    * */
    const finalOutput = createId <creatingInterface> (otherUser);
    console.log("FinalOutput is  ", finalOutput);

    // PROBLEM HERE IS CODE CAN BE BROKEN WITH ANOTHER TYPE 
    /* Now our function works as obj -->  const createId: <string>(obj: string) => string & { myId: string; } */
    const finalResult = createId <string> ("This is string ");
    console.log("FinalResult is --> ", finalResult);

    // This code can be used more secure by setting the default Generic type as <T extends object> with our function at previous stage

    const sumId = <T extends object> (obj: T) => {
        const uId = Math.random().toString(16);
        return {
            ...obj,
            uId,
        };
    };

    interface sumInterface<k> {
        name: string;
        data: k;
    }

    const namingUser: sumInterface <number> = {
        name: "Dilli",
        data: 451.10,
    }

    //getting error as -Type 'string' does not satisfy the constraint 'object'.
    const finalUser = sumId<string>("adding string"); 
    console.log("finalUser is --> ", finalUser);

    // This will satisfy our condition that satisy the setting default Generic Type as <T>
    const finalUsers = sumId<sumInterface>(namingUser);
    console.log("FinalUsers --->", finalUsers);


    //## Reusable Generics with Interface

    /** Examples of creating flexible and reuseable generic interface
     * - Here <U> is set as default genetic type
     * - These examples shows clear idea that helps us to avoid creating many interfaces repeatedly
     */
    
    interface commmonInterface<U> {
        superName: string;
        address: U;
    }

    const customUser: commmonInterface< { object: string } > = {
        superName: "Dilli",

        // this is like json object
        address: {
            object: "Itahari",
        },
    };

    let dynamicUser: commmonInterface <string [] > = {
        superName: "dilli",
        address: ["Itahari", "Sunsari", "Nepal"],
    }


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
    enum exampleEnum {

    }

    /**
     *  Initializing of Numberic Enums
     *     # Default - Numeric Enums
             - By default, enums will initialize the first value to 0 and add 1 to each additional value:
           
           # Mannual Initializing
            - But we can intialize it by giving the value of the first numeric enum and have it auto increment from that
    */

    // Default Enums
    enum defaultEnum {
        up,
        down,
        right,
        left
    }

    let currentEnum = defaultEnum.up;
    console.log(currentEnum); // check logs should be 0 
    
    // Setting Mannual Enums
    enum mannualEnum {
        up = 1,
        right = 4,
        left = 10,
        down =5,
    }

    console.log(mannualEnum.up);
    console.log(mannualEnum.down); // logs must be 4
    // It is not necessary to assign sequential values to Enum members they can have any value

    // Fully Initializtion of Numeric Enums
    enum statusCode {
        errorCode = 404,
        internalError = 500,
        myId = 822,
        success = 200,
    }

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
    enum stringEnum {
        up = "upward",
        down = "downward",
        right = "rightSide",
        left = "leftSide"
    }

    console.log(stringEnum);
    // output will be { up: 'upward', down: 'downward', right: 'rightSide', left: 'leftSide' }
    console.log(stringEnum.left);
    stringEnum['rightSide']; //return rightSide

    // Heterogeneous Enum - As name suggets they are enums type that contain both string and numeric values
    enum heteroEnum {
        status = "active",
        statusCode = 100,
        pending
    }

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
           key2: function (){
                   console.log("Key returning the function ")
           },
           //collection
           key3: ["array element1", "array element2", "array element3"],
       };

       let userObj = {
           name: "dilli",
           id: 822,
           age: 23,
       }

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

    let exampleObjects: {} = {};
    console.log(exampleObjects.toString());

    let anotherexample: { key1: number } = { key1: 450};
    console.log(anotherexample.toString());


    /** ## Typescript object -
     *  - It reprsents all values that are primitive types.
     
     * # Primitive types in Ts.
     *  - The primitive types in TypeScript are the
     *  Number, Boolean, String, Void, Null, Undefined types, and Enum types.
     *
    */


    /** Day - 23   - Brief on Index Signature in Typescript
     *             - Utility Types in Typescript
     *             - Discussion on Popular utility Types
     *             - Examples of Popular/Globally available utility Types
    */


    /*  # Index Signature: 
              -> In very simple term , index signature in Typescript is made to type objects of unknown
              structure when we only know the key and value types.

        // Syntax of Index Signature
           { [key: KeyType]: ValueType }
               |      |          |
            key---> it's type  --> value type(numbers,string)
    */

   // Examples of using index signature here
   interface nameInter {
       [key: boolean]: boolean,
       [key: number]: string,
       [key: string]: string | number | boolean, // adding union to value type
   }

   function namingFun(nameInter: string){
       return "Hello " + nameInter;
   }

   namingFun("Dilli");

   let exampleMore: nameInter = {
       "indexKey1": "string1",
       "indexKey2": "string2",
       708: "Dilli Hang ",
       822: "BIB no",
       "unionEg": false,
       true: false, 
   }

   //example of index signature
   let nameCollect: { [index: string]: number } = {}
   nameCollect.Dilli = 23;
   console.log(nameCollect);
   // output will be { Dilli: 23 }

   nameCollect.HangRai = "string"; //compile error -> Type 'string' is not assignable to type 'number'

   //Index signatures like this one can also be expressed with utility types like Record<string, number>.
   // we will now discuss about utility in typescript


   /*
    # Utility in Typescript
      - we have use type keyword to determine the data type in the previous learning right 
      - as Typescript has large number of types so sometimes we need to know the common type manipulation
      - or type which is used to facilitate common type transformations is known as UTILITY TYPES.
      - UTILITY TYPES are used to create a new type from an existing type.

      // Typescript also provide buch of globally available utilites
      // examples: Partial<Type> Required<Type> Omit<Type>
   */


    /* 
      #Partial 
        - This utility type create a new type , setting all of the properties of the given 
          argument type to optional. Takes a type as an argument.
        - It changes all the properties in an object to be optional.
    
    */

    // Interface
    interface guitar {
        model: string | number;
        name: string;
        price: string | number;
    }

    let newGuitar: guitar = {
        model: 45154,
        name: "hex",
        price: 15000
    }

    let oldGuitar: guitar = {
        model: 451,
        name: "gibson",
    }

    // error be-->Property 'price' is missing in type '{ model: number; name: string; }' but required in type 'guitar'.ts(2741)
    // 'price' is declared here.
    // error has araise because our interface always checks the members present inside it with correct data type
    // SO what if we may not need either model, name , price any properties for that utility types comes to rescue
    

    /** Day - 24 - continue Typescript Utility Types 
    *            - keyof in Typescript
    *            - revision from the start
    */

    let exampleGuitar: Partial<guitar> = {
        model: "epiphone",
        name: "gibson les paul"
    }
    // see no error even not providing price, this shows partial has made type to arguments which are optional
    exampleGuitar.model;

    /** # Required and Record Utility 
     *        --> Rewuired changes all the properties in an object to be required.
     *             It also takes a type as an argument.
     *             It changes properties in an object which must be included eventhough it is optional as ? inside the interface
     * */ 

    // for example of required utility
    
    interface Maths {
        calcus: string;
        variables: string;
        equation?: string;
    }

    // with required utility 
    let studentMaths: Required<Maths> = {
        calcus: "Very interesting",
        variables: "declare a variable",
    }

    // getting error as ---> Property 'equation' is missing in type '{ calcus: string; variables: string; }' but required in type 'Required<Maths>'.ts(2741) -- 'equation' is declared here.

    // solve error by providing the equation
    let studentMath: Required<Maths> = {
        calcus: "Very interesting",
        variables: "declare a variable",
        equation: "no equation"
    }

    // # Record utility is used to define an object type with a specific key and value type.
    // Record<string, number> is equivalent to { [key: string]: number }

    const fixedUser: Record <string, number> = {
        'Bob': 51,
        'Marley': 41
    }
    
    const errEg: Record <number, string> = {
        1: "string",
        "string": 1, // getting error as
        /** (property) "string": number
        Type '{ 1: string; string: number; }' is not assignable to type 'Record<number, string>'.
        Object literal may only specify known properties, and '"string"' does not exist in type 'Record<number, string>' **/
    }

    /** # Pick utility Type
     *            - As name suggest Pick means to pick any selected items
     *            - Like if we go to the market or store we donot buy all the items right? we only pick the required items from store, grocery or from shop
     *            - similar in programming like we pick required specific data/ object from common interface or some sort of data collection
     *      # syntax is Pick<Type, keys>
     *            - Pick removes all but the specified keys from an object type.
     *            - It creates a new type, by picking the set of properties from a given type. It takes two arguments: a type and a string or union of strings.
     */ 

    // for example
    interface constantUser {
        id: number | string,
        name: string,
        email: string,
    }

    const pickedUser: Pick <constantUser,"id" | "name"> = {
        id: 1,
        name: "dilli"
    }

    pickedUser.name;
    pickedUser.id;
    // This will create a new type with only supplied properties of id and name as pick arguments


    /**  Omit Utility Type
     *                 - This is exact opposite of pick utility type in the pick type
     *                 - we only pick the selected ones but with Omit we reject or donot include the properties
     *      # syntax will be
     *             Omit <Type, keys>
     * let's understand with example.
    **/
    interface exOmit {
        id: string | number;
        first_name: string;
        last_name: string;
        address: string;
        age: number;
    }

    const exampleOmit: Omit <exOmit, "address" | "age"> = {
        id: 708,
        first_name: "Dilli Hang",
        last_name: "Rai",
    }

    const erroromit: Omit<exOmit, "id" | "first_name" | "last_name"> = {
        age: 23,
        address: "Tarahara",
        id: 822
        // getting error as --Type '{ age: number; address: string; id: number; }' is not assignable to type 'Omit<exOmit, "id" | "first_name" | "last_name">'.
        // Object literal may only specify known properties, and 'id' does not exist in type 'Omit<exOmit, "id" | "first_name" | "last_name">
    }
    // Exclude utility type removes types from a union
    type excludeExample = number | boolean;
    const myValue : Exclude<excludeExample, number> = 15454; // error as --Type '15454' is not assignable to type 'string | boolean'.


    /** #Keyof in Typescript
     *        - It is a keyword in Typescript which is used to extract the key type from an object type
     *        - It is similar to typeof used in javascript which is very important while debugging.
     *         The keyof operator takes an object type and produces a string or numeric literal union of its keys. The following type P is the same type as “x” | “y”:
     */ 

    interface egKey {
        name: string,
        age: number
    }

    let pupil: egKey = {
        name: "harry",
        age: 22
    }


    /* Day - 25  - keyof in Typescript
                 - Typescript Exercises with examples
                 - Short explaination on Exercise
                 - source w3schools.com
    **/

   /** keyof
    *    - It is a operator which takes an object type and it is used on an object type with explicit keys
    *    - It createa a union type with those keys.
    *    - It is used to extract the key type from an object type.
    * 
    */

   type foam = {
       name: string;
       id: number;
       location: string;
   }

   type hippo = keyof foam;
   // now the hippo will be union of types "name" | "id" | "location"

   // can be used for non-primitive types
   type BooleanKeys = keyof boolean; // hover over type identifier --> "valueOf"
   type numberingKeys = keyof number; // hover over type identifier --> "toString" | "toFixed" | "toExponential" | "toPrecision" | "valueOf" | "toLocaleString"
   type SymbolKeys = keyof symbol; // "toString" | "valueOf

   // interface + function with keyof
   interface collect {
       name: string;
       founder: string;
       year: number;
   }

   function findCollect(collection: collect, details: keyof collect){
       console.log(`finding the right collection is ${details}: "${collection[details]}"`);
   }

   let finalCollect = {
       name: "smaple",
       founder: "alibaba",
       year: 1999,
   };

   findCollect(finalCollect, "name"); // it should give  finding the right collection is: "sample".

   // Exercise 1 - Typescript allows developers to add types to the javascript.

   let eam: string = "this is string"; // this feature is not allowed in Js
   let eamM = "string";

   // Exercise 2 - Javascript is loosely typed language where as typescript is not.
   eam.toLocaleLowerCase();
   eam.hike(); // this is error in typescript but no error in pure javascript file


   // Exercise 3 - Typescript allow or provide feature of configuration throught tsconfig.json file 
   // which is javascript notation format .json whereas Javascript doesnot have any config file


   // Exercise 4 - Methods to assign type/ method to type anotation in Typescript
   // one is explicitly and another is implictly

   // Explicit --> adding a type directly to our codebase
   const deer: string = "animal";
   let river: string = "source of water";

   // Implicit --> adding a type / inferred by the Typescript inference
   let dynamic = "inferred string";
   // hover over dynamic to see --> let dynamic: string

   // Exercise 5 -  How to disable type checking in Typescript
   // simply adding special data type any 

   let all: any;
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

let correctTuples: [string, number, boolean];

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
let delTup = ['physics', 'maths','c','dl'];
delTup[0] = 'It';
console.log(delTup); // output will be  ['It', 'maths','c','dl'];


// # Tuples could be cleared but cannot be deleted or tuple variables cannot be deleted
// we can clear the fields of a type by assigning it with an empty tuple field 
let empTuple = ["Hari", "25", "Javascript"];
empTuple = [];
console.log(empTuple); // output []

// Readonly tuple 
/** - It is good practice to make our tuple readonly.
 * -Tuples only have strongly defined types for the initial values.
 * 
 */

const makeTup: readonly [number, boolean, string] = [822, true, "This is string"];
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

const deArr = [10, "dilli", false, null];
const [deb,dec] = deArr;

console.log(deb);
console.log(dec);

// output will be
//  [10, "dilli", false, null]
// 10
// dilli

// Exercises
// Exercise 5 - specify the variable to unknown type
let unknow: unknown;
console.log(unknow); // could be unknown variable type

//Exercise 6 - Prevent the array from being changed 
let exaArr: readonly string[] = ["Nochange in array", "nochange"];
console.log(exaArr);


// Exercise 7 - Tuples must have order of value types

// const tupleE = [string, number, boolean];
// const tupleE = ["string", 822, true]; // this is correct tuple form
// const tupleE = [true, "hello", 8554]; // this is wrong tuple form

// Exercise 8 -  Defining the tuples list as string number 
// let defineMe = [string, number];

// Exercise 9 - adding the correct types for the object
// assigning correct data types inside the parameters of an object
const guitarReview: { name: string, model: string|number, electric: boolean} = {
    name: "Fender Stratocaster",
    model: "Mexican 7045",
    electric: true
};

// Exericse 10 - optional concept - specify the second propery called model as optional
// ans with adding just ? 
const mobile: { fullName: string, model?: string } = {
    fullName: "iphone 13 pro Max"
}

// Exercise 11 - Enum creation with constants members
// - Create an enum called ourEnum with 7 constants(I, we , you, they, have, them, us) with default values
enum ourEnum {
    I,
    love,
    progamming,
    solving,
    coding,
    reading,
    creating
}

//Exercose 12 - Put all the values inside the enums member by creating meaningful enum
enum myGuitar {
    name= "crescent",
    type = "electric",
    string = 6,
    color = "black"
}

// Exercise 13 - Creating Type alias for a string called ampType
type ampType = string;

// Exericse 14 - Create an Interface with any name with property as string
interface myPc {
    fulllName: string
}

// Important Exercise 15 - Extend the myPc interface from last exercise, and add a property myExtProp as a number:
interface extendInterface extends myPc {
    myExtProp: number
}



/** Day 28  - Continue Exercises with Typescript
 *          - Completed Total 30Exercsise of Ts(w3schools)
 *          - Typescript in Codecademy
 */

// Exercise 14 - Typescript Union Types
// Specify the parameter of any function can be either string or number

function anyFunc(myVar: string | number ){
    console.log("This is myVar which is either number or string ", myVar);
}

// Exercise 15  - Typescript Functions
// Create a function that returns the string with the return type explicitly defined:
function wholeYear(): string {
    return "I love solving the problems with my best effort!";
}

// Exercise 16 - Create a function that specifically does not return a value
function wholeSem(): void {
    console.log("I am learning typescript besides node js!");
}

// Exercise 17 -  Create a function with any two parameters with same type
function myFish(firstPara: string , secondPara: string){
    return (firstPara + secondPara);
}

myFish("Javascript", "Typescript");

function anotherMe(first: number , second: number){
    return (first + second);
}
anotherMe(822, 708);


// Exercise - 18 - Create a function with 2 parameters with same type either one is optional
function visitMe(fir: string, sec?: string){
    return (fir + sec)
}

visitMe("This is fixed string argument");

// Exercise -19 - Casting in Typescript - Cast unknown variable as a string using keyword

let tokyoMe: unknown = "This is string";
// this is type casting to any type with as keyword
console.log((tokyoMe as string).length);

// Exercise - 20 - Cast the "unknown" variable firstVar as a string, using bracket sign <>
let everMe: unknown = "String";
// using bracket <> string with variable to access the length property
console.log((<string>everMe).length);

let guitarBuy: unknown = 1900;
console.log((guitarBuy as number).toLocaleString);

let buyAudio: unknown = "Focusrite";
console.log((<string>buyAudio).toUpperCase);

// Exercise 20  - Private, public & protected concept exercise
// Specify that any className.property can be only be accessed within the class but that method 
// className.property() can be accessed anywhere

class demoClass{
    private prName: string;

    public constructor(prName: string){
        this.prName = prName;
    }
}

// console.log() we cannot access to prName as it is private and can be only be accessed inside the class demoClass
class anotherClass {
    
    // private variable
    private guest: string = "dilli";

    // creating public constructor for class
    public constructor(guest: string){
        this.guest = guest;
    }

    // now guest is public inside the getGuest() method
    public getGuest(): string {
        return this.guest;
    }
}

/** Day 29   - Continue Exercises in Typescript
 *           - Learning Typescript from Codecademy
 *           - Lessons 2 - 4 with exercises
 */

// Exercise - 21 - Typescript Basic Generics
// create a function generic type

function createPair <typeX, typeY> (x: typeX, y: typeY): [typeX, typeY] {
    return [x, y];
}
console.log(createPair<string, number> ('digital logic', 01));

function myOWn <typeA, typeB> (a: typeA, b: typeB): [typeA, typeB]{
    return [a, b];
}
console.log(myOWn<string, number> ("C-progamming", 1972));

// Exercise - 22 - Typescript Utility Types
// - Declare an object kindPerson from the Person Interface, where all the properties are optional.
// how to make the interface properties optional in a variable

interface Person {
    name: string;
    age: number;
    surname: string;
    id: string | number;
}

let kindPerson: Partial <Person> = {};

interface firstSemester {
    physics: string;
    maths: number | string;
    IT: null;
    C: string;
    DL: boolean;
}

let newSub: Partial <firstSemester> = {};

// Exercise - 13 - Required properties
// Declare an object with objectName from the interface sample where all the properites are compulsory

interface freeSample {
    sampleName: string;
    expiryDate: number;
    illegal: boolean;
    spam?: null;
}

let symbol: Required <freeSample> = {
    sampleName: "Borax",
    expiryDate: 2025,
    illegal: false,
    spam: null,
};

// Execrise - 14 -  Record
// The TypeScript Record<Keys, Type> utility type is used to construct a new type whose properties are
// Keys and values are Type. The Record type helps you create a new TypeScript type from a union type.
// Record  <string, number> is equivalent to { [key: string]: number }
const createMe: Record <string, number> = {
    okay: 200, // { key: value} key is string and value is number
    bad: 404
}


// ## Learning Typescript in Codecademy 
// source : https://www.codecademy.com/courses/learn-typescript/

/** Types:
 *       - tsc is used as typescript transcompiler (tsc is a command line that run on bash)
 *       - with tsc it will compile the ts code and create an equivalent .js file in the same directory.
 *       - after tsc command , check whether the file runs with node command or for that you must have node installed 
 *       - assume you have node js on your system with node index.js (any filename.js) it should print js output
 */

// # Lesson-2
/* # Type Interface
            - Variables that are assigned with different values throughout the program can be confusing or lead to bugs
            - Suppose if I have let firstVa; which is string but later mistakely if I use same variable with numberic value
            - then Javascript will simply parse the code it will not know or that may become problematic
            - so to solve such problem we have interface concept in Typescript
            - Interface will not allow us to reassign different values of same variable in a whole program
            - Typescript will expects the data type of the variable to match the type of the value initially assigned to it at declaration.
*/

interface collectionOf {
    thor: string;
    tom: number;
}

let consF: collectionOf;
consF.thor = "string";
console.log(consF); // output must be string value


// WAP to print the dog's age following the correct data type and value
let aged: boolean = true;
let realAge: number = 4;

if(aged){
    realAge = 4;
}

let dogAge = realAge * 1;
console.log(`The age of Dog is ${dogAge} years old`); // output must be The age of Dog is 4 years old.

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

const nickName = "dilli hang rai";
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

let doubt;  // hover over doubt which shows let doubt: any
doubt = 0;
doubt = 1;
// this means doubt is now any data type 

// Declare a variable with any data type assigning all primitive data types and compile it with no error
let random;
random = "String";
random = 822;
random = null;
random = true;
random = undefined;
random = 45.52;
// tsc compile it --(note: any type is dangerous to use in our big project. It is just like boats with many holes. )

// If I want any input or parameter of any data type or anything with no regards then we use any 
var inputId;
function getId(username:string){
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

let examAno: string; let exafg: number; let exfgn: boolean;

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
let helloMe = "Hello from Javascript"; // this is only javascript
let hello_me: string = "Hello from Typescript"; // this is in typescript, Javascript won't allow this

// Review 2
let examStr = "Rodong"; // infer to type string
let gheeY = false;



/* Day 31  - Continue Reviews of Lessons 1 - 5
 *         - More on tsconfig.json file 
 *         - Intro of Functions in Typescript 
 */
// Review 3
// hetic to have so many variable assigned with type anotations better to have common variables with common type
interface collectionMe {
    xName: string;
    xAge: number;
    xId: number;
    xAddress: string;
}

// interface used for creating an object
let nuh: collectionMe = {
    xName: "Dilli",   
    xAge: 855,
    xId: 451,
    xAddress: "Nepal"
}
// interface used for creating variable accessing interface members which is a string
let mhn: collectionMe;
mhn.xAddress = "Itahari-20";

// Review 4
let jumpOver: string = "UPPERCASE";
jumpOver.toLocaleLowerCase(); // no error
jumpOver.runover(); // compile error no such properties exists

// Review 5
var ghy; // any as no infered data type
ghy = "string";
ghy =  45145;
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
//           "include": ["**/ *.ts"]
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
function singer_song(lyrics){
    console.log(lyrics.length);
}
singer_song(3); // output will be undefined

// create a function that prints the name of a person more than6 times passing the number as count
function nameCreate(name:string, count:number){
    // looping
    for(i = 0; i < count; i+=1){
        console.log("Number of count is " +  `${count}` + " " + `${name}`);
    }
}
nameCreate("Dilli", 6); // expecred it prints the name of person 6 times with count 6

// Create function which only execute if supplied argument is number
function printSum(x,y){
    if(typeof x!== 'number' || typeof y!== 'number'){
        // throwing error
        throw new Error("Both arguments must be number! You must have entered the characters or string!")
    }
    console.log(x+y, x/y)
}
//calling function
printSum(98,6);


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
function givingID(name, userID){
    return name + userID;
}
givingID("Dilli", 822); 

// Function with Parameter Type Anotations
function trip(id:number){
    return id * 2;
}

function giveTrip(username: string, id:number){
    console.log(`${username}, ${trip(id)}!`);
}

giveTrip("Dilli", 708);  //output Dilli, 1416


/*Lesson 8 -#Optional Parameters
 *         - Typescript strictly make compulsory to all the arguments in a function 
 *         - arguments must be provided value with data type but this may not be required or desirable
 *         - suppose I have function which return user address and companyNumber but it is optional to get companyNumber
 *         - for that case we need optional functionality in our code/app which is optional Parameters
 *         - with question mark syntax we can use optional features within Typescript
 */

// Function without optional parameters
function noOptional(color: string, hexCode: number | string){
    return color + hexCode;
}
noOptional("black"); // compile error --Expected 2 arguments, but got 1.

// Function with optional Parameters
function getUser(status: string, ipAddress?: number){
    console.log(`${status}` + `${ipAddress}`);
}
getUser("online"); // see no error 

// adding ? along parameter tells Typescript that parameter is allowed to be undefined and not necessary to be provided
function student(name?:string){
    console.log(`Hello, ${name || 'Anonymous'}!`);
}
student(); //prints Hello, Anonymous


/* Lesson 9 # Default Parameters
               - if we have optional parameter then we also have default parameter (if parameter is assigned to default value)
               - default parametes is same as variable with no type assigned is infered by Typescript
               - This functionality is used if unknown/guest users enters in our system/app
               */
// Example with default parameters
function hello(name = 'Anonymous'){
    console.log(`Hello, ${name}`);
}
hello(); // prints Hello Anonymous if no argument passed as default parameters is given
// note: remember it only accepts string not other argument type

// write a function with for loop having default parameter which return default parameter for more than 3 times or 1 time
function proN(status = "online....", repeat = 0){
    if(status = 'online', repeat != 0){
        for(let i = 0; i < repeat; i += 1){
            console.log(`${status}`);
        }
    }
    else if (repeat == 0){
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
function lookup(guest: string){
    return `THIS IS , ${guest}`;
}
const looked = lookup('jacky is guest with string type'); // no error as string is intialized here as value
const lookeD = lookup(74848); // compile error

// VERY GOOD EXAMPLE & CHALLENGE
/* Challenge! Using what you’ve learned above, create a variable myVar with the type number. To make this more interesting:
You must not use the : character.
You must not type any numbers into your code.
You may not use functions other than the one provided in main.ts.
*/
function getRandomNumber(){
    return Math.random(); // Math.random is a built in function that generates random numbers
}
const myVariable = getRandomNumber(); // output 0.9091967502712321


/** Day - 33   - Lesson 11 - 14 from Codecademy
*              - Explicit Return Types +  Void Return Type
*              - Documenting Functions
*              - Game to Find the Real Culprit
**/

// Leeson 11 - Function with explicit return types
// We have declared variable explicitly with type we do same process with Function
function createFly(name?: string): string {
    if(name){
        return ` This is , ${name} airlines!`;
    }

    return undefined; // return undefined if name is not string type 
}

// Here function is only returning string type which make our code more tighter

// Explicit Return Type can also be used in Arrow Function
const makeFly = (airName?: string): string => {
    if(airName){
        return `This is ${airName}, Please Be Patient!`;
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
function login(year: number){
    console.log(`This is the year, ${year}`);
}

// Function with void return type -- A proper type anotation of this function
function loginN(year: number): void{
    console.log(`This is void ${year}!`);
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

function getUserName(name: string, caste: string): string{
    return `Customer Name with caste ${name} ${caste}`;
}


/** This function returns the salad which is nothing but combination of fruits
 * @param fruit1
 * @param fruit2
 * @returns
 */
 function makeFruitSalad(fruit1: string, fruit2: string): void {
    let salad = fruit1 + fruit2 + fruit2 + fruit1 + fruit2+ fruit1 + fruit1;
    console.log(salad);
  }
  
  
  /**
   * This function prints out the result as I'm not ready... , depending upon the looping number of times provided from arguments
   * @param status is bt default not ready
   * @param repeat assigned default numeric value 1
   * @returns I'm not ready if repeat value is greater than 0
   */
  
  function proclaim(status = 'not ready...', repeat = 1) {
    for (let i = 0; i < repeat; i += 1) {
      console.log(`I'm ${status}`);
    }
  }

// ** Very Interesting Game --- Program that finds the Culprit with given number 1 or 2 or not
//   function useMagnifyingGlass():string{
    function useMagnifyingGlass():void{
        console.log('I will use my magnifying glass.')
      }
    
      useMagnifyingGlass();
      
      function determineCulprit(){
        return Math.floor(Math.random()*2+1)
      }
    
    //   function doSleuthing(numberOfClues:number, clue1:string, clue2:string, suspect1:string, suspect2:number):void{
      function doSleuthing(numberOfClues:number, clue1:string, clue2:string, suspect1:number, suspect2:number){
        console.log('I am a famous detective and I will solve the crime.');
        // let unnecessaryVariable = 'Why is this here?'
        // let unnecessaryVariable = useMagnifyingGlass();
      
        console.log('Now I consider the first clue: ',clue1);
        console.log('Now I consider the second clue: ',clue1);
      
        // let culpritNumber:string = determineCulprit();
        let culpritNumber: number = determineCulprit();
        console.log('Now, I will return to you the culprit. There but for the grace of God go we.' );
        if(culpritNumber == 1 || culpritNumber == 2 ) {return(suspect1)}
        if(culpritNumber == 2) {return(suspect2)}
        
        return "I couldn't figure out who drank the priceless milk. :( :("
      } 

    export{}; // exporting the duplicating function doSleuthing
      
    // let answer = 3;
    //   let answer = doSleuthing('2', 'The parrot heard everything!', 'All the doors and windows were shut from the INSIDE.', 'Burglar Bob', 'Saint Sam')
    let answer = doSleuthing(2, 'The parrot heard everything!', 'All the doors and windows were shut from the INSIDE.', 'Burglar Bob', 'Saint Sam')
    console.log('The culprit was none other than ', answer, '!');



    /** Day - 34   - Review of Lessons 14 - 15
     *             - Introduction of Array in Typescript
     *             - Array Type Annotations (Explicit)
     **/
    

    /** # Review Section **/
    // 1. We use or knew how to give type anotations to function parameters.

        function paramFunc(paramOne: string, paramTwo: string){
            console.log("This is example of function with type anotations to parameters!");
        }

        paramFunc("Hello", "World");

    // 2. Keep default values to the function parameter
        function defParam(defParam = "Hello"){
            return `${defParam}`;
        }
        defParam();

    // 3. Deal with type anotations for optional parameters with question mark symbol (param?: string)
        function optPar(paraMe?: string){
            return `This is optBar ${paraMe} !`;
        }
        optPar();

    //  4. Void Function Return Type
        function voidNo(blank?: void):void{
            console.log("This is void function return type" + `${blank}`);
        }
        voidNo();

    //  5. Explicitly specify return types for functions eg: return ` ${param} printed with string data type`
        function hiN(juke: string | number){
            return ` ${juke} + ${juke}`;
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

    let simpleJsArray = ["Hello", "world", "This is", "string"];
    let typescriptArray = ["strings", 855, true];


    // create a random data type arrays
    var randomArrays = ['string', 45154, 'c.ronaldo', true, null, undefined];

    // create a function that detects unsimilar data types in elements of array randomArrays
    function detectArray(noErr){
        if(typeof randomArrays !== 'string'){
            console.log("There are mixed elements in our randomArrays");
        }
        return `${noErr}`
    }

    detectArray("No mixed elements or error found"); // output must be There are mixed elements in our randomArrays

    let customersArray = ['Custy Stomer', 'C. Oostomar', 'C.U.S. Tomer', 3432434, 'Custo Mer', 'Custopher Ustomer', 3432435, 'Kasti Yastimeur'];
    function checkCustomersArray(el:number){
        console.log(`Type error: ${el} should be a string!`);
    }
    checkCustomersArray(3432434);
    checkCustomersArray(3432435);

    function stringPush(val:string){
         if(typeof val === 'string'){
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

    let egArrType: string[]; // expects array of string
    egArrType = ["strings", "are", "seqential", "characters"];
    egArrType.length; // prints the length of arrays

    // # Alternative method to array type annotations
    let usersA: Array<string> = ["all ", "Are", "Strings"]; //expects all string
    // T is for type and <> is for data type like here we have written for string


    /** Day - 35   - Continue of Lesson 15 - 17
     *             - Multi-Dimensional Arrays/Complex Arrays
     *             - Arrays inside the array(assigning arrays)
     *             - Tuples in Typescript
    **/

   // Lesson 15 Continue Array Type Annotations
   //This is just like an error assignment error with primitive types.
   let first_Arr: string[] = ["push another string here"];
   first_Arr.push(5656); // compile error --> Argument of type 'number' is not assignable to parameter of type 'string'.
   first_Arr.push("another string is pushed with no error!");

   // Write four arrays with different type annotations
   // Arrays:
   let bestNumbers: number[] = [7,77,4];
   let bestLunches: string[] = ['chicken soup', 'non-chicken soup'];
   let bestBreakfasts: string[]= ['scrambled eggs', 'oatmeal', 'tamago kake gohan', 'any kind of soup'];
   let bestBooleans: boolean[] = [true, false];
   

   /** Lesson 16 - Multi-Dimensional Arrays
    *               -In previous Lesson we have only used single array with type annotaions string[]
    *               - But we can make multiple arrays with multiple type whatever we want
    *               - We can declare multidimensional arrays: arrays of array(of some type).
    *               - syntax is -  let arr: string[][] = [['strings'], ['strings2]]
    */
   let multi_arr: string[][] = [ ["array","number", "one"], ["array", "number", "two"] ]; // arrays within the string of array
   let multip_Arr: number[][] = [ [41521, 85645.52, 48541] , [41652, 5212, 68594] ];
   let fun_me: number[][] = [ [0101, 1101, 1111, 1100], [1000, 10011, 1001]]; // Octal literals are not allowed in strict mode donot use octal literals 

   // Empty Arrays: string[] = [] are compatible to any data type untill it is assigned
   let namingH: string[] = []; // No type errors
   let minhJ: number[] = []; // No type errors

   namingH.push("Pusing string");
   minhJ.push(8521);

   let numberMulti: string[][][] = [ [], [], [] ];
   // Arrays:
   let bestNumberss: number[] = [7,77,4];
   let bestLunchess: string[] = ['chicken soup', 'non-chicken soup'];
   let bestBreakfastss: string[]= ['fasting', 'oatmeal', 'tamago kake gohan', 'any kind of soup'];
   let bestBooleanss: boolean[] = [true, false];
   
   // Multidimensional Arrays:
   let bestMealPlan: string[][] = [bestLunchess, bestBreakfastss, ['baked potato', 'mashed potato']];
   let bestBooleansTwice: boolean[][] = [bestBooleanss, bestBooleanss];
   let numbersMulti: number[][][]= [ [[1],[2,3]], [[7],bestNumberss] ];

   // Lesson 17 - Tuples
   /**              - We have assigned type anotation to arrays and also worked with multi-dimensional arrays
    *               - But Javascript arrays are flexible and can have different types of elements
    *               - Typescript only allow to define arrays with a fixed sequence of types, which we called a tuple.
    *               - Tuple strictly checks and make sure order and specific assigned type of elments are correct
    *  Tuple types specify both the lengths and the orders of compatible tuples, and will cause an error if either of these conditions are not met.
    */

   let this_tuple: [string, number, boolean];
   this_tuple = ["hello", 4584, true];
   let dynamic_tuple: [string, string, number, string, boolean];
   dynamic_tuple = ["string", 45154, 451545, "string are set of characters", false]; // compile error as number is assigned in place of string
   dynamic_tuple = ["helloworld", "yak", 822.2251, "dolpa", false]; // see no error 


   /* Tuples:
             -As far as Javascript array and Typescript tuples also act just like arrays.
             - Tuples can also access the properties/change the elements/perform methods just like arrays
             - BUT THEY CANNOT BE ASSIGNED TO A TUPLE VARIABLE, EVEN WHEN THE ELEMENTS ARE OF THE CORRECT TYPES.
             - THIS SHOWS TUPLE SOMEHOW LACK COMPATIBLES WITHIN TYPESCRIPT
    * 
    */

    let myTup: [string, string] = ["stringOne", "stringTwo"]; // tuples
    let myA_r: string[] = ["this is only", "array"]; // only array
    myTup = ["this is only", "array"]; // no error
    myTup = myA_r; // Type 'string[]' is not assignable to type '[string, string]'.
    // ARRAY CANNOT BE ASSIGNED TO A TUPLE

    // Provide the correct type annotation to existing arrays
    // Question - let favoriteCoordinates = [40, 43.2, 'N', 73, 59.8, 'W'];
    let favoriteCoordinates: [number, number, string, number, number, string] = [40, 43.2, 'N', 73, 59.8, 'W'];

    // Above given numbers are coordinates please change them as 40degree 43.2minutes north latitude
    // and 73 degrees 59.8minutes west longitude creating new tuple
    let change_Coordinates: [number, number, string, number, number, string] = [17, 45, 'N', 142, 30, 'E'];
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
   
    let jukeMe = [true,false, true];
    jukeMe[3] = false; //allowing us to expand array -- No type error
    
    let neJu: [boolean,boolean,boolean,boolean] = [true,false,false,false];
    neJu[2] = true;
    
    //tupleOfExamAnswers has fixed length of 3
    let tupleOfExamAnswers: [boolean, boolean, boolean] = [true, false, false];
    tupleOfExamAnswers[3] = true; // Type error! The tuple only has 3 elements.
    
    // soilve this with
    tupleOfExamAnswers[2] = true; // see no error
    // We can use concat method .concat() method
    let myTui: [number,number, string] = [822,708, "string"];
    let myTuiResult = myTui.concat(["STRING", 45154]);
    // myTuiResult has the value of [822,708, "string", "STRING", 45154]; // this shows that type interference arrays Ts infers the variable as an array of numbers,not a tuple
    
    // Don't change this part:
    let dogTup: [string, string, string, string] = ['dog', 'brown fur', 'curly tail', 'sad eyes'];
    // Your code goes here:
    let myArr:string[50] = 'not a dog';

    // Create a arrays of string[] and concat method .concat() storing in another variable
    let juIk: [string,number] = ["string",45154];
    let jhuke = juIk.concat(["string is another sret"]);
    let powerUp:string[50] = "string is not an easy!";
 

    /* Lesson 19 #Rest Parameters
                  - Assigning Types to Rest Parameters is similar to assigning types to arrays.
                  - Function without correct rest parameter type will work but it is not type safe.
                  - Type annotations for a rest parameter are identical to type annotations for arrays
                  - syntax is (firstParam, ...firstParam: string[])
    */
   // Function without Rest Parameters
    function smash(firstString, ...otherStrings){
        let output = firstString;
        for(let i=0; i < otherStrings.length; i++){
            output = output.concat(otherStrings[i]);
        }
        return output;
    }
    smash('H','a','h','a','h','a','h','a','!','!'); // returns 'Hahahahha!'.
   
    // Function with Typed Rest Parameters
    function smuh(firstString, ...secondStrings: string[]){
        /** rest of function  */
    }

    // Make a function whose parameters must be type annotated with function gets annotations too
    function addPower(p:string, ...numsToAdd:number[]):number{
        let answer = 0; 
        for(let i = 0; i < numsToAdd.length; i++){
          answer += numsToAdd[i] ** p;
        }
        return answer;
      }
      addPower("This results ", 2,3,4); // This results 25

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
       function sumA(a:number, b:number){
           return  a+b;
       }
       sumA(15,451);

       //ES6 Rest Parameters
       function restMe(...restPar){
           let totalI = 0;
           for(let i of restPar){
               totalI+=1;
           }
           return totalI;
       }
       restMe(1,2,3); //6
       restMe(4,5,45,9);//63

       //sources: https://www.codecademy.com/courses/learn-typescript/lessons/typescript-arrays/exercises/spread-syntax
       
       /** Day 37   - Continue Lesson 20 - Reviews
        *           - Rest Parameters vs Spread Operators
        *           - Reviews with examples
        */

       // Note: Rest parameter must be the last given argument, as it is used to collect all the remaining arguments into an array
       // this is useless nor not logical code
       function hey(par, ...hy, fg){
           //code
           return;
       }

       // function with rest parameters returning an array
       function returAr(x:string,y:string,...z){
           console.log(x); // python
           console.log(y); // C and C++
           console.log(z); // ['nodejs','django','java']
       }
       returAr("python", "C and C++", "nodejs", "django", "java");

       /// #Lesson 20   - Spread Syntax -The spread syntax allows an array or a string to expand in the places where zero or more arguments or elements are expected.

       let homeCoordinates: [number, number, string, number] = [7,11,"is my rollnumber", 15];
       let groundCoordinates: [string,string,number] = ["vowel", "sounds", 5];

       // let's use variables into function as rest parameters
       function firstPr(...homeCoordinates){
           return `this is ${homeCoordinates}`;
       }
       console.log(firstPr);

       function secondPr(...groundCoordinates){
           console.log(secondPr);
       }

       // Create a variable with tuple type annotations 
       let huke:[string, number, boolean] [] = [["string", 454, false], ["we can store multiple strings", 5684, false]]; // can store multiple tuples
       let hjr: [string, string, number] = ["acer", "dell", 82541]; //cannot store multiple tuples 

       //Exercise from codecademy 
       function performDanceMove(moveName:string, moveReps:number, hasFlair:boolean):void{
        console.log(`I do the ${moveName} ${moveReps} times !`);
        if(hasFlair){
          console.log('I do it with flair!');
        }
      }
      
      let danceMoves: [string, number, boolean][] = [
        ['chicken beak', 4, false],
        ['wing flap', 4, false],
        ['tail feather shake', 4, false],
        ['clap', 4, false],
        ['chicken beak', 4, true],
        ['wing flap', 4, true],
        ['tail feather shake', 4, true],
        ['clap', 4, true],
      ];
      // looping the danceMoves with function performDanceMove using rest parameters
      danceMoves.forEach(move => performDanceMove(...move));

      // Reviews on Array types:

      /* 1. The type annotation for arrays:
                - syntax is let variable_name: string [] = ["String", "elements"];
                                                   |   |        |
       *                 Declaration of variabe type array   elements inside the array box
      */
       let arry: string[] = ["elementNumberOne", "elementNumberTwo"];

       /** 2. Tuples in Typescript and their type annotations
        *         - Unlike tuples allows us to store multiple data types & has fixed length 
        *         - var tuple_name: [string, number, boolean, number ] = ["alpha", 454, true, 898];
        *         - Variable Declaration  = [datatype declaration with correct order] = [assigning correct datatype with correct order]      
        */

       let tuple_ex: [string, number, string, boolean] = ["beta", 7848, "string", true];
       // can create a empty tuple and assign data types with data later
       let empty_tup = [];
       empty_tup[0] ="inserting the string";
       empty_tup[1] = 4745; //"assigning string first index and assigning number at 2nd index";

       // 3. Type Inference working mechanism with arrays and tuples
       let this_arr = ["all", "man", "are", "born", "equally"]; // hover over this_arr to see inference---> let this_arr: string[]
       let this_tup = [414, "string", true]; // hover over this_tup to see ---> let this_tup: (string | number | boolean)[]

       // 4. Rest Parameter & Spread Operator use in Typescript

       // Rest Parameter also take spread operators syntax last three dots ... but it is used as final parameter of a function.
       //All of the arguments expect the ones that are explicitly declared before the three dots passed to that function will be taken and placed in array.
        function exaRestParam(re1:string, ...restParam:string[]){
            console.log(re1);
            console.log(restParam);  // output ["param1st", "param2nd"]
        }
        exaRestParam("param1st", "param2nd", "param3rd"); 
        
        function Test(me:number,...restParam:number[]){
            console.log(me); // 1
            console.log(restParam) // [1,2]
        }
        Test(1,2,3);

        // Spread Operators does compressions and expands an iterable such as arrays where multiple arguments are needs
        // It also helps to expand the object expressions or copy the same object twice
        
        // This is also an example of destructing an object
        const yt:string[] = [4,5,6];
        function spread(j,i,k){
            console.log(j); // 4
            console.log(i); // 5
            console.log(k); // 6
        }
        spread(...yt);

        let more = [0, 21, 45];
        let moreMe = [ "string", "ch", "get"];
        
        let nMore = [...more]; // 0,21,45 // creating new array from existing array
        let nMoreMe = [...moreMe, "adding more elements"]; // string,ch,get,adding more elements
        let combined_array = [...more, ...moreMe]; // 0,21,45,string,ch,get,adding more elements

       // Codecademy sources: https://www.codecademy.com/courses/learn-typescript/lessons/typescript-arrays/exercises/review

       /** Day - 38    - Lesson 22 - 24 
        *              - Types of Type in Typescript😅
        *              - Enums(Complex Type) with example
        *              - String Enums vs Numeric Enums 
        */

       // Lesson 22 - Introduction of Custom Types
       /**                There are two types of type in Typescript.
        *                        1. Pre-defined/Primitive Types
        *                        2. Custom Types
        *  -Typescript gives us power to use create custom type rather then staying in limited pre-defined types.
        *  -Custom types are fun and useful because they enable type checking according to our exact purposes.
        * - Previously we already studied and written code on custom types: tuple
        *    Pre-defined                  VS       Custom Types
        *  - It's like ingredients.              - Combination of custom types.
        * Eg: only bread, tomato, onion, cheese  - Simple burger having onion+bread+tomato+cheese
        */
       // Eg of Complex Types
       let myType: coTy; 
       function testTy(param: coTy): returnedType{
           // code here
       }
       let storeFun = testTy(myType);

        // Lesson 23 - Enums(Complex Type)
        /**            - One of the most useful & popular complex types is enums which is used to enumerate all 
         *                 the possible values that a variable could have.
         *             - TYPE STRING CAN HAVE ANY STRING AS VALUE AND INFINETLY MANY POSSIBLE STRINGS let varaible = "infinte strings.....";
         *             - SIMILAR boolean[] TYPE CAN HAVE ANY ARRAY OF BOOLEAN AS ITS VALUE AGAIN, POSSIBILITES ARE INFINITE. let boh: boolean[] = [true,false,true,....]
         *   // WHAT IF WE WANT TO HAVE LIMITED NUMBER OF POSSIBLE VALUES OF A VARIABLE?
         *  // For that enum comes in resuce suppose I have Direction varibale which should have only North, South, East, West value.
         */

        enum Direction{
            North, South, East, West
        }
        let showW: Direction.North; // no error as it exists inside the Direction as variable value
        // Any other values beside birth, death are not allowed and this is law of nature
        enum Cycle{
            Birth, Death
        }

        let showE: Cycle; // Enum can used in type annotation like any other type - let ayrt: string[];
        showE.reincarnation; //hover over---> type Cycle.reincarnation = /*unresolved*/ any , Namespace 'Cycle' has no exported member 'reincarnation'.

        // How Typescript understands the enum types using number?
        /**    The member of enum or enum values are always assigned numberical value in ascending listed order.
         *     enum Direction members North, South, East, West are equal to 0, 1, 2, and 3 , respectively by default.
         *   - like Direction enum North is assigned to a number of 0 and ascending order so now. Let's see examples
         */
        showW == 0; // true no error
        showW == 1; // see error -- This condition will always return 'false' since the types 'Direction.North' and '1' have no overlap.

        showW = 2; // see no error 
        showW = 4; // see no error # Remeber we are not comparing but assigning the number value which doesnot araise error.

        // We can also change the starting number by giving custom number value and enum will automate the ordering value
        enum DirectionT {
            North = 7,
            South,  // equals to 8
            East,   // equals to 9
            West   // equals to 10
        }

        // More customizing on enum ordering
        enum DirectionC {
            North = 9,
            South = 4,
            East = 1,
            West = 3
        }

        // Very Good Practical Example comparing mashup code and refixing the code functionality
        let petOnSale = 'chinchilla';
        let ordersArray = [
            ['rat', 2], 
            ['chinchilla', 1], 
            ['hamster', 2], 
            ['chinchilla', 50]
        ];
        // Write your code below:
        // what if someone writes Ox on petOnSale , as Ox or any animals which is not sold by pet shop can bring error in code
        // so for that we are writing the small app for pet shop having limited supply. let's list down the animals names
        let petOnSale = "ox";
        enum Pet {
            Hamster,
            Rat,
            Chinchilla,
            Tarantula
        }
        // reassigning the enum with correct value
        let petOnSaleTs: Pet = Pet.Chinchilla;
        // suppose pet shop doesnot have 50 chinchilla so someone has ordered 50 chinchilla let's fix this
        // replace the ordersArray with enum Pet members
        // [<pet name string>, <number ordered>]

        let petOnSale = 'chinchilla';
        let ordersArray = [
            ['rat', 2], 
            ['chinchilla', 1], 
            ['hamster', 2], 
            ['chinchilla', 50]
        ];

        // https://www.codecademy.com/courses/learn-typescript/lessons/typescript-custom-types/exercises/enums

        /** Day 39    - Lesson 24 - 26
        *             - String Enums vs Numeric Enums
        *             - Object Types
        *             - Type Aliases
        * 
        */
        // Write your code below:
        enum Pet {
            Hamster,
            Rat,
            Chinchilla,
            Tarantula
        }
        const petOnSaleTS : Pet = Pet.Chinchilla;
        const ordersArrayTS : [Pet, number][] = [
            [Pet.Rat, 2],
            [Pet.Chinchilla, 1],
            [Pet.Hamster, 2],
            [Pet.Chinchilla, 50]
        ]
        ordersArrayTS.push([Pet.Jerboa, 3]);

        // Lesson 24  - String Enums vs Numeric Enums
        /**                - Enums are referred to as numeric enums since they are based on number.
         *                 - But no worries Typescript allows us to use enums based on string referred to as string enums.
         * #syntax
         *   enum DirectionNumber { North, South, East, West }
         *   enum DirectionString { North = 'NORTH', South = 'SOUTH', East = 'EAST', West = 'WEST' }
        */

        enum this_is_number {
            North, South, East, West
        }
        enum this_is_string {
            North = 'NORTH', South = 'SOUTH', East = 'EAST', West = 'WEST' // must write the string explicitly as North = 'NORTH' is a valid value definition
        }
        // It is good practice to keep enums type member string value in capitalized form of the variable name as variable_name = "VARIBALE_NAME"
        // This will help us in debugging, error messages and logs will be much more informative

        let example_num: this_is_number;
        example_num = 2;
        example_num = 415451414; // assigning arbitary numbers  see no error 

        let my_StrName: this_is_string;
        my_StrName = 'aribitary string '; // error as Type '"  *&&&$ aribitary string';"' is not assignable to type 'this_is_string'
        my_StrName = this_is_string.East; // .South, .East, .West are the only allowable way to do this.

        let petOnSale = 'chinchilla';
        let ordersArray = [
            ['rat', 2], 
            ['chinchilla', 1], 
            ['hamster', 2], 
            ['chinchilla', 50]
        ];
        
        // Write your code below:
        enum Pet {
            Hamster = "HAMSTER",
            Rat = "RAT",
            Chinchilla = "CHINCHILLA",
            Tarantula = "TARANTULA"
        }
        // creating type safe variable
        const petOnSaleTS: Pet = Pet.Chinchilla;
        const ordersArrayTS: [Pet, number][] = [
            [Pet.Rat, 2], 
            [Pet.Chinchilla, 1], 
            [Pet.Hamster, 2], 
            [Pet.Chinchilla, 50]
        ]
        ordersArrayTS.push(['HAMSTER', 1]); // obviously this is error we are not allowed to perform this with string enum

        // Lesson 25 - Object Types
        /**              - In this lesson we will discuss on object-oriented programming and how it relates to Typescript.
         *               - Object Types are extermely useful as they allow us extremely fine-level control over variable types in our program
         *               - They also falls in most common CUSTOM TYPES so I think it is easy to understand and read them.
         *    #Type annotation for an object : let variable_name: {key: type, key: type } // quite similar to object literal but this is not
         *    Instead of direct values apperanec after properties we have types . let variable_name: { name: string, age: number }
         */
        // examples
        let xPerson: { name:string, age:number };
        xPerson = {name: 'Peter' , age: 21 };
        const yPerson: {name: string, id: number | string } = { name: 'Jackson', id: 708 }
        xPerson = {name: 'PeterTY', age: 25 }; /// see no on double assigning the values to key with correct types
        xPerson = {name: 'PeterTY', old: 25}; // see error as old property doesnot exist in xPerson Variable

        // Typescript places no restrictions on the types of an object's properties they can be enums,arrays,and even other object types.
        let myCompany: {
            companyName: stringEnum,
            leader: {name: string, age: number, experience: string | number },
            teams: {name: string, address: string } [], // storing as array
            client: string[],
            total_revenue: number
        }

        // This is just introduction part of Object Types Yet let's do an example.
        // function will have object types within parameter
        function sayHappyBirthdayWithObject(personObject: {name:string, age:number, giftWish: string, success: boolean}){
            let output ='';
            output += 'Happy Birthday ' + personObject.name + '! ';
            output += 'You are now ' + personObject.age + ' years old! ';
            output += 'Your birthday wish was to receive ' + personObject.giftWish + '. And guess what? You will ';
            if (!personObject.success){
                output += 'not ';
            }
            output += 'receive it! \n';
            console.log(output);
            }

        // assigning object types with the variable in the form array[]
        let birthdayBabies: {name: string, age: number, giftWish: string, success: boolean}[] = [
            {name: 'Liam', age: 0, giftWish: 'karate skills', success: false}, 
            {name: 'Olivia', age: 0, giftWish: 'a bright future', success:true}, 
            {name: 'Ava', age: 0, giftWish: '$0.25', success:true}
        ]; 
        birthdayBabies.forEach(sayHappyBirthdayWithObject);// print the output it is quite interesting program

        // https://www.codecademy.com/courses/learn-typescript/lessons/typescript-custom-types/exercises/type-aliases
        
        /** DAY - 40     - Continue Lesson 26 - 28
         *               - Type Aliases with Examples
         *               - Function Types
         *               - Generic Types
         */

        // Lesson 26  - Type Aliases
        /**               - When it comes to customization in our program, type aliases is always preferred. This could be alternative type names that we choose for convenience.
         *                - Format is - type <alias name> = <type>; , we use type keyword withvarialeName and define the data type. 
         *   # Where to use Type Aliases?
         *     - It is truly useful for referring to complicated types that need to be repeated especially object types and tuple types.
         * 
        */
        type stringMine = string;
        let anTy: stringMine = "This is string! Hi from okland"; // valid code 

        // Let's understand with an example
        let thiCompany: {
            companyName: string,
            boss: {name: string, age: number },
            employees: { name: string, age: number }[],
            employeeofTheMonth: { name: string, age: number },
            moneyEarned: number
        }
        // Above code has so many repetitions of string and number object types which can be cleaned with type aliases
        // Let's make our code more cleaner and readable using type aliases
        type People = { name: string, age: number };
        let TiCompany: {
            companyName: string,
            boss: People;
            employees: People[],
            employeeofTheMonth: People,
            moneyEarned: number
        }

        type thiStri = string; // type aliases are just names and have on influence over how types work. 
        type yoStr = string;
        let firstStr: thiStri = "test is string";
        let secondStr: yoStr = firstStr; // Here thisStri and yoStr are just alternative names for the same thing.

        // Change the following code into type aliases
        // Add your type alias below:
        type Coord =  [number, number, string, number, number, string];
        // let codecademyCoordinates: [number, number, string, number, number, string] = [40, 43.2, 'N', 73, 59.8, 'W'];
        // let bermudaTCoordinates: [number, number, string, number, number, string] = [25, 0 , 'N' , 71, 0, 'W'];
        let codecademyCoordinates: Coord = [40, 43.2, 'N', 73, 59.8, 'W']; // see we have wrote more cleaner and readable code
        let bermudaTCoordinates: Coord = [25, 0 , 'N' , 71, 0, 'W'];
        let myHouseCoordindate: Coord = [45, 85, 'E', 13, 85, 'W'];

        // Lesson 27 - Function Types
        /**                - One of most unique and clean feature of Javascript is that function can be assigned to variables.
        *                  - With Typescript added feature we can control the kinds of functions assignable to a variable.
        */
       // Example of function type that is only compatible with functions that take in two string arguments and return a number.
       type StringsToNumberFunction = (arg0: string, arg1: string) => number; // type aliases declared with function that returns number 

       // storing the function inside the meroFunc variable
       let meroFunc: StringsToNumberFunction;
       meroFunc = function (firstName: string, lastName: string){
           return firstName.length + lastName.length;
       };

       meroFunc = function(firstParam: string, secondParam: string){
           return firstParam.length - secondParam.length;
       }

       meroFunc("tYPE ALIASES", "IS VERY INTERESTING"); // no error as long as arguments are strings.

    //    type StringsToNumberFunction = (string) => number;
    //    type StringToNumberFunction = arg;
    //    string => number; 
    // Math Operations function for add, subtract, multiply, divide, wrongAdd
    function add(a, b){return a+b }
    function subtract(a, b){return a-b }
    function multiply(a, b){return a*b}
    function divide(a, b){return a/b}
    function wrongAdd(a, b){return (a+b)+''}
    
    // Add your function type below: we have type aliases assigned with function which have parameters as number and function itself it type number
    type OperatorFunction = (a:number, b:number) => number;
    
    // Math Tutor Function That Accepts a Callback
    function mathTutor(operationCallback: OperatorFunction) {
      console.log("Let's learn how to", operationCallback.name,'!');
      let value25 = operationCallback(2,5);
      console.log('When we', operationCallback.name, '2 and 5, we get', value25, '.');
      console.log('When we', operationCallback.name, value25, 'and 7, we get', operationCallback(value25,7), '.');
      console.log('Now fill out this worksheet.');
    }
    
    // Call your functions below:
    // mathTutor(multiply); // Let's learn how to multiply ! When we multiply 2 and 5, we get 10 . When we multiply 10 and 7, we get 70 .Now fill out this worksheet.
    // mathTutor(wrongAdd);


    /** Day -41    - Lesson 28 - Reviews
     *             - Generics Types
     *             - Generic Functions
     *             - Reviews
     * continured from - https://www.codecademy.com/courses/learn-typescript/lessons/typescript-custom-types/exercises/generic-types */
    // Lesson 28 -  Generics Types
    /**                - Typescript's generics are ways to create collections of types (typed functions, and more)
     *                 - They share certain formal similarities.
     *                 - The collections of types we created are parametrized by one or more type variables.
     *       syntax is Array<T> - captial T denotes the data type 
     *                  - We can replace the big T with any custom or pre-defined type for eg: Array<string> is an array of strings. 
    **/
    type Friends<T> = {
        boys: [T, T], girl: T, kids: T[]
    };

    // type Friends<string> is exactly same as the object type by setting T to string our generics type with object will be
    let myGh: Friends<string> = {
        boys: ['dilli', 'bob'], // ['dilli', 'bob', bob'], donot do this it will throw error
        girl: 'gauthali',
        kids: ['nami', 'robin'],
    }
    // see Friends T is replaced by boolean type
    let myT: Friends<boolean> = {
        boys: [false, true],
        girl: false,
        kids: [true, true]
    }

    // that means T can be replaced by defined data type and T inside the <> represents generic types in typescript
    // we can use another any captial letter, T is just a convention use S or GenericType
    type Guitars<S> = {
        name: S,
        brands: [S, S]
    };

    let yu: Guitars<string> = {
        name: 'lespaul',
        brands: ['epiphone','gibson']
    }

    type Human = {name: string, job: string};
    type Dog = {name: string, tailWagSpeed: number};
    type Family<T> = {
        parents: [T, T], mate: T, children: T[]
    };
    //Do not change the code above this line.

    //Provide type annotations for the variables below:
    let theFamily: Family<number> = {
        parents: [3, 4], mate: 9, children: [5, 30, 121]
    };
    let someFamily: Family<boolean> = {
        parents: [true, true], mate: false, 
        children: [false, false, true, true]
    };
    let aFamily: Family<Human> = {
        parents: [
            {name: 'Mom', job: 'software engineer'},
            {name: 'Dad', job: 'coding engineer'}
        ],
        mate: {name: 'Matesky', job: 'engineering coder'},
        children: [{name: 'Babesky', job: 'none'}]
    };
    let anotherFamily: Family<Dog> = {
        parents: [
            {name:'Momo', tailWagSpeed: 3},
            {name:'Dado', tailWagSpeed: 100}
        ],
        mate: {name:'Cheems', tailWagSpeed: 7},
        children: [
            {name: 'Puppin', tailWagSpeed: 0.001},
            {name: 'Puppenaut', tailWagSpeed: 0.0001},
            {name: 'Puppenator', tailWagSpeed: 0.01}
        ]
    };
    // From above code we know that <> may always possess dynamic assigned data type

    // Lesson 29 - Generic Functions
    /**             - As mentioned earlier we can use generics to create a COLLECTION OF TYPED FUNCTIONS.
     *              - Let's see example of function that returns arrays filled with a certain value.
     */

    // This function will return a array filled value right but it will show error if we try to specify the function's return type
    // function fillingArray(value, n){
    //     return Array(n).fill(value);
    // }
    // pass fillingArray('hello', 2); // output must be ['hello','hello']

    // Example of using generics type with functions
    function fillingArray<T> (value: T, n: number): T[] {
        return Array(n).fill(value);
    }
    fillingArray<string>('Hello', 2);
    // Typescript generics is telling the functions return type is string this is less prone to errors.

    // or we could do this simply.
    function anotherFilling(value: string, n: number): string[] {
        return Array(n).fill(value);
    }
    // It has defect which is this function now cannot be return as number or other data type as like in generic type<T>
    // Use the function getFilledArray<T>() to assign values to the variables stringArray, numberArray, personArray, and coordinateArray.

    // Write your code so that:
    
    // Each value should be an array of 6 elements.
    // All elements in stringArray should equal 'hi'.
    // All elements in numberArray should equal 9.
    // All elements in personArray should equal {name: 'J. Dean', age: 24}.
    // All elements in coordinateArray should equal [3,4].
    // Don’t forget to specify the value of T!
    function getFilledArray<T>(value: T, n: number): T[] {
        return Array(n).fill(value);
      }
      
      let stringArrayT: string[];
      let numberArray: number[];
      let personArray: {name: string, age: number}[];
      let coordinateArray: [number, number][];
      
      // Write your code below:
      stringArrayT = getFilledArray<string>('hi', 6); 
      numberArray = getFilledArray<number>(9, 6); 
      personArray = getFilledArray<{name: string, age: number}>(
        {name: 'J. Dean', age: 24}, 6
      );
      coordinateArray = getFilledArray<[number, number]>([3,4], 6); 
      

      /** https://www.codecademy.com/courses/learn-typescript/lessons/typescript-custom-types/exercises/review
       * Day 42 -      - Short Reviews
       *               - Lesson 30 - 32
       *               - Intro of Union Types
       *               - Defining Unions
       */
      // Reviews
      /*    1. We have learned custom types in typescript which is very useful and importants
            2. We are now not limited to pre-defined types.
            3. Enums (noth string and numeric types )
            4. object types(OOP)
            5. Function types
       */
    // Lesson 30 - Introduciton of Union
    /*               - Typescript lets us type variables with different levels of type specificity.
                     - We can use type string , number, boolean by specifying them or providing annotation.
     *               - What if I want to print the user's id which can be string or number or both.
                     - we have special type declaration keyword any which allow any type or anything to be assigned
     */

     let userID: any = 7484487;
     console.log(userID);
     userID = "708-A";
     console.log(userID);
     console.log(userID = true); 
     // see we have assigned userID as number,string even as boolean with any 
     // BUT USING ANY IS NOT GOOD PRACTICE AS IT DISABLE TYPESCRIPT MAIN WORK OR TYPE CHECKING WHICH CAN LEAD TO BUGGY PROGRAMS & ERROS
     // To solve above program Typescript allows us to be flexible with how specific our types are by combining different types which we called union.
     // Union means unity in general terms/concept similar in typescript union of types .ie. variable can be string,number,boolean with union

     let my_ID: string | number; // allow us to define multiple type members separated by vertical line character | 
     my_ID = 708;
     my_ID = "E-708"; // re-using the program here
     console.log(`Id is ${my_ID}`); 

     let my_Age: string | number; // more flexible & safer than any
     my_Age = "twenty-three";
     console.log(`My age in string is ${my_Age}`);
     my_Age = 23;
     console.log(`My age in number is ${my_Age}`);

     // #Lesson 31 -  Defining Union with examples
     // Unions can be used as our required anywhere a type value, even inside the functino parameters
     function myRaceTime(time: string | number ){
        return { 'fullTime': time}
     }
     myRaceTime(156);
     myRaceTime("156seconds");
     myRaceTime(200); // SUPER useful as function often need to handle the input type 

     function printNumsAndStrings(statement:string | number) {
        console.log(`ℹ️ LOG:: ${statement}`);
      }
      
      printNumsAndStrings(23); // o/p LOG: 23
      printNumsAndStrings('two-three'); // o/p two-three

      // Lesson 32 -  Type Narrowing
      /**                - What if I want a function that takes param as union types and performs specific tasks for particular type
       *                 - For that we have type guard, type guard is a conditional that checks if a variable is a certain type 
       *                 - type guard (typeof parameterName == data)
      */

      function hubID(param: string | number ){
          // param may be string or number let's say if it is string then print it as hubID is now string
          // with type guard and === comparison operator it strictly checks data type and data value
          if(typeof param === 'string'){
              return ` hub is currently in ${param} state and !` + param.toUpperCase();
          }
          return `hub is currently in ${param} state`;
      }

      hubID("string"); // o/p must be hub is currently in string state and STRING
      hubID(659);
      // what has happend with return ` hub is currently in ${param} state and !` + param.toUpperCase(); is that it can perform the methods of string

     function exampleErrhub(par: boolean | number ){
         if(typeof par === 'number'){
             return par.toExponential();
         }
         return par.toExponential(); // see error as .toExponential() method doesnot exist outside the number methods
         // what is happening is that par is now no more number type and our function is not accepting the toExponential method
         // And this concept is called typeNarrowing in Ts
     }
     exampleErrhub(855);

     function htY(yt: string | number ){
         if(typeof yt === 'number'){
             return yt.toString();
         }
         else if(typeof yt === 'string'){
             return yt.slice();
         }
     }

     htY(9654);
     htY("I am tired now!");

     //https://www.codecademy.com/courses/learn-typescript/lessons/union-types/exercises/type-narrowing
     /** Day - 43   - Contiue Lesson 32 - 34
      *             - Type narrowing examples
      *             - Inferred Union Return Types
      *             - Unions and Arrays   
      */

      function formatValue(value: string | number) {
        // Write your code here
        if(typeof value === 'string'){
          console.log(value.toLowerCase());
        }
        else if(typeof value === 'number'){
          console.log(value.toFixed(2))
        }
      
      }
      
      formatValue('Hiya');
      formatValue(2);

      /// lesson 34  - Inferred Union Return Types
      /**                - One of the awesome things about Typescript is that it's able to infer types in many cases 
       *                 - It auotmate the return type of functions by looking at the contents of function
       *                 - If there are multiple possible return types it will infer the return type as a union.
       *     Take an example below which is inferred return type
       */
      function getGuitarFromStore(){
          return 'This is guitar';
      }

      function getGuitars(){
          try{
              return getGuitarFromStore();
          }
          catch(error){
              return ` Something went error${error}`;
          }
      }

      // IF this function is sucessful it will return string function getGuitarFromStore
      // if call function fails it will return string defining error message
      type Usery = {
        id: number;
        username: string;
      };
      
      function createUser() {
        const randomChance = Math.random() >= 0.5;
      
        if (randomChance) {
          return { id: 1, username: 'nikko' };
        } else {
          return 'Could not create a user.';
        }
      }
      let userDatas: Usery|string = createUser();

      // Lesson 35 - UNions and Arrays
      /**             - They became more powerful when used in combination with arrays.
       *              - Unions helps to create array of different types inside the parenthesis which helps in more customization.
       *              - SYNTAX CAN BE (string | number ) []
       *              - It supports multiple types for an array's values, wrap the union in Parentheses
       */
      // Examples
       const dateNumber = new Date().getTime(); // returns a number
       const dateString = new Date().toString(); // returns a string
        
       const timesList: (string | number)[] = [dateNumber, dateString];

       function formatListings(listings: (string | number)[]) {
        return listings.map((listing) => {
          if (typeof listing === 'string') {
            return listing.toUpperCase();
          }
      
          if (typeof listing === 'number') {
            return `$${listing.toLocaleString()}`;
          }
        });
      }
      
      const result = formatListings([
        '123 Main St',
        226800,
        '580 Broadway Apt 4a',
        337900,
      ]);
      
      console.log(result);

      //https://www.codecademy.com/courses/learn-typescript/lessons/union-types/exercises/unions-and-arrays

      /** Day-44      - Continue Lesson 35 - 38 
       *              - Common Key Value Pair
       *              - Union with Literal Types
       */

      // Lesson 36 - Intro to Common key value Pairs,
      /**              - Putting type members in union like this const variableName: type1 | type2 = value;
       *               - suppose type1 is string and type2 is number now we can access all the methods and properties of number and string data type only.
       * 
       */
      const collegeStatus: boolean | number = false;

      collegeStatus.toString(); // No Typescript error
      collegeStatus.toFixed(); // Typescript error see Property 'toFixed' does not exist on type 'false'.
      collegeStatus.valueOf();

      const studentStatus: string | number; // since studentStatus can be string or number Typescript will allow us to call methods of those data types
      const funGhoust: undefined | null;

      // Same rule applies to type objects that we defined above:
      
      type Marvel = {
          isFamous: boolean;
          isWorldWide: boolean;
          isAuthorAlive: boolean;
          isComedy: boolean;
      }

      type Pixabay = {
          isFamous: boolean;
          isCartoon: boolean;
      }

      const bothExamples: Marvel | Pixabay = { isFamous: true };

      console.log(bothExamples.isFamous); // no error
      console.log(bothExamples.isCartoon); // error as --> Property 'isCartoon' does not exist on type 'Marvel'.

      // we can call isFamous from anywhere with bothExamples whichis variable but we cannot call isCartoon as it is only property in Pixabay 
      
      // there are two union types Like and Share same as key value pair
      type Like = {
        username: string;
        displayName: string;
      };
      
      type Share = {
        username: string;
        displayName: string;
      };
      
      function getFriendNameFromEvent(event: Like | Share) {
        return event.displayName || event.username;
      }

      // initializing the union types inside the variableName newEvent
      
      const newEvent: Like | Share = {
        username: 'vkrauss',
        displayName: 'Veronica Krauss',
      };
      
      const friendName = getFriendNameFromEvent(newEvent);
      console.log(`You have an update from ${friendName}.`); // O/P You have an update from Veronica Krauss.

      // Lesson 37 - Unions with Literal Types
      /**           - Literal types can be used with Typescript unions.
       *            - Literal type unions are useful when we want to create distinct states within a program
       * 
       */

      type Lights = 'violet' | 'indigo' | 'red';

      function collectionLights(_lights: Lights){
          // .. logics here
          // we can specify about the states that is not valid stoplight color.
      }

      function offLights(virgo_name: Lights){
          // this technique allows us to write functions that are specific about the states they can handle
          // that makes code less to prone
          return `this is virgo_name's${virgo_name}  light `;
      }
      virgo_name('red');

        
    // let's see an example
    type Status = 'idle' | 'downloading' | 'complete';
    
    function downloadStatus(status:Status){
        if(idle ==='idle'){
            console.log('Download');
        }
        else if(downloading === 'downloading'){
            console.log('Downloading...');
        }
        else if(complete === 'complete'){
            console.log('Your download is complete!');
        }
    }
    downloadStatus('complete'); // Your download is complete!
    downloadStatus('idle');// Download

    // https://www.codecademy.com/courses/learn-typescript/lessons/union-types/exercises/unions-with-literal-types
    
    /** Day 45    - Reviews
     *            - Lesson 38 - 40
     *            - More on Type Narrowing
     *            - Type guard
    **/

   // Reviews on Unions
   // Learned variety of wats to create types that are as specific as we need with unions

   /* 1. WIth vertical bar character | we can combine more than one types which is syntac for definning union.
       Type that are presnet inside the union are type memeber.
   */
   let hellos: (string | number) = "type";
   //             member   member 

   /* 2. Type narrowing - We can use methods & properties of type with it.
                        It allows us to type a variable as a union
    */
   let your_name: string | number = "dilli";
   your_name.toLocaleLowerCase();
   your_name.lastIndexOf; // accessing string methods
   your_name = 822; 
   your_name.toString(); // accessing number properties

   /* 3. typeguard - It guard the specific memeber type of union variable which means methods and properties is also controlled by it.
   */
   if(typeof your_name == 'string'){
       console.log(typeof(your_name)); // double checking type here
       console.log("yes it is string!");
   }
   else if(typeof your_name == null){
       const err = "erro found";
       console.log(err);
   }

   // 4. If function return mutliple types, Ts will infer all possible return types as union
   let uniO: string | number = "para one";
   let paraP: string | boolean = false;
   function multiInfer(paraOne: string, paratwo: boolean){
       return `${paraOne} + ${paraP}`;
   }
   multiInfer("your name", false);

   // 5. Defining states within program by using literal types and unions
   type nity = {
       name: string,
       id: number,
       address: string | null,
   }
   let strs: nity;
   strs.address = "address not found";
   strs.id = 822;

   // Lesson 38 - MOre on Type narrowing
   /*              - Suppose we have object detector that detects fragile, letter & heavy objects only.
                   - We receive daily 500 -600 objects which could only be one of them for if our object is letter 
                     it will be sent to letter box, if it is heavy it will be sent to heavy box and for fragile same.
                - Typescript checks the variable types and compile it. Even if it runtime error during compilation
                  it will parse ts code to js. It has ability to evaluate how our runtime code will perform ad infer variable types for us.
    */
   // while using union we have more than one type and suppose I want only one type inside the function same as above machine which accepts all three 
   // object types but separates while it is inside the filtration process for that type narrowinng comes in rescue 
   function ourMachine(items: string | number | boolean){
       // items can be string or number or boolean let's filter them
       if(typeof items == 'string'){
           console.log("this is letter");
       }
       else if (typeof items == 'number'){
           console.log("this is fragile")
       }
       console.log("this is heavy boolean object");
   }
   // if any condition met inside the funciton ourMachine type narrowing occurs and allow type methods accessing
   ourMachine("letters"); 
   // this shows typescript can infer more specific types based on the variable's surrounding code.

   function yout(juice: string | number | null){
       if(typeof juice == 'string'){
           console.log("juice is" + `${juice}`);
       }
       else if(typeof juice == 'number'){
           console.log("real juice number is " + `${juice}`);
       }
       console.log("no juice and value is " +`${juice}`);
    }
    yout("real");
    yout(4814);
    yout(null);

    function guitarsG(guitar: string | number){
       if(typeof guitar == 'string' && typeof guitar == 'number'){
           console.log(`guitar's name is ${guitar} and guitar's model number is` + ` ${guitar}`);
       }
       else if(typeof guitar == 'string'){
           return ` no model number not found but only guitar's name ${guitar}`;
       }
    }
    guitarsG("les paul" + 1999);
    guitarsG("lespaul");

    // Lesson 39 - Type guards
    /**            Typescript can narrow a type is with only conditional statement that checks if a variable is a specific type
    *             This pattern is called a type guard. We are using typeof operator but it can use variety of operators that checks for a variable's type.
    */
     function nuni(date: string | number){
         if(typeof date == 'string'){
             console.log("data is in the form of string" +`${date}`);
         }
         console.log("date is in the form of number " + `${date}`);
     }
     // our function knows that it may be string or number and infer function return types depending upon arguments
     // with type narrowing we are becoming more specific 
     nuni("2022/05/28");
     nuni(20220528);

     // Examples: see below code which is broken 
     function formatStatisticN(stat: string | number) {
          return stat.toFixed(2); // program logics broken  here as in this line function doesnot know stat is number
      }
      
      console.log(formatStatisticN('Win'));
      console.log(formatStatisticN(0.364));

    // with type narrowing correcting the function formatStatistics
     function formatStatistic(stat: string | number) {
        if(typeof stat == 'number'){
          return stat.toFixed(2);
        }
        else if(typeof stat == 'string'){
          return stat.toUpperCase();
        }
      
      }
      
      console.log(formatStatistic('Win'));
      console.log(formatStatistic(0.364));

      //https://www.codecademy.com/courses/learn-typescript/lessons/typescript-type-narrowing/exercises/type-guards

      /** Day - 46      - Continue Lesson 40 - 42
       *                - using in with Type Guards
       *                - Narrowing with else
       *                - Narrowing After a Type Guard
      */

      // Lesson 40   - Using in with Type Guards
      /**              - Writing more types leads us to do more customization in our code.
       *               - 'in' operator comes into play when we want to see if a specific method exists on a type instead of a type like 'string'.
       *               - as we know typeof operator helps us pretty much but what if want to see if specific method is really existing inside the types 
       *               - for example if type is string do string has xyz method existing inside the type
       */
       // Examples 
        type football = { // object types with properties
            kickoff: () => void;
        }

        type volleyball = {
            serve: () => void;
        }

        function play(sport: volleyball | football){
            if('kickoff' in sport){ // condition checking method exists inside th type??
                return sport.kickoff(); // returning the method
            }
            if('serve' in sport){
                return sport.serve();
            }
        }

        type fish = {
            goldenFish: () => void;
        }

        type bird = {
            chicken: () => void;
        }

        function findBF(fish_bird: fish | bird){
            if('goldenFish' in fish_bird){ // type narrowing is possible because Typescript recoginzes in as a type guard
                return fish_bird.goldenFish();
            }
            if('chicken' in fish_bird){
                return fish_bird.chicken();
            }
        }
        // types cat and fish 
        type Cat = {
            name: string;
            run: () => string;
          }
          
          type Fish = {
            name: string;
            swim: () => string;
          }
          
          const siameseCat = { 
            name: 'Proxie', 
            run: () => 'pitter pat'
          }
          
          const bettaFish = { 
            name: 'Neptune', 
            swim: () => 'bubble blub'
          }
        // here function move having parameters as type Cat and Fish
        function move(pet: Cat | Fish) {
            if('run' in pet){
             return pet.run();
            }
            if('swim' in pet){
              return pet.swim();
            }
          
          }
          
        console.log(move(siameseCat));
       // Lesson 41   - Narrowing with else
       /**               - In the previous Lesson we have used type narrowing with in using only else
        *                - we can also use if/else in typescript narrowing
        * Since TypeScript can understand how our code will work at runtime, it’s able to infer specific types
        * for us, like with the else of an if/else statement.
       */

       function formalPirates( members: string | number ){
           if(typeof members === 'string'){
               return members.toLowerCase();
           } else{
               return `this is ${members} all.`;
           }
       }
       formalPirates("luffy");
       formalPirates(48774);


       type Pasta = {
        menuName: string;
        boil: () => string;
      }
      
      type Meat = {
        menuName: string;
        panFry: () => string;
      }
      
      const fettuccine = {
        menuName: 'Fettuccine',
        boil: () => 'Heat water to 212 degrees',
      }
      
      const steak = {
        menuName: 'New York Strip Steak',
        panFry: () => 'Heat oil to 350 degrees',
      }
      
      function prepareEntree(entree: Pasta | Meat) {
        if('boil' in entree){
         return entree.boil();
        }
        else if('panFry' in entree){
          return entree.panFry();
        }
      }
      
      console.log(prepareEntree(fettuccine));

      // Lesson 42 - Narrowing After a Type Guard
      /**             - Typescript's  ability to infer types after a type guard stretches even further than inferring the type within else statement
       *              - It can type narrow without an else statement
      */

       type Metal = {
        magnetize: () => string;
      }
      
      type Glass = {
        melt: () => string;
      }
      
      const iron = {
        magnetize: () => 'Electromagnet activated'
      }
      
      const bottle = {
        melt: () => 'Furnace set to 2,700 degrees'
      }
      
      function recycle(trash: Metal | Glass) {
        // Add your code below:
        if ('magnetize' in trash) {
        return trash.magnetize();
        }
    
        return trash.melt(); // typescript will infer to type glass without else statement
      }
      
      console.log(recycle(iron));
      
      type stones = {
          stop: () => string;
      }

      type water = {
          allow: () => string;
      }

      function filter(items: stones | water){
          if('stop' in items){
              return items.stop();
          }
          return items.allow();
      }
      console.log(filter(stones)); // error as --> 'stones' only refers to a type, but is being used as a value here.
      const stones = {
          stop: () => 'stones are not allowed!'
      }
      console.log(filter(stones)); // see no error

      /** https://www.codecademy.com/courses/learn-typescript/lessons/typescript-type-narrowing/exercises/review-type-narrowing
       * 
       * Day - 47    - Reviews Type Narrowing
       *             - Lesson 43 - 
       *             - Introduction to object types
       */

      /* 1. Type narrowing - Tyescript can understand how our code will execute at runtime so that it can infer more specific types while we write code. */
      function runTime(timing: number | string){
          if(timing === 'number'){
              return `Runing Time is ` + ` ${timing}`;
          }
          return `Runing Time in words ` + ` ${timing}`;
      }
      runTime(615);
      runTime("2minutes15seconds");

      // 2. An expression that checks if a variable is a specific type is called type guard. Type guard allow Ts to identify when it can type narrow.
      function myAges(age: number | undefined){
          if(typeof myAge === 'number'){ // typeof is type guard here
              return ` yes my age is ` + `${age}`;
          }
          return `my age is ` + `${age}`;
      }
      myAges(23);
      myAge();

      // 3. typeof operator is very useful it can check if a variable is string, number, boolean or symbol.
      function uini(utems: null | number){
          if(typeof utems == 'number'){
              return `you typed ${utems}`;
          }
          return `error null`;
      }
      uini(null);
      uini(845);

      // 4. in operator is useful for checking if a specific property exists on an object.
      type web_dev = {
          script: () => void;
      }

      type app_dev = {
          flutter: () => void;
      }

      function dev(develop: web_dev | app_dev){
        if("script" in develop){
            return develop.script();
        }
        return develop.flutter();
      }

      // 5. Typescript can type narrow after a type guard with else block. It understands itself if () statment is
      //     used but else is not then return will work else statement and else is inverse of if statement.

      type machine_learning = {
          python: () => void;
      }
      type AI = {
          modeling: () => void;
      }

      function sector(fields: machine_learning | AI){
          if("python" in fields){
              return ` python is best for machine learning` + fields.python();
          }
          else if("modeling" in fields){
              return ` AI is artificial intelligene ` + fields.modeling();
          }
          return `nothing to show`;
      }

      // Lesson 43 - Introduction to object types
      /**              - so far we have studied so many technique and ways to write the types in our code.
       *               - writing correct Typescript means applying correct types in every situation.
       * 
       */
      class Monkey {
          identify(species: string){
              console.log(`This animal is ${species}`);
          }
      }
      // above is a class Monkey and now we learn how to deal types with advanced object types with OOP Patterns.


      /** Day - 48   - COntinue Lesson 44 - 45
       *             - Types and interfaces
       *             - Interfaces and Classes
      */
      
       // Lesson 44 - Types and interfaces
       /**           - Typescript allow us to define the types in a various way. like with type keyword we can define the object types.
        *            - similar we have interface which is used for defining types. Types and interfaces both have similar utilization
        *      type objectU and interface objectT has different syntax like interface doesnot have = equal sign 
        */

       // this is type
       type objectU = {
           firstOrder: string,
           secondOrder: number,
           thirdOrder: boolean,
       }
       let myu: objectU;

       // this is interface
       interface objectT {
           firstOrder: string,
           secondOrder: number,
           thirdOrder: boolean,
       }
       let myTr: objectT;

       interface footballF {
           players: number,
           coach: number,
           clubName: string
       }

       const nyt: footballF;
       nyt.clubName = "Liverpool";

       /* BOTH HAVE IDENTICAL USE BUT TYPE IS MORE FLEXIBLE THEN INTERFACE AS TYPES ALLOWS TO DEFINE OBJECT TYPES, PRIMITIVE DATA TYPES & MORE.
          WHILE INTERFACE ONLY DEFINE THE OBJECT TYPE.
       */

    // Interface are used when we only want to work with object types which is best fit while doing object-oriented programming
    // Write an interface here
    interface Run{
        miles: number;
    }
  
    function updateRunGoal(run:Run) {
        console.log(`
           Miles left:       ${50 - run.miles}
          Percent of goal:  ${(run.miles / 50) * 100}% complete`)
        }
        updateRunGoal({
            miles: 5,
    })

    interface Watch{
        time: number | string;
    }

    function updateRunTime(watch: Watch){
            console.log(`${watch} seconds: $((watch.time / 60)`);
        }
        updateRunTime({
                time: 145,
    })

    // Lesson 45  - Interfaces and Classes
    /*               - Interface keyword in Ts is especially good for adding types to a class.
                     - They are constrained to typed objects.
                     - Using class with interface are a great match.
                     - How to use interface and class together with implement keyword we can use both of them. 
    */

    interface Machine {
        identify: (id: number) => void;
    }

    // applying type Machine to the class OneSeries with implement keyword

    class OneSeries implements Machine {
        identify(id: number){ // here class is matching the methods of interface
            console.log(`Beep! I'm ${id.toFixed(2)}.`);
        }
        // creating custom methods or properties inside the class OneSeries
        answerQuestion(){
            console.log('56!');
        }
    }

    // creating interface with idNumber properties which is void function
    interface Mobile {
        idNumber: (id: number) => void;
    }
    // creating class and implementing the Mobile Interface
    class FullSeries implements Mobile {
        idNumber(id: number){ // inteface and implements allows to create types that match a variety of class patterns
            console.log(`this is ${id.toString()}`);
        }
        // creating custom methods inside the class
        waitingAnswer(){
            console.log(822);
        }
    }

    // Create a interface and method inside it of type function which returns void.
    // Write an interface here
    interface Directory {
        addFile: (name: string) => void;
      }

    class DesktopDirectory implements Directory{
        addFile(name: string) {
            console.log(`Adding file: ${name}`);
    }
  
    showPreview(name: string) {
      console.log(`Opening preview of file: ${name}`);
     } }
  
    const Desktop = new DesktopDirectory();
  
    Desktop.addFile('lesson-notes.txt');
    Desktop.showPreview('lesson-notes.txt');

    interface Home {
        addLocation: (name: string) => void;
    }
    
    class KnowMyHome implements Home{
        addLocation(name: string) {
            console.log(`Adding Home's location: ${name}`);
        }
        
        callingHome(name: string){
            console.log('calling my home address' + `${name}`)
        }
    }

    const finalHome = new KnowMyHome();
    finalHome.addLocation('Itahari');
    finalHome.callingHome('Nepal');

    //https://www.codecademy.com/courses/learn-typescript/lessons/typescript-advanced-object-types/exercises/interfaces-and-classes
    
    /** Day - 49      - Lesson 46 - 47
     *                - Deep Types (working with class + props + interface)
     *                - Composed Types - interface inside interface
     *                - working with interface and composed object types
    */
   
    // Lesson 46  - Deep Types
    /**                - as our code and program grow and become more complex we will have more methods and properties to our objects.
    *                 - we need to add , modify and accomodate more features
    *                 - infact we need nested methods and properties, Let's take an example by looking into class 
    */

    //  class OneSeries is implementing the Robot interface having...
    class Onees implements Robot {
        about; // about property which is an object within a nested object.

        // constructing the class id and name 
        constructor(props: { general: { id: number; name: string; } }) { 
          this.about = props; // passing as props
        }
        // returning getRobotId() function this.about.general.id 
        getRobotId() {
          return `ID: ${this.about.general.id}`;
        }
    }

    // with typescript using interface we could type an object nested inside another object 
    interface Robot {
        about: { // about property inside the robot interface
            general: { // general typed object inside the about typed object
                id: number;
                name: string;
            };
        };
        getRobotId: () => string;
    }
    // this above code shows that nested objects is supported in Typescript

    class Uiy implements War {
        events;
        
        constructor(props: { modern: { start: number | string ; present: string | number; }}){
            this.events = props;
        }

        getModernHistory(){
            return `Modern-History: ${this.events.modern.start}` + `${this.events.modern.present}`;
        }
    }

    interface War{
        events: {
            modern: {
                start: number | string;
                present: string | number;
            }
        }
    }

    // Sample Example
    interface Directory {
        addFile: (name: string) => void;
        // Define a config type member here
        config: {
            default: {
                encoding: string;
                permissions: string;
            }
        }
    }
    
    class DesktopDirectorys implements Directory {
        config = {
            default: {
                encoding: 'utf-8',
                permissions: 'drw-rw-rw-',
            }
        }

      addFile(name: string) {
        console.log(`Adding file: ${name}`);
       }

       showPreview(name: string) {
        console.log(`Opening preview of file: ${name}`);
       }
    }

    const DesktopT = new DesktopDirectorys();
    console.log(DesktopT.config);

    // Lesson 47  - Composed Types
    /**               - Composing types together is an essential way to keep our code organized and flexible.
     *                - we can use interface inside the interface , and members can also explicitly define type as interface
     *     # Why to use Composed Types?
     *         - As our data gets nested deeper in big projects it is difficult to read and write the code
     *         - Composed types allows us to compose types where we can define multiple types and reference them inside other types.
     *         - using specific method or object type is possible with composed types
    */
    
    interface Avot{
        dont: string; // normal membert types
        general: _General; // general member as interface objec types composing inside it
    }

    interface _General {
        id: number;
        name: string;
        version: Version;
    }

    interface Version{
        versionNumber: number;
    }

    // Sample Example
    interface Directory {
        addFile: (name: string) => void;
        config: Config;
      }
      interface DefaultConfig {
        encoding: string;
        permissions: string;
      }
      interface Config {
        default: DefaultConfig;
      }
    
    // Sample Example
    class DesktopDirectoryo implements Directory {
        config = {
          default: {
            encoding: 'utf-8',
            permissions: 'drw-rw-rw-',
          }
        }
      
        addFile(name: string) {
          console.log(`Adding file: ${name}`);
        }
      
        showPreview(name: string) {
          console.log(`Opening preview of file: ${name}`);
        }
      }
      
      const Desktopo = new DesktopDirectoryo();
      
      console.log(Desktopo.config);

      interface mainInterface{
          addGame: (name:string) => void;
          mainf: mainF;
      }

      interface firstInter{
          game: string;
          counter: number;
      }

      interface mainF{
          default: firstInter;
      }

      class mainGame implements mainInterface {
          mainf = {
              default: {
                  game: 'basketball',
                  counter: 7,
              }
            }
            addGame(name: string){
                  console.log(`adding game's name : ${name}`)
              }

            showPreGame(name: string){
                  console.log(`opening preview of game: ${name}`)
            }
      }
      
      const jukiu = new mainGame();
      console.log(jukiu.addGame);
      console.log(jukiu.showPreGame);
    
      // https://www.codecademy.com/courses/learn-typescript/lessons/typescript-advanced-object-types/exercises/composed-types

      /** Day -50     - Lesson 48 - 49
       *              - Extending Interfaces
       *              - Index Signatures
       * /
       * 
       // Lesson 48 - Extending Interfaces
       /**             - This method is useful when we are writing too many interfaces and alterantive method for composed types
        *              - It is widely used when we want to copy the particular all type to another type
        *              - with extends keyword we can copy the one types properties and methods to another types
        */
       // example
       interface medit {
           time: string | number;
       }

       // extending medit interface with new_medit
       interface new_medit extends medit{
           report: string;
       }

       // now new_medit copied the object types and members of medit and possess same properties and methods
       const extend_interface: new_medit = {
           time: 450, report: 'string'
       };
       // Using extends can help us organize our code by abstracting out common 
       // type members into their own interface, then copying them into more specific types.

       interface my_pc {
           specs: string;
       }
       interface pc extends my_pc {
           generation: string;
       }
       const your_pc: pc = {
           specs: "string", generation: "string"
       }

       // Example 
       interface Developer extends Humane{
        code: () => void;
      }
      
      // Add your interface here
      interface Humane{
        name: string;
        hobbies: string[];
      
      }
      
      const me: Developer = { 
        code: () => console.log('Headphones on. Coffee brewed. Editor open.'),
        name: 'Corrina', 
        hobbies: ['Building rockets']
      }
      
      me.code();

      interface env extends myen {
          sam: () => void;
      }
      interface myen{
          username: string;
          details: string[];
      }
      const ytt: env = {
          sam: () => console.log('void function return none type');
          username: 'username',
          details: ['element1', 'element2', 'element3']
      }

      // Lesson 49  - Index Signatures
      /**             - Index signature is one of the most important feature in Typescript.
       *              - In real world when we play with apis, we may not know what type of data will api return we know data will come but doesnot know what type it would be.
       *              - It is a way of fitting and handling the objects & properties which we know nothing.
       *              - It is useful to write an object type that allows us to include a variable name for the
       *                property name. This feature is called index signatures.
       */
      // this is data we get from api which key value pair having latitude value and boolean only
      {
        '40.712776': true; // here we donot know the latitude name
        '41.203323': true;
        '40.417286': false;
      }
      // so we need object type name here to do that we need index signature
      // syntac is { [string]: boolean }

      interface knowLat {
          [latitude: string]: boolean // here [latitude: string] defines every latitude property name as string with value boolean type
      }
       // sample api returning us this data
       {
        'shopping': 150,
        'food': 210,
        'utilities': 100
      }

      import { getBudgetAsync } from './api';
      // Write an interface here
       interface Budget{
          [category: string]: number;
        }
       
        async function getBudget() {
           const result: Budget = await getBudgetAsync();
           console.log(result);
        }
        
        getBudget();

         {
            'parrot': true; // here we donot know the latitude name
            'dogs': true;
            'dolphin': false;
          }

          interface knowAnimal {
              [animals: string]: boolean // here [latitude: string] defines every latitude property name as string with value boolean type
          }

           {
            'running': 150,
            'jumping': 210,
            'visiting': 100
          }
        // Write an interface here
        interface Burns{
            [category: string]: number;
        }

        async function getHyr() {
               const result: Burns = await getBudgetAsync();
               console.log(result);
        }
        getHyr();

        // https://www.codecademy.com/courses/learn-typescript/lessons/typescript-advanced-object-types/exercises/index-signatures

        /** Day -51    - Lesson 50 - Reviews
         *             - Optional Type Members
         *             - Reviews on Advanced Object Types
        */

        // Lesson 50 - Optional Type Members
        /**            - In programmming we create function or class which take arguments 
         *             - not every time we compulsory need arguments some of which are required and some that are optional.
         *             - when we use interface type members are compulsory required however typescript allows us to make some type members optional.
         *   syntax for optional or option operator is ? 
         *   - we are using ? after the property name and before the colon(:) 
         */

        interface optionExample {
            name: string;
            size?: string;
            color?: string | number;
        }

        function allList(options: optionExample){
            let fileName = options.name;

            if(options.size){
                fileName = `${fileName}: ${options.size}`;
            }
            return fileName;
        }

        allList({ name: 'NAME' }) // now size and color has become optional
        
        // example showing using optional type members as parameters
        // Write an interface here
        interface UserNameOptions {
            firstName?: string;
            lastName?: string;
            username: string;
        }
        
        function getUserNamee(options: UserNameOptions) {
            if (options.firstName && options.lastName) {
                return console.log(`${options.firstName} ${options.lastName}`);
            }
            return console.log(options.username);
        }
        
        getUserNamee({
            firstName: 'Mr.',
            lastName: 'Oshiro',
            username: 'hotelowner304'
        })
        
        getUserNamee({
            firstName: 'Madeline',
            username: 'mountainClimber'
        })

        interface appleProducts{
            laptop?: string;
            iphone?: string;
            ipad: string;
        }

        function getAppleProducts(options: appleProducts){
            if(options.laptop && options.iphone){
                return console.log(`${options.iphone} ${options.laptop}`);
            }
            return console.log(options.ipad);
        }

        getAppleProducts({ipad: 'ipad13'});

        // Revies on Advanced Object Types
        // 1. interface and type both keywords are used to declare types.
        type yujh = {
            stops: () => string; // function
            play: () => void;
            jukes: string;
            jump: string | boolean;
        }
        
        const userMe: yujh;
        userMe.stops = () => "hello";
        userMe.jump = "jumping from start at " + 4 + 'meter high';

        interface exa_e {
            born: string;
            death: string;
            age: string | number;
        }

        const show_e: exa_e;
        show_e.age = 23;

        // 2. Interface is great for typing objects, especially within OOP
        interface shoe_OOP {
            first:(param:string) => string;
            first_members: string | number;
            second_members: boolean;
        }

        // 3. Applying interface on a class using implements keyword
        class muse implements shoe_OOP {
            first(param:string): string{
                return "this is string" + `${param}`
            };
            first_members = 'string';
            second_members = false;
        }

        const openAct = new muse();
        openAct.first('hello');

        // 4. Objects types can be nested infinetly.
        interface object_nest {
            generalty:{
                username: string;
                age: number

                another_me: {
                    age: number;
                    id: number;
                }
            }

            complex: {
                hello: boolean;
                age: number;
            }
        }

        // 5. Copy the type members of one interface inot another using the extends keyword
        interface first_me {
            name: string;
            age: number;
            disable: boolean;
        }

        interface second_me extends first_me {
            // second_me has now all first_me now methods and properties 
            great: () => string;
        }

        // 6. Index signature is a way of fitting the property names within an object type [propertyName: string]: string
        id: {
            '455454': false,
            '11545454': true
        }

        interface lightUp{
            [points: string]: boolean;
        }

        // 7. with option ? opertor it is possible to make optional type members
        interface juh {
            nuke?: string;
            nump: number;
        }

        /*** Completed all syllabus of Typescript in Codecademy */
  
        
        
      

    








        


        



















    




































    

    



























    

    
   









                       














    


    
























    







  







