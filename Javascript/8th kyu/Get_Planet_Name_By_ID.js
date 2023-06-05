/*
The function is not returning the correct values. Can you figure out why?

Example (Input --> Output ):

3 --> "Earth"
*/

//answer
//function that takes a ID and converts it into a planet name
function getPlanetName(id) {
    //if statement that returns the Planet's Name from it's id
    switch (id) {
        case 1:
            return 'Mercury'
            break
        case 2:
            return 'Venus'
            break
        case 3:
            return 'Earth'
            break
        case 4:
            return 'Mars'
            break
        case 5:
            return 'Jupiter'
            break
        case 6:
            return 'Saturn'
            break
        case 7:
            return 'Uranus'
            break
        case 8:
            return 'Neptune'
            break
    }
}