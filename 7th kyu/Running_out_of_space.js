/*
DESCRIPTION:
Kevin is noticing his space run out! Write a function that removes the spaces from the values and returns an array showing the space decreasing.
For example, running this function on the array ['i', 'have','no','space'] would produce ['i','ihave','ihaveno','ihavenospace'].

*/

//Solution    
function spacey(array) {
    //variable will hold all the elements that the map has gone through
    let curr = ''
    //return the corresponding arr
    return array.map(x => {
        curr += x
        console.log(curr)
        return curr
    })
}