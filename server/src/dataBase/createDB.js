// const sqlite = require('sqlite3').verbose();
// let db = new sqlite.Database('StudentHelperDB.db');

// ЗАПОЛНЕНИЕ mapStorage / UserStorage

const db = require('./db');


async function fillDB() {
    await db.runAsync(`CREATE TABLE IF NOT EXISTS Users (
        user_id INTEGER PRIMARY KEY AUTOINCREMENT,
        name VARCHAR(255) )`)
        .then(()=>db.runAsync(`INSERT INTO Users (name) VALUES (?)`, ['Andrew']))
        .then(()=>db.runAsync(`INSERT INTO Users (name) VALUES (?)`, ['Ivan']))
        .then(()=>db.runAsync(`INSERT INTO Users (name) VALUES (?)`, ['Kate']))
    
    await db.runAsync(`CREATE TABLE IF NOT EXISTS Roles (
        role_id INTEGER PRIMARY KEY AUTOINCREMENT,
        roleName TEXT )`)
        .then(()=>db.runAsync(`INSERT INTO Roles (roleName) VALUES (?)`, ['User']))
        .then(()=>db.runAsync(`INSERT INTO Roles (roleName) VALUES (?)`, ['Admin']))
    
    
    
    await db.runAsync(`CREATE TABLE IF NOT EXISTS UserRoles (
        id INTEGER PRIMARY KEY AUTOINCREMENT, 
        userId INTEGER,
        roleId INTEGER,
        FOREIGN KEY (userId) REFERENCES Users(user_id),
        FOREIGN KEY (roleId) REFERENCES Roles(role_id) )`)
        .then(()=>{
            db.each(`SELECT user_id FROM Users`, function(err, row) {
                if(err){
                    return err;
                }
                return db.runAsync(`INSERT INTO UserRoles (userId, roleId) VALUES (?, 1)`, [row.user_id])
            })
        })
}

module.exports = fillDB;
// fillDB();

