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
        


    // await db.runAsync(`CREATE TABLE IF NOT EXISTS ParentFolderId (
    //     parentFolderId_id INTEGER PRIMARY KEY AUTOINCREMENT,
    //     folderId INTEGER,
    //     parentFolderId INTEGER,
    //     FOREIGN KEY (folderId) REFERENCES Folders(id) )`)
    //     .then(()=>db.runAsync(`INSERT INTO ParentFolderId(folderId, parentFolderId) VALUES (?, ?)`, [1, null]))
    //     .then(()=>db.runAsync(`INSERT INTO ParentFolderId(folderId, parentFolderId) VALUES (?, ?)`, [2, 1]))
    //     .then(()=>db.runAsync(`INSERT INTO ParentFolderId(folderId, parentFolderId) VALUES (?, ?)`, [3, 1]))
    //     .then(()=>db.runAsync(`INSERT INTO ParentFolderId(folderId, parentFolderId) VALUES (?, ?)`, [4, 2]))
}

module.exports = createFolderStorage;