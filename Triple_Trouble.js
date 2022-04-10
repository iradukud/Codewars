/*
Triple Trouble
Create a function that will return a string that combines all of the letters of the three inputed strings in groups. Taking the first letter of all of the inputs and grouping them next to each other. Do this for every letter, see example below!

E.g. Input: "aa", "bb" , "cc" => Output: "abcabc"

Note: You can expect all of the inputs to be the same length.
*/

//answer    
//create an array with size equal to the length of 1 of the parameters
//fill the elements with a empty string
//the used map to add the the corresponding characters together in one element
//join all the elements back and return a single string
const tripleTrouble = (one, two, three) => Array(one.length).fill('').map((char,i)=> one[i]+two[i]+three[i]).join('')
