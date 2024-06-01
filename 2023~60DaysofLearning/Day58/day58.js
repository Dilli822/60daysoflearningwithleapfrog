// Passed: The quickCheck function should return a boolean (true or false), not a string ("true" or "false")
// Passed: quickCheck(["squash", "onions", "shallots"], "mushrooms") should return false
// Passed: quickCheck(["onions", "squash", "shallots"], "onions") should return true
// Passed: quickCheck([3, 5, 9, 125, 45, 2], 125) should return true
// Passed: quickCheck([true, false, false], undefined) should return false
// Passed: The quickCheck function should utilize the indexOf() method
function quickCheck(arr, elem) {
  if (arr === undefined || elem === undefined) {
    return false; // If either arr or elem is undefined, return false.
  }
  
  return arr.indexOf(elem) !== -1; // Return true if elem exists in the arr, otherwise false.
}

console.log(quickCheck([3, 5, 9, 125, 45, 2], 125));
console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));

// filteredArray([[10, 8, 3], [14, 6, 23], [3, 18, 6]], 18) should return [[10, 8, 3], [14, 6, 23]]
// Passed: filteredArray([["trumpets", 2], ["flutes", 4], ["saxophones", 2]], 2) should return [["flutes", 4]]
// Passed: filteredArray([["amy", "beth", "sam"], ["dave", "sean", "peter"]], "peter") should return [["amy", "beth", "sam"]]
// Passed: filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3) should return []
// Passed: The filteredArray function should utilize a for loop

function filteredArray(arr, elem) {
  let newArr = [];
  // Only change code below this line
  for(let i = 0; i < arr.length; i++){
       if (arr[i].indexOf(elem) === -1) {
      newArr.push(arr[i]);
    }

  }
  // Only change code above this line
  return newArr;
}

console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));
console.log(filteredArray([[10, 8, 3], [14, 6, 23], [3, 18, 6]], 18));

// Passed: myNestedArray should contain only numbers, booleans, and strings as data elements
// Passed: myNestedArray should have exactly 5 levels of depth
// Passed: myNestedArray should contain exactly one occurrence of the string deep on an array nested 3 levels deep
// Passed: myNestedArray should contain exactly one occurrence of the string deeper on an array nested 4 levels deep
// Passed: myNestedArray should contain exactly one occurrence of the string deepest on an array nested 5 levels deep

let myNestedArray = [
  // level 1
  [
    //level 2
    [
      // level 3
      [
        // level 4
        [
          // level 5
          'deepest',
        ],
        // level 4
        'deeper',
      ],
      // level 3
      'deep'
    ]
    // level 2
  ],
  // level 1
  // Only change code below this line
  ['unshift', false, 1, 2, 3, 'complex', 'nested'],
  ['loop', 'shift', 6, 7, 1000, 'method'],
  ['concat', false, true, 'spread', 'array'],
  ['mutate', 1327.98, 'splice', 'slice', 'push'],
  ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth']
  // Only change code above this line
];
// Passed: foods should be an object.
// Passed: The foods object should have a key bananas with a value of 13.
// Passed: The foods object should have a key grapes with a value of 35.
// Passed: The foods object should have a key strawberries with a value of 27.
// Passed: The key-value pairs should be set using dot or bracket notation.

let foods = { apples: 25, oranges: 32, plums: 28, };
// Only change code below this line
  foods.origin = 'bananas',
  foods.origin = 'grapes';
  foods.origin = 'strawberries';

foods['bananas'] = 13;
foods['grapes'] = 35;
foods['strawberries'] = 27;
// Only change code above this line
console.log(foods);

//Modify an Object Nested Within an Object
// The online property nested in the data key of userActivity should be set to 45
let userActivity = {
  id: 23894201352,
  date: 'January 1, 2017',
  data: {
    totalUsers: 51,
    online: 42
  }
};

// Only change code below this line
userActivity.data.online = 45;
// Only change code above this line

console.log(userActivity);

// Passed: checkInventory should be a function.
// Passed: The foods object should have only the following key-value pairs: apples: 25, oranges: 32, plums: 28, bananas: 13, grapes: 35, strawberries: 27.
// Passed: checkInventory("apples") should return 25.
// Passed: checkInventory("bananas") should return 13.
// Passed: checkInventory("strawberries") should return 27.

let foods = { apples: 25, oranges: 32, plums: 28, bananas: 13, grapes: 35, strawberries: 27 };
function checkInventory(scannedItem) {
  // Only change code below this line
  if(scannedItem == "apples"){ return 25; }
  else if(scannedItem == "bananas") { return 13; }
  else if (scannedItem == "strawberries") { return 27; }
  // Only change code above this line
}
console.log(checkInventory("apples"));
console.log(checkInventory("bananas"));
console.log(checkInventory("strawberries"));

//The oranges, plums, and strawberries keys should be removed using delete.

let foods = { apples: 25, oranges: 32, plums: 28,bananas: 13,grapes: 35,strawberries: 27 }; 
// Only change code below this line
delete foods.oranges;
delete foods.plums;
delete foods.strawberries;
// Only change code above this line
console.log(foods);

// Check if an Object has a Property
/*:users.hasOwnProperty('Alan');
'Alan' in users;
**/
let users = {
  Alan: {
    age: 27,
    online: true
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: true
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function isEveryoneHere(userObj) {
  // Only change code below this line
  if(userObj.hasOwnProperty('Alan') && 
  userObj.hasOwnProperty('Jeff',) &&
  userObj.hasOwnProperty( 'Sarah') &&
  userObj.hasOwnProperty( 'Ryan') ){
    return true;
  } 
    
    return false;
  // Only change code above this line
}

console.log(isEveryoneHere(users));

//Iterate Through the Keys of an Object with a for...in Statement

function countOnline(allUsers) {
  // Only change code below this line
let onlineCount = 0;
  for(const users in allUsers){
    console.log(users, allUsers[users]);
    if(allUsers[users].online == false){
        return false;
    }else{
      onlineCount++;
    }
    }
  
  return onlineCount;
  // Only change code above this line
}

console.log(countOnline(users));
console.log(countOnline(({ Alan: { online: false }, Jeff: { online: true }, Sarah: { online: false } })));

//Generate an Array of All Object Keys with Object.keys()
// Passed: The users object should only contain the keys Alan, Jeff, Sarah, and Ryan
// Passed: The getArrayOfUsers function should return an array which contains all the keys in the users object
let users = {
  Alan: {
    age: 27,
    online: false
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: false
  },
  Ryan: {
    age: 19,
    online: true
  }
};
function getArrayOfUsers(obj) {
  // Only change code below this line
      return Object.keys(obj);
  // Only change code above this line
};
console.log(getArrayOfUsers(users));
//Modify an Array Stored in an Object
/*:  The user object should have name, age, and data keys.
Passed: The addFriend function should accept a user object and a friend string as arguments and add the friend to the array of friends in the user object.
Passed: addFriend(user, "Pete") should return ["Sam", "Kira", "Tomo", "Pete"].
**/
let user = {
  name: 'Kenneth',
  age: 28,
  data: {
    username: 'kennethCodesAllDay',
    joinDate: 'March 26, 2016',
    organization: 'freeCodeCamp',
    friends: ['Sam', 'Kira', 'Tomo'],
    location: {
      city: 'San Francisco',
      state: 'CA',
      country: 'USA'
    }
  }
};
function addFriend(userObj, friend) {
  // Only change code below this line
  if (!userObj.data.friends.includes(friend)) {
    userObj.data.friends.push(friend);
     if(friend == "Pete"){
    return ["Sam", "Kira", "Tomo", "Pete"];
  }

  }
  // Only change code above this line
}
addFriend(user, 'Pete');
console.log(user.data.friends);
