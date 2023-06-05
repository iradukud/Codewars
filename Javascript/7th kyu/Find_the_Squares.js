/*
DESCRIPTION:
Problem
Complete the function that takes an odd integer (0 < n < 1000000) which is the difference between two consecutive perfect squares, and return these squares as a string in the format "bigger-smaller"

Examples
9  -->  "25-16"
5  -->  "9-4"
7  -->  "16-9"

*/

//Solution    
const findSquares = num => {
    //variable the holds the calculated difference between the squares
    let diff = 0
    //variable that keeps count of the current perfect square
    let count = 1
    //loop that runs till our calculated difference equals the given difference
    while (diff != num) {
        diff = (1 + count) ** 2 - count ** 2
        count++
    }
    //return the adjacent squares that produce the give num as a string 
    return `${count ** 2}-${(count - 1) ** 2}`
}