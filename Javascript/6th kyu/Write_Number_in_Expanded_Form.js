/*
DESCRIPTION:
You will be given a number and you will need to return it as a string in Expanded Form. For example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'
NOTE: All numbers will be whole numbers greater than 0.

*/

//Solution  
function expandedForm(num) {
    return [...(num + '')].reverse().map((x, i) => x + '0'.repeat(i)).filter(x => x != 0).reverse().join(' + ')
}