/*
DESCRIPTION:
In this kata, you will take the keys and values of an object and swap them around.

You will be given a dictionary, and then you will want to return a dictionary with the old values as the keys, and list the old keys as values under their original keys.

For example, given the dictionary: {'Ice': 'Cream', 'Age': '21', 'Light': 'Cream', 'Double': 'Cream'},

you should return: {'Cream': ['Ice', 'Double', 'Light'], '21': ['Age']}

Notes:
The dictionary given will only contain strings
The dictionary given will not be empty
You do not have to sort the items in the lists

*/

//Solution  
function switchDict(dic) {
    //variable that holds an empty object that will be returned
    let o = {}
    //loop that goes through the passed obj and places the key and values into the new aray but swapped
    for (const p in dic) {
        if (dic[p] in o) {
            o[dic[p]].push(p)
        } else {
            o[dic[p]] = [p]
        }
    }
    //return the new obj
    return o
}