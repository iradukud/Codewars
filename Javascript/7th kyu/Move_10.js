/*
DESCRIPTION:
Move every letter in the provided string forward 10 letters through the alphabet.

If it goes past 'z', start again at 'a'.

Input will be a string with length > 0.

*/

//Solution    
function moveTen(s) {
    //variable that holds the arrau of letters 
    const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    //return the string with every character move moved up 10 spaces
    return [...s.toUpperCase()].map(x => letters[((x.charCodeAt(0) - 65) + 10) % 26]).join('')
}