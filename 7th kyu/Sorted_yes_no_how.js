/*
Complete the method which accepts an array of integers, and returns one of the following:

"yes, ascending" - if the numbers in the array are sorted in an ascending order
"yes, descending" - if the numbers in the array are sorted in a descending order
"no" - otherwise
You can assume the array will always be valid, and there will always be one correct answer.
*/

//answer    
function isSortedAndHow(array) {
    //the array is converted to a string and compared to sorted string arrays 
    //if it's sorted return string message saying it's sorted order
    //else say it's not sorted
    if (array.join('') == [...array].sort((a, b) => a - b).join('')) {
        return 'yes, ascending'
    } else if (array.join('') == [...array].sort((a, b) => b - a).join('')) {
        return 'yes, descending'
    } else {
        return 'no'
    }
}