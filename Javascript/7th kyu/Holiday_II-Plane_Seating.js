/*
DESCRIPTION:
Finding your seat on a plane is never fun, particularly for a long haul flight... You arrive, realise again just how little leg room you get, and sort of climb into the seat covered in a pile of your own stuff.

To help confuse matters (although they claim in an effort to do the opposite) many airlines omit the letters 'I' and 'J' from their seat naming system.

the naming system consists of a number (in this case between 1-60) that denotes the section of the plane where the seat is (1-20 = front, 21-40 = middle, 40+ = back). This number is followed by a letter, A-K with the exclusions mentioned above.

Letters A-C denote seats on the left cluster, D-F the middle and G-K the right.

Given a seat number, your task is to return the seat location in the following format:

'2B' would return 'Front-Left'.

If the number is over 60, or the letter is not valid, return 'No Seat!!'.

*/

//Solution  
function planeSeat(a) {
    //variable that holds the numeric value from the passed argument
    const num = parseFloat(a)
    //variable that holds the alphabetic value from the passed argument
    const letter = a.slice(-1).toLowerCase()
    //if the specified value are represent you've been had
    if ('ij'.includes(letter) || num > 60) { return 'No Seat!!' }
    //variable that holds the position the seat is in on the plane
    const planePosition = num <= 20 ? 'Front' : num <= 40 ? 'Middle' : 'Back'
    //variable that holds the seating positions in that row plane
    const seatposition = 'abc'.includes(letter) ? 'Left' : 'def'.includes(letter) ? 'Middle' : 'Right'
    //returned the final seating
    return planePosition + '-' + seatposition
}