/*
Create a function with two arguments that will return an array of the first (n) multiples of (x).

Assume both the given number and the number of times to count will be positive numbers greater than 0.

Return the results as an array (or list in Python, Haskell or Elixir).

Examples:

countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
countBy(2,5) === [2,4,6,8,10]
*/

//answer

function countBy(x, n) {
    // create a variable that holds array the we be return
    let z = [];
    //loop the inputs multiples of x into they array with a length of n
    for(i=1; i<=n; i++){
      //putting the multiple into the array
      z.push(i*x)
    }
    // returning the array with the multiples of x and length of n
    return z;
  }