/*
Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:

I love you
a little
a lot
passionately
madly
not at all
When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

Your goal in this kata is to determine which phrase the girls would say for a flower of a given number of petals, where nb_petals > 0
*/

//answer    
function howMuchILoveYou(nbPetals) {
    //An array that holds all the possible phrases
    const arrayPhrases = ['I love you', 'a little', 'a lot', 'passionately', 'madly', 'not at all']
    //return the matching phrase from the array
    //minus one from nbPetals cause the array index starts from 0
    //then get the remainder of nbPetals when divided by 6
    return arrayPhrases[(nbPetals-1)%6]
  }
  