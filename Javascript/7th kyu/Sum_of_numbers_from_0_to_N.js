/*
Description:

We want to generate a function that computes the series starting from 0 and ending until the given number.

Example:
Input:

> 6
Output:

0+1+2+3+4+5+6 = 21

Input:

> -15
Output:

-15<0

Input:

> 0
Output:

0=0
*/

//answer    
var SequenceSum = (function () {
    function SequenceSum() { }

    SequenceSum.showSequence = function (count) {
        //if statements to handle conditions outside our indicated parameters
        if (count == 0) { return '0=0' }
        if (count < 0) { return count + '<0' }
        //else return the a string with the sum of numbers start from 0 to count and their result 
        return Array.from({ length: count + 1 }, (x, i) => i).join('+') + ' = ' + ((count + 1) / 2) * (0 + count)
    };

    return SequenceSum;

})();