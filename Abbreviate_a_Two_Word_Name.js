/*
Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F
*/

//answer

function abbrevName(name) {
    //change the name into an array
    const nameArr = name.split(' ')
    //retrieve first element and capitalize it
    const firstName = nameArr[0].toUpperCase()
    //retrieve second element and capitalize it
    const lastName = nameArr[1].toUpperCase()
    //return the first letter of each element with a '.' seperating them
    return `${firstName[0]}.${lastName[0]}`
}