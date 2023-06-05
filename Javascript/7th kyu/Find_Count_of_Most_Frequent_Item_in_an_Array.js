/*
DESCRIPTION:
Complete the function to find the count of the most frequent item of an array. You can assume that input is an array of integers. For an empty array return 0

Example
input array: [3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3]
ouptut: 5 
The most frequent number in the array is -1 and it occurs 5 times.
*/

//Solution    
function mostFrequentItemCount(collection) {
    //return 0 if the collection was an empty array
    if (collection.length == 0) { return 0 }
    //returned the frequency of the number repeated the mosot in the collection
    return Math.max(...collection.map((x, i) => collection.filter(z => z == x).length))
}