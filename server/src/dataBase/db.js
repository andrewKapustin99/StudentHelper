// Создание БД и методов работы с ней
const sqlite = require('sqlite3').verbose();
let db = new sqlite.Database('StudentHelperDB.db');

db.runAsync = (sql, params) =>
    new Promise( (resolve, reject) => {
        db.run(sql, params, function(err, result) {
            if(err) {
                reject(err);
            }

            resolve({
                lastId: this.lastID,
                changes: this.changes
            });
        });
    });

db.getAsync = (sql, params) => 
    new Promise( (resolve, reject) => {
        db.get(sql, params, function(err, result) {
            if(err) {
                reject(err);
            }
            resolve(result)
        });
    });

db.eachAsync = (sql, params) => {
    let promises = [];
    
    new Promise((resolve, reject)=>{
        db.each(sql, params, function(err, row) {
            if(err) {
                reject(err)
            }
            resolve(promises.push(row))
        })
    })
    return Promise.all(promises);
}
    



db.allAsync = (sql, params) => {
    return new Promise((resolve, reject)=>{
        db.all(sql, params, function(err, rows) {
            if(err) {
                reject(err)
            }
            resolve(rows)
        });
    })
}
    


module.exports = db;

let fillDB = require('./createDB');
fillDB();


let fillDocs = require('./createDocStorage');
fillDocs();

let fillFolders = require('./createFoldStorage');
fillFolders();

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

// ВАРИАНТ 1
// db.runAsync('CREATE TABLE users (id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR(255) );', undefined)
// .then(()=> db.runAsync('INSERT INTO users (name) VALUES (?)', ['Ivan']))
// .then(()=> db.runAsync('INSERT INTO users (name) VALUES (?)', ['Andrew']))
// .then(()=>db.close())

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


