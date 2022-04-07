/*
If/else syntax debug
While making a game, your partner, Greg, decided to create a function to check if the user is still alive called checkAlive/CheckAlive/check_alive. Unfortunately, Greg made some errors while creating the function.

checkAlive/CheckAlive/check_alive should return true if the player's health is greater than 0 or false if it is 0 or below.

The function receives one parameter health which will always be a whole number between -10 and 10.
*/

//answer    
function checkAlive(health) {
    //if health is greater than 0 return true as person's alive
    if (health > 0) {
        return true
        //else return false as the person is dead   
    } else {
        return false
    }
}

/*
orignal function
function checkAlive (health) {
if () {
  health < 0
  return false
} else () {
  return true
}
}
*/