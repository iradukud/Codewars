/*
DESCRIPTION:
In this Kata your task will be to return the count of pairs that have consecutive numbers as follows:

pairs([1,2,5,8,-4,-3,7,6,5]) = 3
The pairs are selected as follows [(1,2),(5,8),(-4,-3),(7,6),5]
--the first pair is (1,2) and the numbers in the pair are consecutive; Count = 1
--the second pair is (5,8) and are not consecutive
--the third pair is (-4,-3), consecutive. Count = 2
--the fourth pair is (7,6), also consecutive. Count = 3. 
--the last digit has no pair, so we ignore.
More examples in the test cases.

Good luck!
*/

//Solution    
function pairs(arr) {
    //variables that hold the corresponding pair on the same element position 
    const first = arr.filter((_, i) => i % 2 == 0)
    const second = arr.filter((_, i) => i % 2 != 0)
    //variable that keeps count of the consective pairs
    let sum = 0
    //loop that goes throught one half and adds to the sum
    for (i = 0; i < first.length; i++) {
        console.log(first[i], second[i])
        if (first[i] + 1 == second[i] || first[i] - 1 == second[i])
            sum++
    }
    //return the final sum
    return sum
}