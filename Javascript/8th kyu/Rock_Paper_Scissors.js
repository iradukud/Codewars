/*
Rock Paper Scissors
Let's play! You have to return which player won! In case of a draw return Draw!.

Examples:

rps('scissors','paper') // Player 1 won!
rps('scissors','rock') // Player 2 won!
rps('paper','paper') // Draw!
*/

//answer
//function that return the result of a rock paper scissors contest between two people
const rps = (p1, p2) => {
    //conditions in which p1 win and returun player 1 won
    if(p1=== 'rock' && p2=== 'scissors' || p1=== 'scissors' && p2=== 'paper'|| p1=== 'paper' && p2=== 'rock' ){
      return 'Player 1 won!'
    //condition for a draw and returns draw status  
    }else if(p1===p2){
      return 'Draw!'
    //since there only 3 possible outcomes in rock paper scissors then every else thats not a draw or win for p1
    //means player 2 won
    }else{
      return 'Player 2 won!'
    }
  }