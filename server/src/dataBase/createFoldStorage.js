const db = require('./db');

async function createFolderStorage() {
    await db.runAsync(`CREATE TABLE IF NOT EXISTS Folders (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name VARCHAR(255), 
        parentFolderId INTEGER)`)
        .then(()=>db.runAsync(`INSERT INTO Folders (name, parentFolderId) VALUES (?, ?)`,[`root`, null]))
        .then(()=>db.runAsync(`INSERT INTO Folders (name, parentFolderId) VALUES (?, ?)`,[`Курс 1`, 1]))
        .then(()=>db.runAsync(`INSERT INTO Folders (name, parentFolderId) VALUES (?, ?)`,[`Курс 2`, 1]))
        .then(()=>db.runAsync(`INSERT INTO Folders (name, parentFolderId) VALUES (?, ?)`,[`Математика`, 2]))
}

module.exports = createFolderStorage;