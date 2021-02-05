const sqlite = require('sqlite3').verbose();

let db = new sqlite.Database('dataBase/StudentHelperDB.db');

//1
// db.run('DROP TABLE Users', function(err) {
//     if(err) {
//         console.log(err.message);
//     }
//     console.log('Table is deleted');

//     //2
//     db.run('CREATE TABLE Users (id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR(255) );', function(err) {
//         if(err) {
//             return console.log(err.message);
//         }
//         console.log('Table is created');

//         //3
//         db.run('INSERT INTO users (name) VALUES (?)', ['Ivan'], function (err) {
//             if(err) {
//                 return console.log(err.message)
//             }
//             console.log(`A row has been inserted with rowid ${this.lastID}`);
//         });
//     });
// });

db.runAsync = (sql, params) =>
    new Promise( (resolve, reject) => {
        db.run(sql, params, function(err, ...args) {
            if(err) {
                reject(err);
            }
            // console.log(this, ...args);
            resolve();
        });
    });



db.runAsync('CREATE TABLE  users (id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR(255) );', undefined)
    .then(()=>db.runAsync('CREATE TABLE users (id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR(255) );', undefined))
.then(()=>db.close())




// ВАРИАНТ 1
// db.runAsync('CREATE TABLE users (id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR(255) );', undefined)
// .then(()=> db.runAsync('INSERT INTO users (name) VALUES (?)', ['Ivan']))
// .then(()=> db.runAsync('INSERT INTO users (name) VALUES (?)', ['Andrew']))
// .then(()=>db.close())

module.exports = db;



// ВАРИАНТ 2
// const runDB = async () =>{
//     try{
//         // await db.runAsync('CREATE TABLE users (id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR(255) );', undefined);
//         // await db.runAsync('INSERT INTO users (name) VALUES (?)', ['Ivan']);
//         // await db.runAsync('INSERT INTO users (name) VALUES (?)', ['Andrew']);
//         await db.runAsync('SELECT * FROM users');
//     } catch(err){

//     }
//     finally {
//         db.close();
//     }
// }
// runDB();


