/*
DESCRIPTION:
Complete the function that returns an array of length n, starting with the given number x and the squares of the previous number. If n is negative or zero, return an empty array/list.

Examples
2, 5  -->  [2, 4, 16, 256, 65536]
3, 3  -->  [3, 9, 81]
*/

//Solution    
function squares(x, n) {
    //variable that holds the current square  
    let curr = 0
    //variable that holds the squared sequence
    const squaresSeq = []
    //loop that places the the squared values into the arr
    for (i = 0; i < n; i++) {
        if (i == 0) {
            curr = x
        } else {
            curr **= 2
        }
        squaresSeq.push(curr)
    }
    //returned the squared arr sequence
    return squaresSeq
}