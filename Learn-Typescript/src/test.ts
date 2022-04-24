

interface UserInterface {
    name: string,
    age: number,
    rollNo: string | number,
    height?: string,
    interfaceFunction():string,
}

const userOne: UserInterface = {
    name: "Dilli",
    age: 45,
    rollNo: "45T",
    interfaceFunction () {
        return "Hello From Interface Function!"
    }
}


const normalVariabel: string | number = "Hello world";

normalVariabel = "ANothe variables";

let dynamicVar: string = "This is dynamic Value";

dynamicVar = "hello from typescript";

var globalVat: string | number = 4545;

globalVat = "this is stringidsidf";


// type in typescript

let myArray: string[] | number[] | boolean[];
myArray = ["this is list", "this is array", "sjdfbjdsbfjdsfsdf"], [ 4545454,4545454.0154,4545], [false,true,true, false];

// making function explicit mire 

function myFunction(parameter1:string, parameter2:number){
    return "Hello from wrodl" + parameter1 + parameter2
}
myFunction("this is argument 1", 45454545);

// setting default union type in ts
const helloWorld : string | null = null;
console.log(helloWorld);



// alias in typescript
type ID = string | number;

type NewID = null | string;

interface demoInterface {
    id: ID,
    name: string,
}

// alias with variables
let exampleVar: ID;
exampleVar = "This is an example Var";

let newexampleVar: ID[] = [454,4545,4545];








