/*
DESCRIPTION:
Create a function, called removeVowels (or remove_vowels), that takes a string argument and returns that same string with all vowels removed (vowels are "a", "e", "i", "o", "u").

removeVowels("drake") // => "drk"
removeVowels("aeiou") // => ""

*/

//Solution    
var removeVowels = function (str) {
    //returned the string with all the vowels removed
    return str.replace(/[aieou]/gi, '')
}