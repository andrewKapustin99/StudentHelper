const db = require('./db');
console.log(db)

// db.runAsync('CREATE TABLE users (id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR(255) );', undefined)
// .then(()=> db.runAsync('INSERT INTO users (name) VALUES (?)', ['Ivan']))
// .then(()=> db.runAsync('INSERT INTO users (name) VALUES (?)', ['Andrew']))
// .then(()=>db.close())