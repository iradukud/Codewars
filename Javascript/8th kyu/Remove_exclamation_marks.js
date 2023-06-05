/*
Write function RemoveExclamationMarks which removes all exclamation marks from a given string.
*/

//answer
//Split the string into an array and removing the !'s
//join the array back together 
const removeExclamationMarks = s => s.split('!').join('')