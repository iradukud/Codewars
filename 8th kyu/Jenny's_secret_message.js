/*
Jenny has written a function that returns a greeting for a user. However, she's in love with Johnny, and would like to greet him slightly different. She added a special case to her function, but she made a mistake.

Can you help her?
*/

//answer
function greet(name){
    //If the name is Johnny return special hello message
    if(name === "Johnny"){
      return "Hello, my love!"
    //if its anyone else return standard hello message
    }else {
      return "Hello, " + name + "!";
    }
  }