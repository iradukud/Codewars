/*
Write a function to split a string and convert it into an array of words.

Examples (Input -> Output):
* "Robin Singh" ==> ["Robin", "Singh"]

* "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]
*/

//answer
//Split the string every where ' ' exist and returns the splitted items as elements in a array 
const stringToArray = string => string.split(' ')