/*
DESCRIPTION:
The Array's reverse() method has gone missing! Re-write it, quick-sharp!

When this method is called, it reverses the order of the items in the original array. Then then it returns that same, original array. No new arrays should need to be created to pass this kata.

Here's an example:

var input = [1, 2, 3, 4];
input.reverse(); // == [4, 3, 2, 1]  // returned by .reverse()
input;           // == [4, 3, 2, 1]  // items reordered in the original array

*/

//Solution  
Array.prototype.reverse = function () {
    //variable that holds the passed array and removes them from the passed array
    const arr = this.splice(0)
    //loop that runs the length of arr 
    while (arr.length) {
        //push each element to the back of the orignally passed array
        this.push(arr.pop());
    }
    //returned back the originally passed array
    return this
}