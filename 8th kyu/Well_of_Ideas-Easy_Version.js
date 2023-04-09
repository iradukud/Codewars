/*
For every good kata idea there seem to be quite a few bad ones!

In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.
*/

//answer    
function well(x) {
    //A variable that holds the count for good ideas in the array
    let good = 0
    //forEach that goes through the whole array and adds one to variable good for every instance of 'good' ideas 
    x.forEach(idea => idea == 'good' ? good++ : null)
    //depends on the good count return select messages  
    if (good == 0) {
        return 'Fail!'
    } else if (good <= 2) {
        return 'Publish!'
    } else {
        return 'I smell a series!'
    }
}