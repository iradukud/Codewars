/*
DESCRIPTION:
You have to create a method "compoundArray" which should take as input two int arrays of different length and return one int array with numbers of both arrays shuffled one by one.

Input - {1,2,3,4,5,6} and {9,8,7,6} 
Output - {1,9,2,8,3,7,4,6,5,6}

*/

//Solution  
function compoundArray(a, b) {
    //variable that holds the combined array elements
    let arr = []
    //loop that goes the length of the longest arr paramenter
    for (let i = 0; i < (a.length > b.length ? a.length : b.length); i++) {
        //places each array element into the created array
        arr.push(a[i])
        arr.push(b[i])
    }
    //returned the final array with all the undefined values removed
    return arr.filter(v => v != undefined)
}