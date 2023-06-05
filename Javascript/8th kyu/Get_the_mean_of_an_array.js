/*
It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

Return the average of the given array rounded down to its nearest integer.

The array will never be empty.
*/

//answer
function getAverage(marks){
    //calculated the sum of marks
    //divided by the amount of marks to get average
    //return a number rounded down to nearest whole interger
    return (Math.floor(marks.reduce((total,currentMark)=>(total+currentMark),0)/marks.length))
  }