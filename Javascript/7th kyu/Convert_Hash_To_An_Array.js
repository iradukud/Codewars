/*
DESCRIPTION:
Convert a hash into an array. Nothing more, Nothing less.

{name: 'Jeremy', age: 24, role: 'Software Engineer'}
should be converted into

[["name", "Jeremy"], ["age", 24], ["role", "Software Engineer"]]
Note: The output array should be sorted alphabetically.

Good Luck!

*/

//Solution  
function convertHashToArray(hash) {
    //variable that holds all the values from the hash
    const value = Object.values(hash)
    ////variable that holds all the keys from the hash
    const key = Object.keys(hash)
    //variable that will hold all the subarrays
    const arr = []
    //loop that runs the length of the value arr and places the key and value into the arr as a subarray
    for (let i = 0; i < value.length; i++) { arr.push([key[i], value[i]]) }
    //returned the final arr sorted aphabetically 
    return arr.sort((a, b) => a[0] > b[0])
}