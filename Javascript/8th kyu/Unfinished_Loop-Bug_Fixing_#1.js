/*
Unfinished Loop - Bug Fixing #1
Oh no, Timmy's created an infinite loop! Help Timmy find and fix the bug in his unfinished for loop!
*/

//answer
function createArray(number) {
    // a new variable that hold an empty array
    var newArray = [];
    //loop that push the counter number into the new array till number
    for (var counter = 1; counter <= number; counter++) {
        newArray.push(counter);
    }
    //return newly created array
    return newArray;
}