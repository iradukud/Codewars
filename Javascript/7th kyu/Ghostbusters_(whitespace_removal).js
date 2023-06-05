/*
DESCRIPTION:
Oh no! Ghosts have reportedly swarmed the city. It's your job to get rid of them and save the day!

In this kata, strings represent buildings while whitespaces within those strings represent ghosts.

So what are you waiting for? Return the building(string) without any ghosts(whitespaces)!

Example:

ghostBusters("Sky scra per");
Should return:

"Skyscraper"
If the building contains no ghosts, return the string:

"You just wanted my autograph didn't you?"

*/

//Solution    
function ghostBusters(building) {
    //variable that has the building with all the ghosts removed 
    const ghostRem = building.replace(/[' ']/g, '')
    //if the building and the building with the removed are identical return a witty rort
    //else return the building with the ghost removed
    return ghostRem == building ? 'You just wanted my autograph didn\'t you?' : ghostRem
}