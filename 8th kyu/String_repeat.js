/*
    Write a function called repeatStr which repeats the given string string exactly n times.

    repeatStr(6, "I") // "IIIIII"
    repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"
*/

//answer
function repeatStr (n, s) {
    //created a empty string 
    let newString=''
    //repeat "s" string "n" times in the new string 
    for(let i=0;i<n;i++){
      newString+= s      
    }
    //returned the created string
    return newString
  }