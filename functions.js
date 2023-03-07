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