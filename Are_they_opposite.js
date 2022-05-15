/*
Task
Give you two strings: s1 and s2. If they are opposite, return true; otherwise, return false. Note: The result should be a boolean value, instead of a string.

The opposite means: All letters of the two strings are the same, but the case is opposite. you can assume that the string only contains letters or it's a empty string. Also take note of the edge case - if both strings are empty then you should return false/False.

Examples
isOpposite("ab","AB") should return true;
isOpposite("aB","Ab") should return true;
isOpposite("aBcd","AbCD") should return true;
isOpposite("AB","Ab") should return false;
isOpposite("","") should return false;
*/

//answer    
function isOpposite(s1, s2) {
    //created an array to hold on of the string as a array
    const arr = [...s2]
    //if the string lengths aren't equal the return false
    //else create a new array them holds a boolean derived from the comparison of each character
    //if the new array contains false return false, else return true 
    return s1.length != s2.length || !s1 || !s2 ? false : ![...s1].map((x, i) => x != arr[i]).includes(false)
}