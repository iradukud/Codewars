/*
Question/task
*/

//answer    
//constructor that builds a ship accepts draft and crew arguments
function Ship(draft,crew) {
    //constructs the object 
    this.draft = draft;
    this.crew = crew;
    //method that determines the lootability of the created ship
    this.isWorthIt= function(){
      //checks if the ship draft is greater than 20 when we subtract the draft recieved from the crew
      return this.draft -(this.crew*1.5)>20 
    }
  }
  
  