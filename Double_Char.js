/*
Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

Examples (Input -> Output):
* "String"      -> "SSttrriinngg"
* "Hello World" -> "HHeelllloo  WWoorrlldd"
* "1234!_ "     -> "11223344!!__  
*/

//answer
function doubleChar(str) {
    //empty string to hold the string we'll create by doubling the characters
    let newString =''
    //loop that place a individual character from the original string two times in the new string
    for(i=0;i<str.length;i++){
      newString += `${str[i]}${str[i]}`
    }
    //return the created string
    return newString
  }
  