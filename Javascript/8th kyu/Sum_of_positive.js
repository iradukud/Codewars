/*
You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.
*/

//Answers
function positiveSum(arr) {
    //determine the length of the arrary passed in function
    let arrLength = arr.length
    //variable to return the sum of positive items in array
    let sum=0
    //loop which goes the length of the passed array
    for(let i=0;i<arrLength;i++){
      //condition to only add postive items 
      if(arr[i]>0){
      sum+=arr[i]
      }
    }
    //returned sum of postive items
    return sum
  }