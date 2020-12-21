class User{
    constructor(name, email, roles) {
        this.name = name;
        this.id = email;
        this.roles = roles;
    }
}

// class Admin extends User{
//     constructor(name, id){
//         super(name, id);
//     }
// }
//
// class Student extends User{
//     constructor(name, id) {
//         super(name, id);
//     }
// }
module.exports = User;