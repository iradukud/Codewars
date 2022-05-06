/*
At the annual family gathering, the family likes to find the oldest living family member’s age and the youngest family member’s age and calculate the difference between them.

You will be given an array of all the family members' ages, in any order. The ages will be given in whole numbers, so a baby of 5 months, will have an ascribed ‘age’ of 0. Return a new array (a tuple in Python) with [youngest age, oldest age, difference between the youngest and oldest age].
*/

//answer    
const differenceInAges = function (ages) {
    //sorts the array from oldest to youngest
    ages.sort((a, b) => b - a)
    //variablel that holds the lowest age
    const youngest = ages.pop()
    //variablel that holds the highest age
    const oldest = ages.shift()
    //return an array that has the youngest, oldest and age difference
    return [youngest, oldest, oldest - youngest]
}
