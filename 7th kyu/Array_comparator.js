/*
DESCRIPTION:
You have two arrays in this kata, every array contain only unique elements. Your task is to calculate number of elements in first array which also are in second array.

*/

//Solution    
function matchArrays(v, r) {
    //variablel that holds the matching elements
    const arr = []
    //loop that goes through the the v array
    for (i = 0; i < v.length; i++) {
        //loop that goes through the r array
        for (o = 0; o < r.length; o++) {
            //if the elements match, then push the matching element to the array
            if (v[i] == r[o]) {
                arr.push(v[i])
                break
            }
        }
    }
    //returned the final count of matching elements
    return arr.length
}