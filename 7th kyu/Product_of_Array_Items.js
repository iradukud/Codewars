/*
DESCRIPTION:
Calculate the product of all elements in an array.

If the array is null or is empty, the function should return null.

*/

//Solution    
function product(values) {
    //if give the product of the array, if an empty array or null is given as a value return null instead
    return values == null || values.length == 0 ? null : values.reduce((prod, num) => prod * num, 1)
}