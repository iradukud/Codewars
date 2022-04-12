/*
Terminal game move function
In this game, the hero moves from left to right. The player rolls the die and moves the number of spaces indicated by the die two times.

Create a function for the terminal game that takes the current position of the hero and the roll (1-6) and return the new position.

Example:
move(3, 6) should equal 15
*/

//answer
//returns the new position based on the current position and 2x of dice roll
const move = (position, roll) => position+2*roll    