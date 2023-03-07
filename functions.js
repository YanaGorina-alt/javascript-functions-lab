/**
 * Write a function called minusOne that takes a parameter num.
 *  Assuming the argument is a number,
 *  print the argument -1.
 */
function minusOne(num){
    console.log(num-1);
}
minusOne(10);        // 9
minusOne(100);       // 99
minusOne(Infinity);  // Infinity

/**
 * Write a function makeSentence 
 * that takes three parameters 
 * and concatenates them into a fully formed sentence.
 */
function makeSentence(pronoun, verb, noun){
    console.log(`Oh boy, do ${pronoun} ${verb} ${noun} or what?`)
}
makeSentence('I', 'want', 'chimichangas');

/**
 * Write a function called getLastElement
 *  that takes a parameter arr.
    Invoke the function with an array as the argument.
    The function should print the last element within the array.
 */
function getLastElement(arr){
    console.log(arr[arr.length -1]);
}

getLastElement([1, 2, 3, 4, 5, 6]);       // 6
getLastElement(['a', 'b', 'c']);          // 'c'
getLastElement([[1, 2, 3], [4, 5, 6]]);   // [4, 5, 6]