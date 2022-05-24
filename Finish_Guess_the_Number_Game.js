/*
Imagine you are creating a game where the user has to guess the correct number. But there is a limit of how many guesses the user can do.

If the user tries to guess more than the limit, the function should throw an error.
If the user guess is right it should return true.
If the user guess is wrong it should return false and lose a life.
Can you finish the game so all the rules are met?
*/

//answer    
class Guesser {
    constructor(number, lives) {
        this.number = number
        this.lives = lives
    }

    guess(n) {
        //if the lives/health drops to 0 throw an error message
        if (!this.lives) throw new Error('You have ran out of lives')
        //if they guess right return true
        if (n === this.number) return true
        //else reduce lives and return false
        this.lives--
        return false
    }
}