/*
DESCRIPTION:
Complete the function to determine the number of bits required to convert integer A to integer B (where A and B >= 0)

The upper limit for A and B is 216, int.MaxValue or similar.

For example, you can change 31 to 14 by flipping the 4th and 0th bit:

 31  0 0 0 1 1 1 1 1
 14  0 0 0 0 1 1 1 0
---  ---------------
bit  7 6 5 4 3 2 1 0
Thus 31 and 14 should return 2.

*/

//Solution    
function convertBits(a, b) {
    //variable that holds the max length of the given arguments
    const max = Math.max(a.toString(2).length, b.toString(2).length)
    //variable that hold the binary of the given arguments
    const aBin = a.toString(2).padStart(max, '0')
    const bBin = b.toString(2).padStart(max, '0')
    //returned the final amount of bit needed to change to make b equal a
    return [...aBin].reduce((sum, num, i) => num == bBin[i] ? sum + 0 : sum + 1, 0)
}