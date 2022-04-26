/*
Write a generic function chainer
Write a generic function chainer that takes a starting value, and an array of functions to execute on it (array of symbols for ruby).

The input for each function is the output of the previous function (except the first function, which takes the starting value as it's input). Return the final value after execution is complete.

function add(num) {
  return num + 1
}

function mult(num) {
  return num * 30
}

chain(2, [add, mult]);
// returns 90;
*/

//answer    
function chain(input, fs) {
    //the value which will be chain and return at the end
    let ans = 0
    //loops through all the functions
    for (i = 0; i < fs.length; i++) {
        //for the first function use input value
        if (i == 0) {
            ans = fs[0](input)
            //for other functions use previous function output  
        } else {
            ans = fs[i](ans)
        }
    }
    //return final function's output
    return ans
}