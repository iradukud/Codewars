/*
DESCRIPTION:
args_count(1, 2, 3) -> 3
args_count(1, 2, 3, 10) -> 4
*/

//Solution    
function args_count(...x) {
    //returned the length of the arguments given
    return x.length
}