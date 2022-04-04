/*
Create a method each_cons that accepts a list and a number n, and returns cascading subsets of the list of size n, like so:

each_cons([1,2,3,4], 2)
  #=> [[1,2], [2,3], [3,4]]

each_cons([1,2,3,4], 3)
  #=> [[1,2,3],[2,3,4]]
  
As you can see, the lists are cascading; ie, they overlap, but never out of order.
*/

//answer    

function eachCons(array, n) {
    // empty array that will hold the final array to be returned
    let nestedArray = []
    //loop the goes starts from 0 goes to the length of the array minus n (in terms of indexes)
    for(i=0;i<=array.length-n;i++){
      //creates a new array the starts from current position to the nth position
      //nests the new array in the created array
      nestedArray.push(array.slice(i,(i+n)))
    }
    //Returns the created array with it's nested arrays
    return nestedArray
  }