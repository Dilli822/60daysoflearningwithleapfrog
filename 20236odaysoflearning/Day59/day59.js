// Extend Constructors to Receive Arguments Passed: Dog should receive an argument for name.
// Passed: Dog should receive an argument for color. Passed: Dog should have property numLegs set to 4.
// Passed: terrier should be created using the Dog constructor
function Dog(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 4;
  }
  let terrier = new Dog();
  terrier.name = "name";
  terrier.color = "white";
  // Verify an Object's Constructor with instanceof
  function House(numBedrooms) {
    this.numBedrooms = numBedrooms;
  }
  // Only change code below this line
  let myHouse = new House();
  myHouse.numBedrooms = 45;
  myHouse instanceof House;

  // Understand Own Properties ownProps should include the values numLegs and name.
  // Passed: You should solve this challenge without using the built in method Object.keys().
 // Passed: You should solve this challenge without hardcoding the ownProps array.
  function Bird(name) {
    this.name = name;
    this.numLegs = 2;
  }
  let canary = new Bird("Tweety");
  let ownProps = [];
  // Only change code below this line
  for(let property in canary){
    if(canary.hasOwnProperty(property)){
      ownProps.push(property);
    }
  }
  console.log(ownProps);

// Use Prototype Properties to Reduce Duplicate Code
function Dog(name) {
    this.name = name;
  }
  Dog.prototype.numLegs = 4;
  // Only change code above this line Passed: beagle should have a numLegs property.
//Passed: beagle.numLegs should be a number. Passed: numLegs should be a prototype property not an own property.
  let beagle = new Dog("Snoopy");
  console.log(beagle.numLegs);

  function Dog(name) {
    this.name = name;
  }
  // Iterate Over All Properties The ownProps array should only contain name.
 //Passed: The prototypeProps array should only contain numLegs. 
 // Passed: You should solve this challenge without using the built in method Object.keys().
  Dog.prototype.numLegs = 4;
  let beagle = new Dog("Snoopy");
  let ownProps = [];
  let prototypeProps = [];
  // Only change code below this line
  for(let property in beagle){
    if(beagle.hasOwnProperty(property)){
      ownProps.push(property);
    }else{
      prototypeProps.push(property);
    }
  }
  console.log(ownProps); console.log(prototypeProps);

  // Understand the Constructor Property joinDogFraternity should be defined as a function.
 // Passed: joinDogFraternity should return true if candidate is an instance of Dog.
// Passed: joinDogFraternity should use the constructor property.

  function Dog(name) {
    this.name = name;
  }
  let candidate = new Dog();
  // let joinDogFraternity = new Dog();
  // Only change code below this line
  function joinDogFraternity(candidate) {
    if(candidate.constructor ===  Dog){
      return true;
    }else{
      return false;
    }
  }
// Change the Prototype to a New Object
  function Dog(name) {
    this.name = name;
  }
  Dog.prototype = {
    // Only change code below this line
    numLegs: 4,
    eat: function(){
      console.log("dog eat with mouth");
    },
    describe: function(){
      console.log("My Dog name is " + this.name);
    }
  };
  //Remember to Set the Constructor Property when Changing the Prototype
function Dog(name) {
    this.name = name;
  }
  // Only change code below this line
  Dog.prototype = {
    constructor: Dog, // Dog.prototype should set the constructor property.
    numLegs: 4,
    eat: function() {
      console.log("nom nom nom");
    },
    describe: function() {
      console.log("My name is " + this.name);
    }
  };
  //Understand Where an Object’s Prototype Comes From
  function Dog(name) {
    this.name = name;
  }
  let beagle = new Dog("Snoopy");
  // Only change code below this line
  Dog.prototype.isPrototypeOf(beagle);

  // Understand the Prototype Chain All objects in JavaScript (with a few exceptions) have a prototype. Also, an object’s prototype itself is an object.
  function Dog(name) {
    this.name = name;
  }
  let beagle = new Dog("Snoopy");
  Dog.prototype.isPrototypeOf(beagle);  // yields true
  // Fix the code below so that it evaluates to true
  Object.prototype.isPrototypeOf(Dog.prototype);
// Use Inheritance So You Don't Repeat Yourself
  function Cat(name) {
    this.name = name;
  }
  Cat.prototype = {
    constructor: Cat, // Cat.prototype should not have the eat property.
  };
  function Bear(name) {
    this.name = name;
  }
  Bear.prototype = {
    constructor: Bear, // Bear.prototype should not have the eat property.
  };
  function Animal() { }
  Animal.prototype = {
    constructor: Animal,
    eat: function(){
      console.log("Animal eat with mouths"); // Animal.prototype should have the eat property.
    }
  };
// Inherit Behaviors from a Supertype
function Animal() { }
Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};
// Only change code below this line
let duck = Object.create(Animal.prototype); // duck variable should be initialised with Object.create. 
let beagle = Object.create(Animal.prototype); // Change this line Passed: The beagle variable should be initialised with Object.create.
// Set the Child's Prototype to an Instance of the Parent
function Animal() { }
Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};
function Dog() { } //Passed: Dog.prototype should be an instance of Animal.
// Only change code below this line
let beagle = new Dog();
Dog.prototype = Object.create(Animal.prototype);

// Reset an Inherited Constructor Property
function Animal() { }
function Bird() { }
function Dog() { }
Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);
// Only change code below this line
let duck = new Bird();
duck.constructor = Bird;
let beagle = new Dog(); // Passed: beagle.constructor should return Dog.
beagle.constructor = Dog;

//　Add Methods After Inheritance ,beagle should be an instanceof Animal.
function Animal() { } // beagle.bark() should log the string Woof!
Animal.prototype.eat = function() { console.log("nom nom nom"); };
function Dog() { }
// Only change code below this line
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.bark = function(){
  console.log("Woof!");
}
// Only change code above this line
let beagle = new Dog();

// Override Inherited Methods
function Bird() { }
Bird.prototype.fly = function() { return "I am flying!"; };
function Penguin() { }
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;
// Only change code below this line
Penguin.prototype.fly = function(){ return "Alas, this is a flightless bird."}; // overridden 
// Only change code above this line
let penguin = new Penguin();
console.log(penguin.fly());

// Use a Mixin to Add Common Behavior Between Unrelated Objects
let bird = {
    name: "Donald",
    numLegs: 2
  };
  let boat = {
    name: "Warrior",
    type: "race-boat"
  };
  // Only change code below this line
  let glideMixin = function(obj){
    obj.glide = function(){
      console.log("Lets fly above the sky");
    };
  } 
  glideMixin(bird); //　Your code should use the glideMixin on the bird object to give it the glide method.
  glideMixin(boat);  //  Your code should use the glideMixin on the boat object to give it the glide method.
// Use Closure to Protect Properties Within an Object from Being Modified Externally
  function Bird() {
    let weight = 15; // private data member
    this.getWeight = function(){
      return weight;
    }
  }
  // Anonymous Understand the Immediately Invoked Function Expression (IIFE)
  // Before Anonymous
function makeNest() {
    console.log("A cozy nest is ready");
  }
  makeNest();
  // After Anonymous
  (function(){ console.log ("Anonymous function"); })();
  
   // Use an IIFE to Create a Module
  // An immediately invoked function expression (IIFE) is often used to group related functionality into a single object or module. 
  // For example, an earlier challenge defined two mixins:

  let isCuteMixin = function(obj) {
    obj.isCute = function() {
      return true;
    };
  };
  let singMixin = function(obj) {
    obj.sing = function() {
      console.log("Singing to an awesome tune");
    };
  };
  
  let funModule = (function() {
    return {
      isCuteMixin: function(obj) {
        obj.isCute = function() {
          return true;
        };
      },
      singMixin: function(obj) {
        obj.sing = function() {
          console.log("Singing to an awesome tune");
        };
      }
    };
  })();
  
  // Test the implementation
  const testObject = {};
  funModule.isCuteMixin(testObject);
  funModule.singMixin(testObject);
  
  console.log(testObject.isCute()); // Output will be: true
  testObject.sing(); // Output will be: "Singing to an awesome tune"
  