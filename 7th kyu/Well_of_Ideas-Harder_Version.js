/*
DESCRIPTION:
For every good kata idea there seem to be quite a few bad ones!

In this kata you need to check the provided 2 dimensional array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.

The sub arrays may not be the same length.

The solution should be case insensitive (ie good, GOOD and gOOd all count as a good idea). All inputs may not be strings.

*/

//Solution    
function well(x) {
    //variable that holds the count of good ideas in the given x
    const score = x.map(y => y.filter(z => typeof z == 'string')).map(a => a.reduce((sum, word) => word.toLowerCase() == 'good' ? sum + 1 : sum, 0)).reduce((sum, num) => sum + num, 0)
    //returned a corresponding string depending on the score 
    return score == 0 ? 'Fail!' : score <= 2 ? 'Publish!' : 'I smell a series!'
}