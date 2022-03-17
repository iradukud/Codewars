/*
    Complete the square sum function so that it squares each number passed into it and then sums the results together.

    For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.
*/

//answer
function squareSum(numbers) {
    //variable to keep count of total sum
    var totalSum = 0;
    //loop which adds the item squared to the sum 
    for (i = 0; i < numbers.length; i++) {
        totalSum += Math.pow(numbers[i], 2);
    }
    //returns total sum
    return totalSum;
}