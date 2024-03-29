/*
DESCRIPTION:
The Arara are an isolated tribe found in the Amazon who count in pairs. For example one to eight is as follows:

1 = anane
2 = adak
3 = adak anane
4 = adak adak
5 = adak adak anane
6 = adak adak adak
7 = adak adak adak anane
8 = adak adak adak adak

Take a given number and return the Arara's equivalent.

e.g.

countArara(3) 'adak anane'

countArara(8) 'adak adak adak adak'
countArara 3 // -> "adak anane"

countArara 8 // -> "adak adak adak adak"
*/

//Solution    
function countArara(n) {
    if (n % 2 == 0) {
        //if the given number is divisble by 2 return the adak repeated by n/2 
        return 'adak '.repeat((n - 2) / 2) + 'adak'
    } else {
        //if the given number is not divisble by 2 return the adak repeated by n/2 + anane at the end
        return 'adak '.repeat(n / 2) + 'anane'
    }
}