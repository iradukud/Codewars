/*
Wikipedia: The Baum–Sweet sequence is an infinite automatic sequence of 0s and 1s defined by the rule:

bn = 1 if the binary representation of n contains no block of consecutive 0s of odd length;
bn = 0 otherwise;

for n ≥ 0.

Define a generator function baumSweet that sequentially generates the values of this sequence.

It will be tested for up to 1 000 000 values.

Note that the binary representation of 0 used here is not 0 but the empty string ( which does not contain any blocks of consecutive 0s ).
*/

//answer    
function* baumSweet() {
    yield 1;
    //loop counter for the while loop
    let i = 0
    //loops through each element
    while (true) {
        ++i
        //convert the element to it's binary strin then split it with 1 as the separator
        //then check if any of the new elements have an odd length
        //if they do then make the yeild equal 0
        //else make it equal 1
        yield i.toString(2).split(/1/g).some($ => $.length % 2) ? 0 : 1
    }
}
