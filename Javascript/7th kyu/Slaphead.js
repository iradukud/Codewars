/*
DESCRIPTION:
Being a bald man myself, I know the feeling of needing to keep it clean shaven. Nothing worse that a stray hair waving in the wind.

You will be given a string(x). Clean shaved head is shown as "-" and stray hairs are shown as "/". Your task is to check the head for stray hairs and get rid of them.

You should return the original string, but with any stray hairs removed. Keep count ot them though, as there is a second element you need to return:

0 hairs --> "Clean!"
1 hair --> "Unicorn!"
2 hairs --> "Homer!"
3-5 hairs --> "Careless!"
>5 hairs --> "Hobo!"

So for this head: "------/------" you shoud return:

["-------------", "Unicorn"]

*/

//Solution  
function bald(x) {
    //varible that hold the amount of hair left
    const hairCount = [...x].filter(x => x == '/').length
    //returned a clean shaven head with the corresponding string message of the missed hairs
    return [[...x].map(x => x = '-').join(''), hairCount == 0 ? 'Clean!' : hairCount == 1 ? 'Unicorn!' : hairCount == 2 ? 'Homer!' : hairCount >= 3 && hairCount <= 5 ? 'Careless!' : 'Hobo!']
}