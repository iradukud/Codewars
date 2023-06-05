/*
DESCRIPTION:
The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.

*/

//Solution  
function count(string) {
    const obj = {}
    string.split('').forEach(x => obj[x] ? obj[x]++ : obj[x] = 1)
    return obj
}