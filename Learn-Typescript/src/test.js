function display(value) {
    if (typeof (value) === "number")
        console.log("The given value is number data type!");
    else if (typeof (value) === "string")
        console.log("The given value is of string data type!");
}
display(123);
display("this is string");
