/*
Simple challenge - eliminate all bugs from the supplied code so that the code runs and outputs the expected value. Output should be the length of the longest word, as a number.

There will only be one 'longest' word.
*/

//answer
function findLongest(str) {
    //variable that holds all the words individually
    const spl = str.split(" ");
    //variable that keeps count of the longest word's characters
    let longest = 0
    //loops through all the elements in the array and records the string count of the longest word
    for (i = 0; i < spl.length; i++) {
        if (spl[i].length > longest) {
            longest = spl[i].length
        }
    }
    //returns the string count of the longest word
    return longest
}
