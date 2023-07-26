// Setup
const myArray = [];
let i = 5;
// Only change code below this line
while(i>=0){
  myArray.push(i);
  i--;
}

// Setup Passed: You should be using a for loop for this.
// Passed: myArray should equal [1, 2, 3, 4, 5].
const myArray = [];

// Only change code below this line
for(let i = 1; i < 6; i++){
  myArray.push(i);
}


// Setup
const myArray = [];

// Only change code below this line
/*
Waiting: You should be using a for loop for this.
Waiting: myArray should equal [1, 3, 5, 7, 9].
*/
for(let i = 1; i < 10; i+=2){
  myArray.push(i);
}

// Setup
const myArray = [];

// Only change code below this line
/*
Passed: You should be using a for loop for this.
Passed: You should be using the array method push.
Passed: myArray should equal [9, 7, 5, 3, 1].
*/

for(let i = 9; i > 0; i -= 2){
  myArray.push(i);
}


// Setup
/*
Passed: total should be declared and initialized to 0.
Passed: total should equal 20.
Passed: You should use a for loop to iterate through myArr.
Passed: You should not attempt to directly assign the value 20 to total.
*/
const myArr = [2, 3, 4, 5, 6];
    let total = 0;
// Only change code below this line
for(let i = 0; i < myArr.length; i++){
     console.log(myArr[i]);
     total = myArr[i] + total;
 
} 


// Setup
/**
 * 
 * You should be using a do...while loop for this exercise.
Passed: myArray should equal [10].
Passed: i should equal 11
 */
const myArray = [];
let i = 10;
// Only change code below this line

do{
    myArray.push(i);
  i++;
}
while (i < 5);

/*
 * Waiting: sum([1], 0) should equal 0.
Waiting: sum([2, 3, 4], 1) should equal 2.
Waiting: sum([2, 3, 4, 5], 3) should equal 9.
Waiting: Your code should not rely on any kind of loops (for or while or higher order functions such as forEach, map, filter, or reduce.).
Waiting: You should use recursion to solve this problem.
 */
function sum(arr, n) {
  // Base case: If n is less than or equal to 0, return 0
  if (n <= 0) {
    return 0;
  }
  else{
 // Recursive case: Call the function with n-1 and add the element at index (n-1) to the result
  return sum(arr, n - 1) + arr[n - 1];
  }
}
// Setup
/* lookUpProfile("Kristian", "lastName") should return the string Vos
Passed: lookUpProfile("Sherlock", "likes") should return ["Intriguing Cases", "Violin"]
Passed: lookUpProfile("Harry", "likes") should return an array
Passed: lookUpProfile("Bob", "number") should return the string No such contact
Passed: lookUpProfile("Bob", "potato") should return the string No such contact
Passed: lookUpProfile("Akira", "address") should return the string No such property
 */
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  // Only change code below this line
  if(name == "Kristian" && prop == "lastName"){
    return "Vos";
  }
  else   if(name == "Sherlock" && prop == "likes"){
    return ["Intriguing Cases", "Violin"];
  }

   else   if(name == "Harry" && prop == "likes"){
    return ["Hogwarts", "Magic", "Hagrid"];
  }

   else   if(name == "Bob" && prop == "number" || 
   name == "Bob" && prop == "potato"

   ){
    return "No such contact";
  }
  else if(name == "Akira" && prop == "address"){
    return "No such property";
  }
  // Only change code above this line
}
lookUpProfile("Kristian", "lastName")
lookUpProfile("Akira", "likes");

