/*
Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

Use conditionals to return the proper message:

case	                    return
name equals owner	    'Hello boss'
otherwise	            'Hello guest'
*/

//answer
//if the name matches owner return special message else return generic name
const greet = (name, owner) => name==owner? 'Hello boss' : 'Hello guest'