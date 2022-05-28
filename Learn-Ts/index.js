function CustomWelcome(greeting) {
    console.log(greeting);
}
var greeting = "hello world";
CustomWelcome(greeting);
var i = 0;
for (i; i < 5; i++) {
    console.log(i);
}
// always use node index.js for terminal js run
// another example of typescript rules
// it adds rules on what kinds of values can be used
// below code is correct in js but ts suggests us not to do this
// hover your mouse over the underlined red line to read error depending on your IDE.
console.log(4 / []);
// expected syntax error in js may not be problematic in TS
var a = (4
// TS is static type checker it is not dynamic typing language
// TS compile each line/statements of JS which shows pre bugs and errors before it becomes huge disaster
// normally static type checking means determining and checking the kinds of value and showing code errors before it's execution
// for example source: docs
);
// TS is static type checker it is not dynamic typing language
// TS compile each line/statements of JS which shows pre bugs and errors before it becomes huge disaster
// normally static type checking means determining and checking the kinds of value and showing code errors before it's execution
// for example source: docs
var myname = { first: "dilli", last: "rai" };
var fullName = myname.first + myname.last;
console.log(fullName);
