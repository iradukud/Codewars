/*
DESCRIPTION:
Implement a function which filters out array values which satisfy the given predicate.

reject([1, 2, 3, 4, 5, 6], (n) => n % 2 === 0)  =>  [1, 3, 5]

*/

//Solution    
function reject(array, predicate) {
    //variable that holds the elements which statisfy the predicate (function)
    const arr = array.filter(predicate)
    //then return the original array with the above elements removed
    return array.filter(x => !arr.includes(x))
}