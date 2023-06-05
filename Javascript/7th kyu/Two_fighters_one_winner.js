/*
Create a function that returns the name of the winner in a fight between two fighters.

Each fighter takes turns attacking the other and whoever kills the other first is victorious. Death is defined as having health <= 0.

Each fighter will be a Fighter object/instance. See the Fighter class below in your chosen language.

Both health and damagePerAttack (damage_per_attack for python) will be integers larger than 0. You can mutate the Fighter objects.

Example:
  declare_winner(Fighter("Lew", 10, 2), Fighter("Harry", 5, 4), "Lew") => "Lew"

  Lew attacks Harry; Harry now has 3 health.
  Harry attacks Lew; Lew now has 6 health.
  Lew attacks Harry; Harry now has 1 health.
  Harry attacks Lew; Lew now has 2 health.
  Lew attacks Harry: Harry now has -1 health and is dead. Lew wins.
function Fighter(name, health, damagePerAttack) {
        this.name = name;
        this.health = health;
        this.damagePerAttack = damagePerAttack;
        this.toString = function() { return this.name; }
}
*/

//answer    
function declareWinner(fighter1, fighter2, firstAttacker) {
    //The amount of moves it takes for fighter1 to win   
    const movesToWin1 = Math.ceil(fighter2.health / fighter1.damagePerAttack)
    //The amount of moves it takes for fighter2 to win  
    const movesToWin2 = Math.ceil(fighter1.health / fighter2.damagePerAttack)

    //if both fighters have the same amount of moves to win then return the first attacker 
    if (movesToWin1 == movesToWin2) {
        return firstAttacker
        //else if player1 requires more moves then player1 win  
    } else if (movesToWin1 > movesToWin2) {
        return fighter2.name
        //else if player2 requires more moves then player1 win 
    } else if (movesToWin1 < movesToWin2) {
        return fighter1.name
    }
}