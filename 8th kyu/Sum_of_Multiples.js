/*
Your Job
Find the sum of all multiples of n below m

Keep in Mind
n and m are natural numbers (positive integers)
m is excluded from the multiples
Examples
sumMul(2, 9)   ==> 2 + 4 + 6 + 8 = 20
sumMul(3, 13)  ==> 3 + 6 + 9 + 12 = 30
sumMul(4, 123) ==> 4 + 8 + 12 + ... = 1860
sumMul(4, -7)  ==> "INVALID"
*/

//answer    
//if n>m, create a new array then make the elements multiples of n but they should be less then m, then reduce it to get it's sum
//else return 'INVALID'
const sumMul = (n,m) => n>=m? 'INVALID' : Array(Math.floor(m/n)).fill(n).map((x,i)=> i*n+n).reduce((sum,num)=>sum+num,0)
