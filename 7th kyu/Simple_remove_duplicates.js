/*
DESCRIPTION:
Remove the duplicates from a list of integers, keeping the last ( rightmost ) occurrence of each element.

Example:
For input: [3, 4, 4, 3, 6, 3]

remove the 3 at index 0
remove the 4 at index 1
remove the 3 at index 3
Expected output: [4, 6, 3]

More examples can be found in the test cases.

Good luck!
*/

//Solution    
function solve(arr) {
    //reversed the array (allows use to keep the right most element)
    const arrRev = arr.reverse()
    //variable that holds the right-most unique elements of the original array
    let newArr = []
    //loop that goes through the whole arr
    for (i = 0; i < arr.length; i++) {
        //if the new array does'nt have the element then place it inside it
        newArr.includes(arrRev[i]) ? null : newArr.push(arrRev[i])
    }
    //return the new array reversed to get the original sequence
    return newArr.reverse()
}