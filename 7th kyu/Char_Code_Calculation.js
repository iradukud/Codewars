/*
DESCRIPTION:
Given a string, turn each character into its ASCII character code and join them together to create a number - let's call this number total1:

'ABC' --> 'A' = 65, 'B' = 66, 'C' = 67 --> 656667
Then replace any incidence of the number 7 with the number 1, and call this number 'total2':

total1 = 656667
              ^
total2 = 656661
              ^
Then return the difference between the sum of the digits in total1 and total2:

  (6 + 5 + 6 + 6 + 6 + 7)
- (6 + 5 + 6 + 6 + 6 + 1)
-------------------------
                       6
*/

//Solution    
function calc(x) {
    //converted x to it's ASCII and saved it as total1
    const total1 = [...x].map(x => x.charCodeAt()).join('')
    //then replaced every instance of 7 to 1
    const total2 = total1.replace(/[7]/g, 1)
    //then reduced each total to their sum and return the difference
    return [...total1].reduce((sum, num) => sum + +num, 0) - [...total2].reduce((sum, num) => sum + +num, 0)
}
