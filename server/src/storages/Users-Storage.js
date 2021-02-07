// const MapStorage = require('../../../core/storages/storage types/mapStorage');

// const usersStorage = new MapStorage();

const UsersStorage = require('../dataBase/usersStorage') ;
const usersStorage = new UsersStorage();

module.exports = usersStorage;