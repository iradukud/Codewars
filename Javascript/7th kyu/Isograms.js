/*
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true
"aba" --> false
"moOse" --> false (ignore letter case)

*/

//answer    
function isIsogram(str) {
    //converted the characters to lower case and sorted them alphabetically
    const newstr = str.toLowerCase().split('').sort().join('')
    //variable to keep count of repeated characters
    let rep = 0
    //loop that checks for repeated characters
    for (i = 0, j = 1; i < newstr.length; i++, j++) {
        if (newstr[i] == newstr[j]) {
            rep++
        }
    }
    //return boolean based on the number of repeated characters
    return rep == 0
}