/*
DESCRIPTION:
In this kata you will have to change every letter in a given string to the next letter in the alphabet. You will write a function nextLetter (Javascript) / next_letter (Python, Ruby) to do this. The function will take a single parameter s (string).

Examples:

"Hello" --> "Ifmmp"

"What is your name?" --> "Xibu jt zpvs obnf?"

"zoo" --> "app"

"zzZAaa" --> "aaABbb"
Note: spaces and special characters should remain the same. Capital letters should transfer in the same way but remain capitilized.

*/

//Solution  
function nextLetter(str) {
    return [...str].map(x => 'zZ'.includes(x) ? String.fromCharCode(x.charCodeAt(0) - 25 + '') : !'! '.includes(x) ? String.fromCharCode(x.charCodeAt(0) + 1 + '') : x).join('')
}