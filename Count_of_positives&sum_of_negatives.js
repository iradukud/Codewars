/*
Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.

Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
*/

//answer

function countPositivesSumNegatives(input) {
    //runs the code below if the aray contains elements with values
    if(input!==null){
    // a variable that keeps count of the positive integers
    let countOfPostiveNumber=0
    //a variablel the adds up all the negative integers
    let sumofNegative=0
    // a iteration goes through all the elements and depending on the element it will add to the
    // positive count or the sum of the negative eleement  
    input.forEach(number => number>0? countOfPostiveNumber+=1 : sumofNegative+=number)
    // if the their were no numbers return a empty array
      if(countOfPostiveNumber==0 & sumofNegative==0){
        return []  
      }
    //returns an array of the amount of postive numbers in an array and the sum of negative numbers 
    //in the array
      return [countOfPostiveNumber,sumofNegative]
    }
    //returns empty array if the inputted array is empty   
    return []
    }