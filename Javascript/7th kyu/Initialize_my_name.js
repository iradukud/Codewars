/*
DESCRIPTION:
Some people just have a first name; some people have first and last names and some people have first, middle and last names.

You task is to initialize the middle names (if there is any).

Examples
'Jack Ryan'                   => 'Jack Ryan'
'Lois Mary Lane'              => 'Lois M. Lane'
'Dimitri'                     => 'Dimitri'
'Alice Betty Catherine Davis' => 'Alice B. C. Davis'

*/

//Solution    
function initializeNames(name) {
    //variable that holds all the names individually
    const names = name.split(' ')
    //returned the name with all the middle names turned into intials
    return names.length <= 2 ? name : names.map((curName, ind) => ind == 0 || ind == names.length - 1 ? curName : curName[0] + '.').join(' ')
}