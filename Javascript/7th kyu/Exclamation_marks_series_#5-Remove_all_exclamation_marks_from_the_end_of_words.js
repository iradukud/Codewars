/*
DESCRIPTION:
Task
Remove all exclamation marks from the end of words. Words are separated by a single space. There are no exclamation marks within a word.

Examples
remove("Hi!") === "Hi"
remove("Hi!!!") === "Hi"
remove("!Hi") === "!Hi"
remove("!Hi!") === "!Hi"
remove("Hi! Hi!") === "Hi Hi"
remove("!!!Hi !!hi!!! !hi") === "!!!Hi !!hi !hi"

*/

//Solution    
//function remove(string) {
//coding and coding....
//  return string.split(' ').map(x => x.endsWith('!') ? x.slice(0, x.lastIndexOf('i') + 1) : x).join(' ')
//}

function remove(string) {
    //variable that holds each word in the given string separately as elements
    const strArr = string.split(' ')
    //variable that will hold the words from strArr but without ending in '!'
    const arr = []
    //loop that goes through each word
    for (i = 0; i < strArr.length; i++) {
        //if the word ends with '!' do the following
        if (strArr[i].endsWith('!')) {
            //loop that goes through the current word, starting from the back
            for (z = strArr[i].length - 1; z >= 0; z--) {
                //if the character is not '!' push the word without the last '!' into arr
                if (strArr[i][z] != '!') {
                    arr.push(strArr[i].slice(0, z + 1))
                    break
                }
            }
            //else push the word to arr
        } else {
            arr.push(strArr[i])
        }
    }
    //return the final str from arr
    return arr.join(' ')
}