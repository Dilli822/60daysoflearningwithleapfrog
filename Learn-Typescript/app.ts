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
    function detectArray(noErr:string | void){
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