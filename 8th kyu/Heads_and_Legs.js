/*
#Description

Everybody has probably heard of the animal heads and legs problem from the earlier years at school. It goes:

“A farm contains chickens and cows. There are x heads and y legs. How many chickens and cows are there?”

Where x <= 1000 and y <=1000

#Task

Assuming there are no other types of animals, work out how many of each animal are there.

Return a tuple in Python - (chickens, cows) and an array list - [chickens, cows]/{chickens, cows} in all other languages

If either the heads & legs is negative, the result of your calculation is negative or the calculation is a float return "No solutions" (no valid cases), or [-1, -1] in COBOL.

In the form:

[Heads, Legs] = [72, 200]

VALID - [72, 200] =>             [44 , 28]
                             [Chickens, Cows]

INVALID - [72, 201] => "No solutions"
However, if 0 heads and 0 legs are given always return [0, 0] since zero heads must give zero animals.

There are many different ways to solve this, but they all give the same answer.

You will only be given integers types - however negative values (edge cases) will be given.

Happy coding!
*/

//answer    
function animals(heads, legs) {
    //created variables that hold the potential cow and chicken count 
    const cows = (legs / 2) - heads
    const chickens = heads - cows
    //conditional that determine if the potential cow and chicken counts are realistic outcomes
    if (heads == 0 && legs == 0) {
        // if both heads and legs are zero then their are no animals
        return [0, 0]
    } else if (legs % 2 == 0 && cows >= 0 && chickens >= 0) {
        //if the legs count is divisible by 2 and the final count of cows and chickens is equal or great then 0
        //then return the chickens and cows variable
        return [chickens, cows]
    } else {
        //if none of the above is possible return a string message
        return "No solutions"
    }
}