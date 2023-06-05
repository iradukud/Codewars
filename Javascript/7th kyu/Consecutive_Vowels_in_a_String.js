/*
DESCRIPTION:
Consecutive Vowels
You are given a random string of lower-case letters. Your job is to find out how many ordered and consecutive vowels there are in the given string beginning from 'a'. Keep in mind that the consecutive vowel to 'u' is 'a' and the cycle continues.

Return an integer with the length of the consecutive vowels found.

This is better explained with a couple of examples:

You are given the string "agrtertyfikfmroyrntbvsukldkfa". The logic is that you start from the 'a' and make your way right. The next vowel is an 'e' and it is the consecutive vowel, then 'i' and so forth until you get to 'u'. If you keep moving right you find 'a' which happens to be the consecutive vowel. Return 6.
This is a slightly trickier example: you are given the string "erfaiekjudhyfimngukduo". As you move right you ignore all vowels until you get to the 'a', then ignore the rest until you get to the 'e', which is the consecutive vowel, and so forth until you get to the 'o'. Return 4.
Note
For this kata, the vowels are 'a', 'e', 'i', 'o', 'u', in that order. 'y' is not considered a vowel in this kata.

Good luck!
*/

//Solution    
function getTheVowels(word) {
    //variable that holds the vowels
    const vowels = ['a', 'e', 'i', 'o', 'u']
    //variable that only holds the vowels from the original string
    const vowelOnly = word.match(/[aeiou]/g).join('')
    //variable that holds the current index position
    let currVowel = 0
    //variable that keeps count of the consective vowels
    let count = 0
    //loops through the vowel string
    for (i = 0; i < vowelOnly.length; i++) {
        //if the current index passes equals 5 reset it back to 0
        if (currVowel == 5) {
            currVowel = 0
        }
        //if the character equals the current vowel add one two the count and index
        if (vowelOnly[i] == vowels[currVowel]) {
            count++
            currVowel++
        }
    }
    //returned the final vowel sequence count
    return count
}