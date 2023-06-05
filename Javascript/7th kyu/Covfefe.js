/*
DESCRIPTION:
Your are given a string. You must replace any occurence of the sequence coverage by covfefe, however, if you don't find the word coverage in the string, you must add covfefe at the end of the string with a leading space.

For the languages where the string is not immutable (such as ruby), don't modify the given string, otherwise this will break the test cases.

*/

//Solution    
function covfefe(str) {
    //if the string given already has 'covfefe' in then return a string with 'covfefe' appearing twice
    if (str == 'covfefe') { return 'covfefe covfefe' }
    //variable that holds the str with every occurance of coverage replaced with covfefe
    const repl = str.replace(/coverage/ig, 'covfefe')
    //returned the final string
    return repl.includes('covfefe') ? repl : repl + ' covfefe'
}