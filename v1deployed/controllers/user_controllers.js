const userData = require("../data/users.json");
var fs = require('fs');

console.log(userData);

 export function getAllUsers() {
    return userData;
}

export function getUserbyId(ID) {
    return userData[ID];
}

export function createUser(user) {
    userData.push(user);
    fs.writeFileSync('../data/users.json', JSON.stringify(userData));
    return user;
}

