// // //   function useMagnifyingGlass():string{
// // function useMagnifyingGlass() {
// //     console.log('I will use my magnifying glass.');
// // }
// // useMagnifyingGlass();
// // function determineCulprit() {
// //     return Math.floor(Math.random() * 2 + 1);
// // }
//   function doSleuthing(numberOfClues, clue1, clue2, suspect1, suspect2){
//     console.log('I am a famous detective and I will solve the crime.');
//     // let unnecessaryVariable = 'Why is this here?'
//     // var unnecessaryVariable = useMagnifyingGlass();
//     console.log('Now I consider the first clue: ', clue1);
//     console.log('Now I consider the second clue: ', clue2);
//     // let culpritNumber:string = determineCulprit();
//     // var culpritNumber = determineCulprit();
//     console.log('Now, I will return to you the culprit. There but for the grace of God go we.');
//     if (numberOfClues == 1 ) {
//         return (suspect1);
//     }
//     if (numberOfClues== 2) {
//         return (suspect2);
//     }
//     return "I couldn't figure out who drank the priceless milk. :( :(";
// }
// answer = doSleuthing(4, 'The parrot heard everything!', 'All the doors and windows were shut from the INSIDE.', 'Burglar Bob', 'Saint Sam');
// // var answer = doSleuthing(2, 'The parrot heard everything!', 'All the doors and windows were shut from the INSIDE.');
// console.log('The culprit was none other than ', answer, '!');
// create a random data type arrays
var randomArrays = ['string', 45154, 'c.ronaldo', true, null, undefined];
// create a function that detects unsimilar data types in elements of array randomArrays
// function detectArray(noErr: string){
//     if(typeof randomArrays !== 'string'){
//         console.log("There are mixed elements in our randomArrays");
//     }
//     return `${noErr}`
// }
// detectArray("No mixed elements or error found"); // output must be There are mixed elements in our randomArrays
// let customersArray = ['Custy Stomer', 'C. Oostomar', 'C.U.S. Tomer', 3432434, 'Custo Mer', 'Custopher Ustomer', 3432435, 'Kasti Yastimeur'];
// function checkCustomersArray(el:number){
//     console.log(`Type error: ${el} should be a string!`);
// }
// checkCustomersArray(3432434);
// checkCustomersArray(3432435);
// function stringPush(val:string){
//      if(typeof val === 'string'){
//          customersArray.push(val);
//     }  
// }
// stringPush("strings");
//    let homeCoordinates: [number, number, string, number] = [7,11,"is my rollnumber", 15];
//    let groundCoordinates: [string,string,number] = ["vowel", "sounds", 5];
//    // let's use variables into function as rest parameters
//    function firstPr(...homeCoordinates){
//        return `this is ${homeCoordinates}`;
//    }
//    console.log(firstPr);
//    function secondPr(...groundCoordinates){
//        console.log(secondPr);
//    }
function exaRestParam(re1) {
    var restParam = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restParam[_i - 1] = arguments[_i];
    }
    console.log(re1);
    console.log(restParam); // output ["param1st", "param2nd"]
}
exaRestParam("param1st", "param2nd", "param3rd");
function Test(me) {
    var restParam = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restParam[_i - 1] = arguments[_i];
    }
    console.log(me); // 1
    console.log(restParam); // [1,2]
}
Test(1, 2, 3);
var yt = [4, 5, 6];
function spread(j, i, k) {
    console.log(j);
    console.log(i);
    console.log(k);
}
spread.apply(void 0, yt);
