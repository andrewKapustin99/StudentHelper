let usersStorage = new Map();
class UsersStorage {
    constructor(userMap) {
        this.userMap = userMap;
    }
    addUser(user) {
        usersStorage.set(Date.now(), user)
    }
}
let UserStorage = new UsersStorage(usersStorage);