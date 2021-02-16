const db = require('./db');

async function createDocStorage() {
    await db.runAsync(`CREATE TABLE IF NOT EXISTS Documents (
        document_id INTEGER PRIMARY KEY AUTOINCREMENT,
        name VARCHAR(255),
        subject VARCHAR(255),
        year INTEGER )`)
        .then(()=>db.runAsync(`INSERT INTO Documents (name, subject, year) VALUES (?, ?, ?)`, ['logorifm', 'algebra', 2020]))
        .then(()=>db.runAsync(`INSERT INTO Documents (name, subject, year) VALUES (?, ?, ?)`, ['algebra', 'fff', 2018]))
        .then(()=>db.runAsync(`INSERT INTO Documents (name, subject, year) VALUES (?, ?, ?)`, ['rrr', 'eee', 1309]))

    await db.runAsync(`CREATE TABLE IF NOT EXISTS DocumentMark (
        mark_id INTEGER PRIMARY KEY AUTOINCREMENT,
        id_docs INTEGER,
        mark INTEGER,
        FOREIGN KEY (id_docs) REFERENCES Documents(document_id) )`)
        .then(()=>{
            db.each(`SELECT document_id FROM Documents`, function(err, row) {
                if(err){
                    return err
                }
                return db.runAsync(`INSERT INTO DocumentMark (id_docs, mark) VALUES (?, 0)`, [row.document_id])
            })
        })
    
    await db.runAsync(`CREATE TABLE IF NOT EXISTS DocumentParentFolderId (
        doc_par_fold_id INTEGER PRIMARY KEY AUTOINCREMENT,
        id_doc INTEGER,
        parentFolderId INTEGER,
        FOREIGN KEY (id_doc) REFERENCES Documents(document_id) )`)
        .then(()=>{
            db.each(`SELECT document_id FROM Documents`, function(err, row) {
                if(err) {
                    return err
                }
                return db.runAsync(`INSERT INTO DocumentParentFolderId (id_doc, parentFolderId) VALUES (?, 1)`, [row.document_id])
            })
        })


        // .then(()=>db.runAsync(`INSERT INTO DocumentParentFolderId (parent_folder_id) VALUES (?)`, [0]))
}

module.exports = createDocStorage;