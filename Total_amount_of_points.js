/*
Our football team finished the championship. The result of each match look like "x:y". Results of all matches are recorded in the collection.

For example: ["3:1", "2:2", "0:1", ...]

Write a function that takes such collection and counts the points of our team in the championship. Rules for counting points for each match:

if x>y - 3 points
if x<y - 0 point
if x=y - 1 point
Notes:

there are 10 matches in the championship
0 <= x <= 4
0 <= y <= 4
*/

//answer
//Function that returns the points earned based on the game score's this season
function points(games) {
    //variable to keep count of season points
    let points = 0 
    //loop that go through every game score
    for(i=0; i<games.length; i++){
      //compares individual team scores in a game
      //if the x>y then 3 points are added
      if(games[i][0]>games[i][0+2]){ 
        points+=3
      //elsle if the x=y then 1 point is added
      }else if(games[i][0]===games[i][0+2]){
        points+=1
      }    
    }
    return points
  }