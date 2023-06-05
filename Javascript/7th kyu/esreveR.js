/*
DESCRIPTION:
Write a function reverse which reverses a list (or in clojure's case, any list-like data structure)

(the dedicated builtin(s) functionalities are deactivated)
*/

//Solution    
reverse = function (array) {
    //variable that holds the arr which will be returned (reversed)
    let revArr = []
    //loop that run the length of the array and adds each element to the front of the created array
    for (i = 0; i < array.length; i++) {
        revArr.unshift(array[i])
    }
    //returned the reversed array
    return revArr
}