class User{
    constructor({name, email, roles}) {
        this.name = name;
        this.id = email;
        this.roles = roles;
    }
}

module.exports = User;