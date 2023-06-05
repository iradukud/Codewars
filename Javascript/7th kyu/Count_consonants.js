/*
DESCRIPTION:
Write a function consonantCount, consonant_count or ConsonantCount that takes a string of English-language text and returns the number of consonants in the string.

Consonants are all letters used to write English excluding the vowels a, e, i, o, u.

*/

//Solution  
function consonantCount(str) {
    //returned the count of consonants in the sring
    return [...str.toLowerCase()].reduce((sum, x) => 'bcdfghjklmnpqrstvwxyz'.includes(x) ? sum + 1 : sum, 0)
}