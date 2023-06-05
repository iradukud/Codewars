/*
DESCRIPTION:
A binary gap within a positive number num is any sequence of consecutive zeros that is surrounded by ones at both ends in the binary representation of num.
For example:
9 has binary representation 1001 and contains a binary gap of length 2.
529 has binary representation 1000010001 and contains two binary gaps: one of length 4 and one of length 3.
20 has binary representation 10100 and contains one binary gap of length 1.
15 has binary representation 1111 and has 0 binary gaps.
Write function gap(num) that,  given a positive num,  returns the length of its longest binary gap.
The function should return 0 if num doesn't contain a binary gap.

*/

//Solution  
function gap(num) {
    //variable that holds the binaray value of num
      const bin=num.toString(2)
      //variable that holds the zeros between the 1s
      const l=[]
      //loop that starts from begining of binary string
      for (let i=0;i<bin.length;i++){
        //loop that start at the second binaray digit
        for (let j=1;j<bin.length;j++){
        //if the first and current digit are one both 1 then push the length of number between them to l  
        if(bin[i]==='1'&&bin[j]==='1'){
        l.push(bin.slice(i+1,j).length)
        //make the outside loop position equal the current inside position  
        i=j
        }
      }}
    //return the max length
      return Math.max(...l) 
  }