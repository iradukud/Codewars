/*
In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:

make as few changes as possible.
if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.
For example:

solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
solve("coDE") = "code". Upper == lowercase. Change all to lowercase.
More examples in test cases. Good luck!

Please also try:

Simple time difference

Simple remove duplicates
*/

//answer    
function solve(s) {
    //compared the the amount of lower cased characters in the s string to it's upper cased characters
    //if the lower cased characters were greater or equal then return s with all lower cases
    //else return s with all upper cases
    return [...s].filter(x => x == x.toLowerCase()).length >= [...s].filter(x => x == x.toUpperCase()).length ? s.toLowerCase() : s.toUpperCase()
}