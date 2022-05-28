
function CustomWelcome(greeting){
    console.log(greeting)
}

var greeting = "hello world";
CustomWelcome(greeting);


let i = 0;
for (i; i<5; i++){
    console.log(i)
}

// always use node index.js for terminal js run


// another example of typescript rules
// it adds rules on what kinds of values can be used
// below code is correct in js but ts suggests us not to do this
// hover your mouse over the underlined red line to read error depending on your IDE.
console.log( 4 / []);
// error messages will be ---> The right-hand side of an arithmetic operation must be of type 'any', 'number', 'bigint' or an enum type.

// expected syntax error in js may not be problematic in TS
let a = (4

// error message ---> ')' expected.


// TS is static type checker it is not dynamic typing language
// TS compile each line/statements of JS which shows pre bugs and errors before it becomes huge disaster
// normally static type checking means determining and checking the kinds of value and showing code errors before it's execution
// for example source: docs

const myname =  { first: "dilli ", last: 45};
const fullName = myname.first + ' ' + myname.last;
console.log(fullName)

// one of the feature of typescript is that even though it shows the errors or warnings on code it will compile and js code will gets executed
// run the complied file with node for eg: node index.js ( whatever the name you had given to the file )