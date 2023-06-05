/*
DESCRIPTION:
You will get an array of numbers.

Every preceding number is smaller than the one following it.

Some numbers will be missing, for instance:

[-3,-2,1,5] //missing numbers are: -1,0,2,3,4
Your task is to return an array of those missing numbers:

[-1,0,2,3,4]

*/

//Solution  
function findMissingNumbers(arr) {
    //returned the missing items in the given array
    return Array.from({ length: arr.slice(-1) - arr[0] }, (_, i) => arr[0] + i).filter(x => !arr.includes(x))
}