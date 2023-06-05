/*
DESCRIPTION:
Colour plays an important role in our lifes. Most of us like this colour better then another. User experience specialists believe that certain colours have certain psychological meanings for us.

You are given a 2D array, composed of a colour and its 'common' association in each array element. The function you will write needs to return the colour as 'key' and association as its 'value'.

For example:

var array = [["white", "goodness"], ...] //returns [{white: 'goodness'}, ...]
*/

//Solution    
function colourAssociation(arr) {
    //returned the array with the inner arrays converted to objects with a color key and it association as a value
    return arr.map(x => {
        const obj = {}
        obj[x[0]] = x[1]
        return obj
    })
}