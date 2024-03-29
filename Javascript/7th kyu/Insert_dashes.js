/*
DESCRIPTION:
Write a function insert_dash(num) / insertDash(num) / InsertDash(int num) that will insert dashes ('-') between each two odd digits in num. For example: if num is 454793 the output should be 4547-9-3. Don't count zero as an odd digit.

Note that the number will always be non-negative (>= 0).
*/

//Solution    
function insertDash(nums) {
    //inserted dashes between every consecutive odd digit
    return [...(nums + '')].map((num, i) => num % 2 != 0 && (nums + '')[i + 1] % 2 != 0 && i != (nums + '').length - 1 ? num + '-' : num).join('')
}  