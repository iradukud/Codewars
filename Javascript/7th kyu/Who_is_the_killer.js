/*
DESCRIPTION:
Some people have been killed!
You have managed to narrow the suspects down to just a few. Luckily, you know every person who those suspects have seen on the day of the murders.

Task.
Given a dictionary with all the names of the suspects and everyone that they have seen on that day which may look like this:

{'James': ['Jacob', 'Bill', 'Lucas'],
 'Johnny': ['David', 'Kyle', 'Lucas'],
 'Peter': ['Lucy', 'Kyle']}
and also a list of the names of the dead people:

['Lucas', 'Bill']
return the name of the one killer, in our case 'James' because he is the only person that saw both 'Lucas' and 'Bill'
*/

//Solution    
function killer(suspectInfo, dead) {
    //loop that goes through the object and grabs the property and it's key
    for ([key, value] of Object.entries(suspectInfo)) {
        //variable that keeps count of the the current people who are dead and were spotted by the perp
        let count = 0
        //loop that checks if thee current perp has seen the dead people
        for (i = 0; i < dead.length; i++) {
            if (value.includes(dead[i])) {
                count++
            }
        }
        //if the amount of people seen == the amount of dead people return the perps name
        if (count == dead.length) { return key }
    }
}