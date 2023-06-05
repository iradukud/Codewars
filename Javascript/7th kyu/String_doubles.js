/*
DESCRIPTION:
In this Kata, you will write a function doubles that will remove double string characters that are adjacent to each other.

For example:

doubles('abbcccdddda') = 'aca', because, from left to right:

a) There is only one 'a' on the left hand side, so it stays.
b) The 2 b's disappear because we are removing double characters that are adjacent. 
c) Of the 3 c's, we remove two. We are only removing doubles. 
d) The 4 d's all disappear, because we first remove the first double, and again we remove the second double.
e) There is only one 'a' at the end, so it stays.
Two more examples: doubles('abbbzz') = 'ab' and doubles('abba') = "". In the second example, when we remove the b's in 'abba', the double a that results is then removed.

The strings will contain lowercase letters only. More examples in the test cases.

Good luck!

*/

//Solution  
function doubles(s) {
    //variable that holds the array of non adjacent double characters
    const cs = []
    //loop that goes through the given string
    for (const c of s) {
        //if the current string matches the last element the remove it
        if (cs.length != 0 && cs[cs.length - 1] == c) {
            cs.pop()
        } else {
            //else push the current string to the arr
            cs.push(c)
        }
    }
    //returned the final arr as a string 
    return cs.join('')
}