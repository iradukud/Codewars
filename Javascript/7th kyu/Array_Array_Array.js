/*
DESCRIPTION:
You are given an initial 2-value array (x). You will use this to calculate a score.

If both values in (x) are numbers, the score is the sum of the two. If only one is a number, the score is that number. If neither is a number, return 'Void!'.

Once you have your score, you must return an array of arrays. Each sub array will be the same as (x) and the number of sub arrays should be equal to the score.

For example:

if (x) == ['a', 3] you should return [['a', 3], ['a', 3], ['a', 3]].

*/

//Solution  
function explode(x) {
    //if both the given values are strings return void
    if (typeof x[0] != 'number' && typeof x[1] != 'number') { return 'Void!' }
    //variable the holds the sum of the integers inside the array  
    const sumz = x.reduce((sum, num) => sum + (typeof num == 'number' ? num : 0), 0)
    //return a new array the length of the sum filled with the passed argument
    return Array(sumz).fill(x)
}