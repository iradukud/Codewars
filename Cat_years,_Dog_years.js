/*
Cat Years
15 cat years for first year
+9 cat years for second year
+4 cat years for each year after that
Dog Years
15 dog years for first year
+9 dog years for second year
+5 dog years for each year after that

*/

//answer
//return humans years (parameter value), cat and dogs years
// dogs and cat years are calculated as follows 15+9+(humanYears-2)*4or5 for 3+ years
//while if it's one human year then it's just 15, if two then 15+9
//Used a conditional operator to determine which one of the expressions should be displayed 
const humanYearsCatYearsDogYears = humanYears => [humanYears,humanYears==1? 15: humanYears==2? 15+9: 15+9+((humanYears-2)*4) ,humanYears==1? 15: humanYears==2? 15+9: 15+9+((humanYears-2)*5) ];

