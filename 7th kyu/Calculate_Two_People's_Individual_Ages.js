/*
DESCRIPTION:
Create a function that takes in the sum and age difference of two people, calculates their individual ages, and returns a pair of values (oldest age first) if those exist or null/None if:

sum < 0
difference < 0
Either of the calculated ages come out to be negative

*/

//Solution  
function getAges(sum, difference) {
    //if any of the passed parameters are false retunr null
    if (sum < 0 || difference < 0) { return null }
    //halved both the parameters (used to calculate individuals ages) 
    sum /= 2
    difference /= 2
    //if younger individual's age is negative return null
    if (sum - difference < 0) return null
    //else return both the individuals ages
    return [sum + difference, sum - difference]
}