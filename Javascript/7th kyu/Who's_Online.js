/*
DESCRIPTION:
You have a group chat application, but who is online!?

You want to show your users which of their friends are online and available to chat!

Given an input of an array of objects containing usernames, status and time since last activity (in mins), create a function to work out who is online, offline and away.

If someone is online but their lastActivity was more than 10 minutes ago they are to be considered away.

The input data has the following structure:

[{
  username: 'David',
  status: 'online',
  lastActivity: 10
}, {
  username: 'Lucy', 
  status: 'offline',
  lastActivity: 22
}, {
  username: 'Bob', 
  status: 'online',
  lastActivity: 104
}]
The corresponding output should look as follows:

{
  online: ['David'],
  offline: ['Lucy'],
  away: ['Bob']
}
If for example, no users are online the output should look as follows:

{
  offline: ['Lucy'],
  away: ['Bob']
}
username will always be a string, status will always be either 'online' or 'offline' (UserStatus enum in C#) and lastActivity will always be number >= 0.

Finally, if you have no friends in your chat application, the input will be an empty array []. In this case you should return an empty object {} (empty Dictionary in C#).

*/

//Solution    
const whosOnline = (friends) => {
    //variable the holds an objects with keys of online,,offline and away folks with their corresponding values
    const obj = {}
    //variables that holds the list of individuals online,offline,away
    const online = friends.filter(x => x.status == 'online' && x.lastActivity <= 10).map(x => x.username)
    const offline = friends.filter(x => x.status == 'offline').map(x => x.username)
    const away = friends.filter(x => x.status == 'online' && x.lastActivity > 10).map(x => x.username)
    //if statements that place the list of people into the object
    online.length > 0 ? obj.online = online : null
    offline.length > 0 ? obj.offline = offline : null
    away.length > 0 ? obj.away = away : null
    //returned the final object
    return obj
}