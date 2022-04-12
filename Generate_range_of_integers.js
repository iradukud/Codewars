/*
Implement a function named generateRange(min, max, step), which takes three arguments and generates a range of integers from min to max, with the step. The first integer is the minimum value, the second is the maximum of the range and the third is the step. (min < max)

Task
Implement a function named

generateRange(2, 10, 2) // should return array of [2,4,6,8,10]
generateRange(1, 10, 3) // should return array of [1,4,7,10]
Note
min < max
step > 0
the range does not HAVE to include max (depending on the step)
*/

//answer    
//created a array using Array(), length can from (max - min) / step + 1 | 0 and filled all the elements with 0
//then for every element I add the min value to index*step
const generateRange = (min, max, step) => Array((max - min) / step + 1 | 0).fill(min).map((_,index)=> min+index*step)