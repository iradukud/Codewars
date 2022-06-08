/*
Find the number with the most digits.

If two numbers in the argument array have the same number of digits, return the first one in the array.
*/

//answer    
function findLongest(arr) {
    //converted the arr elements to their lengths
    const arrLeng = [...arr].map(x => ('' + x).length)
    //found the highest length value
    const firstMax = Math.max(...arrLeng)
    //found the position of the first element with highest length value 
    const firstIndex = arrLeng.indexOf(firstMax)
    //return that position from original arr
    return arr[firstIndex]
}