const userStorage = require('../../storages/variety of storages/Users-Storage');
const User = require('../variety of models/User');

const run = function () {
    const user1 = userStorage.addItems({name: 'Ivan', id: 'ivan@gmail.com', roles: ['student']});
    const user2 = userStorage.addItems({name: 'Vasy', id: 'vasy@mail.com', roles: ['student']});
    const user3 = userStorage.addItems({name: 'Boris', id: 'boris@gmail.com', roles: ['student', 'admin']});
    const user4 = userStorage.addItems({name: 'Oly', id: 'oly@yandex.com', roles: ['student']});
    const user5 = userStorage.addItems({name: 'Gena', id: 'gena@tut.by', roles: ['student']});
    const user6 = userStorage.addItems({name: 'Nastia', id: 'nastia@gmail.com', roles: ['student']});
}
module.exports = run;