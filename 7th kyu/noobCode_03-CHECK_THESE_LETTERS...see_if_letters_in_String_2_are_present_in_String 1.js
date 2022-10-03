/*
DESCRIPTION:
Write a function that checks if all the letters in the second string are present in the first one at least once, regardless of how many times they appear:

["ab", "aaa"]    =>  true
["trances", "nectar"]    =>  true
["compadres", "DRAPES"]  =>  true
["parses", "parsecs"]    =>  false
Function should not be case sensitive, as indicated in example #2. Note: both strings are presented as a single argument in the form of an array.

*/

//Solution  
function letterCheck(arr) {
    const arr2 = arr.map(x => x.toLowerCase())
    return [...arr2[1]].every(x => arr2[0].includes(x))
}