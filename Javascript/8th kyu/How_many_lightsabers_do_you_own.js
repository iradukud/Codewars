/*
Inspired by the development team at Vooza, write the function that

accepts the name of a programmer, and
returns the number of lightsabers owned by that person.
The only person who owns lightsabers is Zach, by the way. He owns 18, which is an awesome number of lightsabers. Anyone else owns 0.

Note: your function should have a default parameter.

For example(Input --> Output):

"anyone else" --> 0
"Zach" --> 18
*/

//answer    
function howManyLightsabersDoYouOwn(name) {
    //return 18 if name equals Zach, else return 0
    return name == 'Zach' ? 18 : 0
}