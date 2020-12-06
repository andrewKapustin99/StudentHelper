var USERSTORAGE = require('./Users-Storage');

var createU = function() {
    class User{
        constructor(name, email, roles) {
            this.name = name;
            this.id = email;
            this.roles = roles;
        }
    }

    class Admin extends User{
        constructor(name, id){
            super(name, id);
        }
    }

    class Student extends User{
        constructor(name, id) {
            super(name, id);
        }
    }

    function createUser(name, id, roles) {
        USERSTORAGE.addItems(new User(name, id, roles));
    }

    createUser('Ivan', 'ivan@gmail.com', ['student']);
    createUser('Vasy', 'vasy@mail.com', ['student']);
    createUser('Boris', 'boris@gmail.com', ['student', 'admin']);
    createUser('Oly', 'oly@yandex.com', ['student']);
    createUser('Gena', 'gena@tut.by', ['student']);
    createUser('Nastia', 'nastia@gmail.com', ['student']);
}
module.exports = createU;