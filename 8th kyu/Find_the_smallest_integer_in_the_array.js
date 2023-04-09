/*
    Given an array of integers your solution should find the smallest integer.

    For example:

    Given [34, 15, 88, 2] your solution will return 2
    Given [34, -345, -1, 100] your solution will return -345
    You can assume, for the purpose of this kata, that the supplied array will not be empty.
*/

//answer
class SmallestIntegerFinder {
    findSmallestInt(args) {
        //declare and set the biggest number holder to 0
        let biggestInterger = 0
        //for loop, which loops through array and stores highest value
        for (let i = 0; i < args.length; i++) {
            if (args[i] > biggestInterger) {
                biggestInterger = args[i]
            }
        }
        //declare and set the smallest number to the biggest number holder 
        let smallestInterger = biggestInterger
        //for loop, which loops through array and stores lowest value
        for (let i = 0; i < args.length; i++) {
            if (args[i] < smallestInterger) {
                smallestInterger = args[i]
            }
        }
        //returens the lowest value of the array  
        return smallestInterger
    }
}