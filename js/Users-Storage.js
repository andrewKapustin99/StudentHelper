// class UsersStorage{
//     constructor(users, roles){
//         this.users = users;
//         this.roles = roles;
//     }
//     addUsers(key, value) {
//         this.users.set(key, value);
//     }
// }
// let userStorage = new UsersStorage(new Map(), new Set());


// console.log(userStorage)

class UsersStorage {
    constructor(user) {
        this.user = user;
    }
    show() {
        console.log(this.user);
    }
}
// console.log(new UsersStorage)