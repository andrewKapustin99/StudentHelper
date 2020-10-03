class User{
    constructor(name, id, roles) {
        this.name = name;
        this.id = id;
        this.roles = roles;
    }
    
    // sayHi() {
    //     console.log(`Меня зовут ${this.name}`);
    // }
    // sayHi = () => { console.log(`Меня зовут ${this.name}`) }
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

let users = [];
users.push(new User('Pete', 'pete@gmail.com', ['admin']));
users.push(new User('Pete', 'pete@gmail.com', ['student']));
users.push(new User('Pete', 'pete@gmail.com', ['admin', 'student']));





const studentIvan = new Student('Ivan', 'ivan.ivanov@gmail.com');




// const user1 = new User('Ivan', Date.now() );
// user1.sayHi();

// class Student extends User{
//     constructor(name, id){
//         super(name, id);
//     }
//     sayHi() {
//         console.log(`My name is ${this.name}`)
//     }
// }
// const student1 = new Student('Oleg', Date.now());
// console.log(student1)

// const users = [user1, student1];
// users.forEach(user => user.sayHi());
// class University { // в отдельный файл
//     constructor(faculty, year) {
//         this.faculty = faculty;
//         this.year = year;
//     }
// }