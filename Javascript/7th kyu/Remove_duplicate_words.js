/*
Your task is to remove all duplicate words from a string, leaving only single (first) words entries.

Example:

Input:

'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

Output:

'alpha beta gamma delta'
*/

//answer    
function removeDuplicateWords(s) {
    //created an array that holds all the unique words
    const arrAns = []
    //turn the string into a array of it's word
    const sArr = s.split(' ')
    //looped through all the words in s
    for (i = 0; i < sArr.length; i++) {
        //checks if the word is in created array (arrAns), if it is place it inside it
        if (!arrAns.includes(sArr[i])) {
            arrAns.push(sArr[i])
        }
    }
    //returned a string with only unqiue words
    return arrAns.join(' ')
}