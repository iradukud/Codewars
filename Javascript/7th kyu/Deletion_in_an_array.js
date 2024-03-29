/*
DESCRIPTION:
The deleteValues function takes an array and removes elements that answer true to the pred function.

For some reason, some of the elements of the array for which the predicate holds are not deleted...

Can you fix the code?

*/

//Solution  
function deleteValues(array, pred) {
    for (i = array.length; i >= 0; i--) {
        if (pred(array[i])) {
            array.splice(i, 1);
        }
    }
    return array;
}
