/*
DESCRIPTION:
Count how often sign changes in array.

result
number from 0 to ... . Empty array returns 0

example
const arr = [1, -3, -4, 0, 5];

**
| elem | count |
|------|-------|
|  1   |  0    |
| -3   |  1    |
| -4   |  1    |
|  0   |  2    |
|  5   |  2    |
**

catchSignChange(arr) == 2;

*/

//Solution    
function catchSignChange(arr) {
    //if the passed array is empty return 0
    if (arr.length == 0) { return 0 }
    //variable that holds the elements replaced with their corresponding sign value (1/-1)
    const arr2 = arr.map(x => x == 0 ? 1 : Math.sign(x))
    //variable that keeps count
    let count = 0
    //variable that keeps track of the current element
    let curr = arr2[0]
    //loop that goes through the given arr and add to the count everytime the sign changes
    for (i = 0; i < arr.length; i++) {
        if (curr != arr2[i]) {
            count++
        }
        curr = arr2[i]
    }
    //returned the final count
    return count
} 