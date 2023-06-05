/*
Description:
Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

Examples
replace("Hi!") === "H!!"
replace("!Hi! Hi!") === "!H!! H!!"
replace("aeiou") === "!!!!!"
replace("ABCDE") === "!BCD!"
*/

//answer    
function replace(s){
    //variables that have the characters we want to replace (vowels)
    const replaceCharLow ={'a':'!','e':'!','i':'!','o':'!','u':'!'}
    const replaceCharUp ={'A':'!','E':'!','I':'!','O':'!','U':'!'}
    //replacing the vowels using replace method and above variables
    return s.replace(/[aeiou]/g, x => replaceCharLow[x]).replace(/[AEIOU]/g, x => replaceCharUp[x])  
  }
