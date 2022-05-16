/*
Task
Coding in function giveMeFive, function accept 1 parameter:obj, it's an object.

You need to the traverse the obj, if the length of the object key equals to 5, then push the key value to the array (you need to define the array by yourself, this time I won't help you). Additionally push the value to the array as well, if the length of the value is equal to 5.

Return the five after works finished.

You should use for..in in your code, otherwise, your solution may not pass this kata. Don't learn bad habits from those lazy guys ;-)
*/

//answer    
function giveMeFive(obj) {
    //variabe that hold an items of items for the object (key or value that equal 5 in length)
    const arr = []
    //loop that places the key and/or value into the array
    for (const key in obj) {
        if (key.length == 5) { arr.push(key) }
        if (obj[key].length == 5) { arr.push(obj[key]) }
    }
    //return the array
    return arr
}