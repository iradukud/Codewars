/*
DESCRIPTION:
This kata requires you to write a function which merges two strings together. It does so by merging the end of the first string with the start of the second string together when they are an exact match.

"abcde" + "cdefgh" => "abcdefgh"
"abaab" + "aabab" => "abaabab"
"abc" + "def" => "abcdef"
"abc" + "abc" => "abc"
NOTE: The algorithm should always use the longest possible overlap.

"abaabaab" + "aabaabab" would be "abaabaabab" and not "abaabaabaabab"

*/

//Solution    
function mergeStrings(first, second) {
    //loop that goes through the first stringn
    for (let i = 0; i < first.length; i++) {
        //variable that holds the first string, starting from i  
        const firstSlice = first.slice(i);
        //if the second string starts with the current slice
        //return the left out parts of the slice + the second string
        if (second.startsWith(firstSlice)) {
            return first.slice(0, i) + second;
        }
    }
    //else returnd both strings combined
    return first + second;
}