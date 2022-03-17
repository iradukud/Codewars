/*
    Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

    For example,

    [true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true]
    The correct answer would be 17.

    Hint: Don't forget to check for bad values like null/undefined
*/

//answer
function countSheeps(arrayOfSheep) {
    //create total sheep count variable and set to zero
    let sheepsPresent = 0
    //loop that adds to the total sheep count if variable is present  
    for (let i = 0; i < arrayOfSheep.length; i++) {
        if (arrayOfSheep[i])
            sheepsPresent += 1
    }
    // returns total amount of sheeps present  
    return sheepsPresent
}