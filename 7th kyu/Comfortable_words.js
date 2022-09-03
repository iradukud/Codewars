/*
DESCRIPTION:
A comfortable word is a word which you can type always alternating the hand you type with (assuming you type using a QWERTY keyboard and use fingers as shown in the image below).

That being said, complete the function which receives a word and returns true if it's a comfortable word and false otherwise.

The word will always be a string consisting of only ascii letters from a to z.



To avoid problems with image availability, here's the lists of letters for each hand:

Left: q, w, e, r, t, a, s, d, f, g, z, x, c, v, b
Right: y, u, i, o, p, h, j, k, l, n, m
Examples
"yams"  -->  true
"test"  -->  false

*/

//Solution  
const comfortableWord = word => {
    //variable that holds each character typed hand as L for left and R for right
    const RL = [...word].map(x => `qwertasdfgzxcvb`.includes(x) ? 'L' : 'R')
    //loop that goes the length of word
    for (let curr = RL[0], i = 1; i < RL.length; i++) {
        //if the same hand is used return false
        if (curr == RL[i]) {
            return false
        } else {
            //else go to next character
            curr = RL[i]
        }
    }
    //if loop finds no hand reps then return true
    return true
}