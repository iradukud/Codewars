/*
DESCRIPTION:
The vowel substrings in the word codewarriors are o,e,a,io. The longest of these has a length of 2. Given a lowercase string that has alphabetic characters only (both vowels and consonants) and no spaces, return the length of the longest vowel substring. Vowels are any of aeiou.

Good luck!
*/

//Solution    
function solve(s) {
    //variable that holds the max sequence
    let max = 0
    //variable that holds the current count of the vowel sequence
    let countVow = 0
    //loop that goes through the entire string
    for (i = 0; i < s.length; i++) {
        //if the character is a vowel ad to current count
        if (s[i] == 'a' || s[i] == 'e' || s[i] == 'i' || s[i] == 'o' || s[i] == 'u') {
            countVow++
        } else {
            //if the character is not a vowel save the max sequence and reset current sequence
            if (countVow > max) {
                max = countVow
            }
            countVow = 0
        }
    }
    //returnedd the max sequence
    return max
}