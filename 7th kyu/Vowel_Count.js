/*
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.
*/

//answer    
function getCount(str) {
    //replaced all the vowels with a exclamation mark
    //will save us time with if statements
    const modString = str.replace(/[aeiou]/g, '!')
    //created a variable that keeps count of the vowels
    let vowelsCount = 0
    //loop that goes through the whole string and adds to count if a vowel is present 
    for (i = 0; i < str.length; i++) {
        if (modString[i] == '!')
            vowelsCount++
    }
    // return the vowels count
    return vowelsCount;
}
