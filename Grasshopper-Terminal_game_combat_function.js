/*
Create a combat function that takes the player's current health and the amount of damage recieved, and returns the player's new health. Health can't be less than 0.
*/

//answer    
//if the damage is greater then health return 0 health else return the new health after the damage
const combat = (health, damage) => damage> health ? 0 : health-damage
