/*
DESCRIPTION:
Groups of characters decided to make a battle. Help them to figure out which group is more powerful. Create a function that will accept 2 strings and return the one who's stronger.

Rules:
Each character have its own power: A = 1, B = 2, ... Y = 25, Z = 26
Strings will consist of uppercase letters only
Only two groups to a fight.
Group whose total power (A + B + C + ...) is bigger wins.
If the powers are equal, it's a tie.
Examples:
  battle("ONE", "TWO"); // => "TWO"`
  battle("ONE", "NEO"); // => "Tie!"

*/

//Solution    
function battle(x, y) {
    //variable that holds an array of letters
    const lett = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    //variables that hold the sum of the given parameters
    const xsum = [...x].reduce((sum, letter) => sum + lett.indexOf(letter) + 1, 0)
    const ysum = [...y].reduce((sum, letter) => sum + lett.indexOf(letter) + 1, 0)
    //returned the winner string of the battle
    return xsum == ysum ? 'Tie!' : xsum > ysum ? x : y
}