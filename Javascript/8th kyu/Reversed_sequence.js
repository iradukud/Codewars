/*
Build a function that returns an array of integers from n to 1 where n>0.

Example : n=5 --> [5,4,3,2,1]
*/

//answer
const reverseSeq = n => {
    //A variable which holds the array sequence of n
    const reverseOfN = []
    //loop the inputs number into array starting from n till 0
    for (i = n; i > 0; i--) {
        reverseOfN.push(i)
    }
    //return sequenced array
    return reverseOfN
}