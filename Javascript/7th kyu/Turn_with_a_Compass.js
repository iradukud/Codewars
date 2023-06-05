/*
You have an 8-wind compass, like this:

You receive the direction you are facing (one of the 8 directions: N, NE, E, SE, S, SW, W, NW) and a certain degree to turn (a multiple of 45, between -1080 and 1080); positive means clockwise, and negative means counter-clockwise.

Return the direction you will face after the turn.

Examples
"S",  180  -->  "N"
"SE", -45  -->  "E"
"W",  495  -->  "NE"
*/

//answer    
function direction(facing, turn) {
  //variable that holds the direction via their index position
  let directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
  // If turn counter-clockwise, just reverse the order of the directions order
  // This allows you to have the same logic for clockwise and counter-clockwise turns
  directions = turn < 0 ? directions.reverse() : directions;

  // Calculate how many times one has to turn (not considering clockwise or counter-clockwise)
  const turns = Math.abs(turn) / 45;
  //variable that determines the index of the new direction
  const index = (directions.indexOf(facing) + turns) % directions.length;
  //return the value/direction of the new direction 
  return directions[index]
}