/*
DESCRIPTION:
When provided with a String, capitalize all vowels

For example:

Input : "Hello World!"

Output : "HEllO WOrld!"

Note: Y is not a vowel in this kata.

*/

//Solution    
function swap(str) {
    //returned the str with all the vowels capitalized
    return [...str].map(x => x == 'a' || x == 'e' || x == 'i' || x == 'o' || x == 'u' ? x.toUpperCase() : x).join('')
}