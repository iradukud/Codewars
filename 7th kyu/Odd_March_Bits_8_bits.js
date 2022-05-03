/*
Odd bits are getting ready for Bits Battles.

Therefore the n bits march from right to left along an 8 bits path. Once the most-significant bit reaches the left their march is done. Each step will be saved as an array of 8 integers.

Return an array of all the steps.

1 <= n <= 8

NOTE: n != 0, because n represents the number of 1s.

Examples
This resembles a simple 8 LED chaser:

n = 3

00000111
00001110
00011100
00111000
01110000
11100000
n = 7

01111111
11111110
*/

//answer    
function bitMarch(n) {
    let zeros = 8 - n
    let steps = [[...Array(8)].map((_, i) => i < zeros ? 0 : 1)]
    for (i = 1; i <= zeros; i++) {
        steps.push(
            steps[i - 1].reduce((byte, curBit, i, lastStep) => [...byte, lastStep[i + 1] ? 1 : 0], [])
        )
    }
    return steps
}