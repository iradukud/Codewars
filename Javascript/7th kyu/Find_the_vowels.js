/*
We want to know the index of the vowels in a given word, for example, there are two vowels in the word super (the second and fourth letters).

So given a string "super", we should return a list of [2, 4].

Some examples:
Mmmm  => []
Super => [2,4]
Apple => [1,5]
YoMama -> [1,2,4,6]
NOTES
Vowels in this context refers to: a e i o u y (including upper case)
This is indexed from [1..n] (not zero indexed!)
*/

//answer    
function vowelIndices(word) {
    //variable that hold the lower case version of word
    const wordLower = word.toLowerCase()
    //variable the holds the positions of vowels
    const positionVowels = []
    //loop that starts from 0 and goes to the length of word
    for (i = 0; i < word.length; i++) {
        //if the word is a vowel put it's index plus 1 in the array
        if (wordLower[i] == 'a' || wordLower[i] == 'e' || wordLower[i] == 'i' || wordLower[i] == 'o' || wordLower[i] == 'u' || wordLower[i] == 'y') {
            positionVowels.push(i + 1)
        }
    }
    //returned the array holding the vowel position
    return positionVowels
}