/*
DESCRIPTION:
Paul is an excellent coder and sits high on the CW leaderboard. He solves kata like a banshee but would also like to lead a normal life, with other activities. But he just can't stop solving all the kata!!

Given an array (x) you need to calculate the Paul Misery Score. The values are worth the following points:

kata = 5
Petes kata = 10
life = 0
eating = 1
The Misery Score is the total points gained from the array. Once you have the total, return as follows:

< 40 = 'Super happy!'
< 70 >= 40 = 'Happy!'
< 100 >= 70 = 'Sad!'
> 100 = 'Miserable!'

*/

//Solution    
function paul(x) {
    //variable that holds an object of the keys we want to replace and their corresponding replacements as values
    const points = { 'kata': 5, 'Petes kata': 10, 'life': 0, 'eating': 1 }
    //calculated the misery score
    const score = x.reduce((sum, num) => sum + points[num], 0)
    //returned paul's final happiness
    return score < 40 ? 'Super happy!' : score < 70 ? 'Happy!' : score < 100 ? 'Sad!' : 'Miserable!'
}