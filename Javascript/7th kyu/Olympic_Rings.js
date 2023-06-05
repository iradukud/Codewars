/*
DESCRIPTION:
To celebrate the start of the Rio Olympics (and the return of 'the Last Leg' on C4 tonight) this is an Olympic inspired kata.

Given a string of random letters, you need to examine each. Some letters naturally have 'rings' in them. 'O' is an obvious example, but 'b', 'p', 'e', 'A', etc are all just as applicable. 'B' even has two!! Please note for this kata you can count lower case 'g' as only one ring.

Your job is to count the 'rings' in each letter and divide the total number by 2. Round the answer down. Once you have your final score:

if score is 1 or less, return 'Not even a medal!'; if score is 2, return 'Bronze!'; if score is 3, return 'Silver!'; if score is more than 3, return 'Gold!';

Dots over i's and any other letters don't count as rings.

*/

//Solution  
function olympicRing(a) {
    //variable that holds the rings count
    let count = 0;
    //when through the given array and kept tally of the rings
    [...a].forEach(x => 'abdegopqADOPQR'.includes(x) ? count++ : x === 'B' ? count += 2 : count += 0)
    //rount the count div 2 down
    count = Math.floor(count / 2)
    //returned a correspondingg string message based on the final count
    return count === 2 ? 'Bronze!' : count === 3 ? 'Silver!' : count >= 4 ? 'Gold!' : 'Not even a medal!'
}