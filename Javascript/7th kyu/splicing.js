/*
DESCRIPTION:
The object of this kata is to create a function called removeValue that removes all of a certain value from an array using .splice() and then returns the array.

Please note that Array.prototype.filter is also disabled.

If the array is empty or has no element to remove it should return false.

example:

    arr = [1, 2, 1, '1', 3]
    arr.removeValue(1); // returns [2, '1', 3]
For more information on .splice() visit http://www.w3schools.com/jsref/jsref_splice.asp .

*/

//Solution  
Array.prototype.removeValue = function (thing) {
    if (this.indexOf(thing) == -1) {
        return false
    }
    let i
    while ((i = this.indexOf(thing)) > -1) {
        this.splice(i, 1)
    }
    return this
}