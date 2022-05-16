// //   function useMagnifyingGlass():string{
// function useMagnifyingGlass() {
//     console.log('I will use my magnifying glass.');
// }
// useMagnifyingGlass();
// function determineCulprit() {
//     return Math.floor(Math.random() * 2 + 1);
// }
  function doSleuthing(numberOfClues, clue1, clue2, suspect1, suspect2){
    console.log('I am a famous detective and I will solve the crime.');
    // let unnecessaryVariable = 'Why is this here?'
    // var unnecessaryVariable = useMagnifyingGlass();
    console.log('Now I consider the first clue: ', clue1);
    console.log('Now I consider the second clue: ', clue2);
    // let culpritNumber:string = determineCulprit();
    // var culpritNumber = determineCulprit();
    console.log('Now, I will return to you the culprit. There but for the grace of God go we.');
    if (numberOfClues == 1 ) {
        return (suspect1);
    }
    if (numberOfClues== 2) {
        return (suspect2);
    }
    return "I couldn't figure out who drank the priceless milk. :( :(";
}
answer = doSleuthing(4, 'The parrot heard everything!', 'All the doors and windows were shut from the INSIDE.', 'Burglar Bob', 'Saint Sam');
// var answer = doSleuthing(2, 'The parrot heard everything!', 'All the doors and windows were shut from the INSIDE.');
console.log('The culprit was none other than ', answer, '!');