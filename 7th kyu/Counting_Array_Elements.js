/*
DESCRIPTION:
Write a function that takes an array and counts the number of each unique element present.

count(['james', 'james', 'john']) 
#=> { 'james': 2, 'john': 1}
*/

//Solution    
function count(array) {
    //variable that holds the object
    const obj = {}
    //loop through the array placing keys into the object and their corresponding occurrences
    for (i = 0; i < array.length; i++) {
        if (!obj[array[i]]) {
            obj[array[i]] = 0
        }
        obj[array[i]]++

    }
    //return the object
    return obj
}