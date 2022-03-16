/*
    In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

    Examples
    makeNegative(1);    // return -1
    makeNegative(-5);   // return -5
    makeNegative(0.12); // return -0.12
    makeNegative(0);    // return 0

    Notes
    The number can be negative already, in which case no change is required.
    Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.
*/

//Answer//
/*
Past solutions
function makeNegative(num) {
    //if a number is positive return its negative
    if(num>0){
      return num-(num*2) 
    //else just return, not this was place 2nd so it could include zero  
    }else{
      return num
    }
  }
*/
function makeNegative(num) {
    // return the absolute value passed back as a negative
    return -Math.abs(num)
}