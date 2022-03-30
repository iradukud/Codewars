/*
Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

Example:

["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]
*/

//answer
//creates a new array from the old array containing the even numbered elements plus the first element
const removeEveryOther=arr=> arr.filter((_,i)=>i%2===0)