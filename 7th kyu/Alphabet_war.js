/*
DESCRIPTION:
Introduction
There is a war and nobody knows - the alphabet war!
There are two groups of hostile letters. The tension between left side letters and right side letters was too high and the war began.

Task
Write a function that accepts fight string consists of only small letters and return who wins the fight. When the left side wins return Left side wins!, when the right side wins return Right side wins!, in other case return Let's fight again!.

The left side letters and their power:

 w - 4
 p - 3
 b - 2
 s - 1
The right side letters and their power:

 m - 4
 q - 3
 d - 2
 z - 1
The other letters don't have power and are only victims.

Example
alphabetWar("z");        //=> Right side wins!
alphabetWar("zdqmwpbs"); //=> Let's fight again!
alphabetWar("zzzzs");    //=> Right side wins!
alphabetWar("wwwwwwz");  //=> Left side wins!
*/

//Solution    
function alphabetWar(fight) {
    //objects that hold the letters and their corresponding values
    const left = { w: 4, p: 3, b: 2, s: 1 }
    const right = { m: 4, q: 3, d: 2, z: 1 }
    //variable that determine and hold the points of each side
    const leftPoints = [...fight].reduce((sum, char) => left[char] ? left[char] + sum : sum, 0)
    const rightPoints = [...fight].reduce((sum, char) => right[char] ? right[char] + sum : sum, 0)
    //return a string message based on who won the fight/war
    return leftPoints == rightPoints ? 'Let\'s fight again!' : leftPoints > rightPoints ? 'Left side wins!' : 'Right side wins!'
}