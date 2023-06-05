/*
DESCRIPTION:
Imagine a circle. To encode the word codewars, we could split the circle into 8 parts (as codewars has 8 letters):

Then add the letters in a clockwise direction:Then remove the circle:
If we read the result from left to right, we get csordaew.

Decoding is the same process in reverse. If we decode csordaew, we get codewars.

Examples:
encode "codewars" -> "csordaew"
decode "csordaew" -> "codewars"
encode "white" -> "wehti"
decode "wehti" -> "white"

*/

//Solution  
function encode(s) {
    s = [...s]
    let encodeStr = ''
    let count = 0
    while (s.length != 0) {
        if (count % 2 == 0) {
            encodeStr += s.splice(0, 1)
        } else {
            encodeStr += s.splice(-1, 1)
        }
        count++
    }
    return encodeStr
}

function decode(s) {
    s = [...s]
    return s.filter((x, i) => i % 2 == 0).join('') + s.filter((x, i) => i % 2 != 0).reverse().join('')
}