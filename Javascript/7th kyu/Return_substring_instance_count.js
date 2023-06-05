/*
DESCRIPTION:
Complete the solution so that it returns the number of times the search_text is found within the full_text.

Usage example:

solution('aa_bb_cc_dd_bb_e', 'bb') # should return 2 since bb shows up twice
solution('aaabbbcccc', 'bbb') # should return 1
*/

//Solution    
function solution(fullText, searchText) {
  //empty arr the holds substrings from fullText
  const arr = []
  //loop that creates the substrings 
  for (i = 0; i < fullText.length; i += searchText.length) {
    arr.push(fullText.slice(i, i + searchText.length))
  }
  //return the amount of times searchText appears in fullText
  return arr.filter(x => x == searchText).length
}