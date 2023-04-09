/*
    Complete the solution so that it reverses the string passed into it.

    'world'  =>  'dlrow'
    'word'   =>  'drow'
*/

//answer
function solution(str){
    //create an empty string that will be returned  
    let newStr=''
    //add individual character to the created string, starting from the back of str parameter 
      for(let i=str.length-1;i>=0;i--){
        newStr = newStr + str[i]
      }
    //return the reverse string
    return newStr
    }