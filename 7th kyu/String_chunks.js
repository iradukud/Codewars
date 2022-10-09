/*
DESCRIPTION:
You should write a function that takes a string and a positive integer n, splits the string into parts of length n and returns them in an array. It is ok for the last element to have less than n characters.

If n is not a number or not a valid size (> 0) (or is absent), you should return an empty array.

If n is greater than the length of the string, you should return an array with the only element being the same string.

Examples:

stringChunk('codewars', 2) // ['co', 'de', 'wa', 'rs']
stringChunk('thiskataeasy', 4) // ['this', 'kata', 'easy']
stringChunk('hello world', 3) // ['hel', 'lo ', 'wor', 'ld']
stringChunk('sunny day', 0) // []

*/

//Solution  
function stringChunk(str, n) {
    if (n < 1 || typeof n != 'number' || n === undefined) { return [] }
    const arr = []
    for (i = 0; i < str.length; i += n) {
        arr.push(str.slice(i, i + n))
    }
    return arr
}