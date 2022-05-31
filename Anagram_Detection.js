/*
An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

Note: anagrams are case insensitive

Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

Examples
"foefet" is an anagram of "toffee"

"Buckethead" is an anagram of "DeathCubeK"
*/

//answer    
var isAnagram = function(test, original) {
  //made all the parameters lowercase and then a comparision letter by letter
  //return a boolean based on whether they had the same characters
return [...test.toLowerCase()].sort().join('')==[...original.toLowerCase()].sort().join('')
}
