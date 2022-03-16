/*
It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string.
You don't have to worry with strings with less than two characters.
*/

//answer
function removeChar(str){
    //Determine the strings length 
    strLength=str.length
    //return new string starting from position 1 to string's length minus one 
    return str.slice(1,strLength-1) 
   };
   