/*
DESCRIPTION:
Given a credit card number we can determine who the issuer/vendor is with a few basic knowns.

Complete the function getIssuer() that will use the values shown below to determine the card issuer for a given card number. If the number cannot be matched then the function should return the string Unknown.

| Card Type  | Begins With          | Number Length |
|------------|----------------------|---------------|
| AMEX       | 34 or 37             | 15            |
| Discover   | 6011                 | 16            |
| Mastercard | 51, 52, 53, 54 or 55 | 16            |
| VISA       | 4                    | 13 or 16      |
Examples
getIssuer(4111111111111111) == "VISA"
getIssuer(4111111111111) == "VISA"
getIssuer(4012888888881881) == "VISA"
getIssuer(378282246310005) == "AMEX"
getIssuer(6011111111111117) == "Discover"
getIssuer(5105105105105100) == "Mastercard"
getIssuer(5105105105105106) == "Mastercard"
getIssuer(9111111111111111) == "Unknown"
*/

//Solution    
function getIssuer(nums) {
    //variable that holds the the nums converted to a string 
    const stringNums = nums + ''
    //variable that holds the length of the string nums
    const numLength = stringNums.length
    //if statements that return the corresponding string message
    if (stringNums.startsWith('37') || stringNums.startsWith('34') && numLength == 15) {
        return 'AMEX'
    } else if (stringNums.startsWith('6011') && numLength == 16) {
        return 'Discover'
    } else if (stringNums.startsWith('51') || stringNums.startsWith('52') || stringNums.startsWith('53') || stringNums.startsWith('54') || stringNums.startsWith('55') && numLength == 16) {
        return 'Mastercard'
    } else if (stringNums.startsWith('4') && (numLength == 16 || numLength == 13)) {
        return 'VISA'
    } else {
        return 'Unknown'
    }
}