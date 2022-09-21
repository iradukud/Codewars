/*
DESCRIPTION:
Your goal is to implement the method meanVsMedian which accepts an odd-length array of integers and returns one of the following:

'mean' - in case mean value is larger than median value
'median' - in case median value is larger than mean value
'same' - in case both mean and median share the same value
Reminder: Median

Array will always be valid (odd-length >= 3)

*/

//Solution  
function meanVsMedian(numbers) {
    //variables that hold the mean and median variable values
    const mean = numbers.reduce((sum, num) => sum + num, 0) / numbers.length
    const median = [...numbers].sort((a, b) => a - b)[Math.floor(numbers.length / 2)]
    //returned the corresponding string message depending on the above variables
    return median == mean ? 'same' : median > mean ? 'median' : 'mean'
}