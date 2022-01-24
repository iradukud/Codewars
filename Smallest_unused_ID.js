/*
Hey awesome programmer!

You've got much data to manage and of course you use zero-based and non-negative ID's to make each data item unique!

Therefore you need a method, which returns the smallest unused ID for your next new data item...

Note: The given array of used IDs may be unsorted. For test reasons there may be duplicate IDs, but you don't have to find or remove them!

Go on and code some pure awesomeness!
*/

//answer    
function nextId(ids) {
    //variable that holds all the unique id's
    const uniqueIDs = [...new Set(ids)]
    //variable that holds the highest id value
    const highestID = Math.max(...ids)
    //for loop that starts for zero and go to the highest id value
    for (i = 0; i <= highestID; i++) {
        //if i not present stop the loop and return the i
        if (!uniqueIDs.includes(i)) {
            return i
        }
    }
    //if the id's are are taken then return a new one higher than the highest id value
    return highestID + 1
}