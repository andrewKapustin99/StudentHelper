const db = require('./db')

class DocumentsStorage {
    async addItems(item) {
        const result = await db.runAsync(`INSERT INTO Documents (name, subject, year) VALUES (?,?,?)`, [item.name, item.subject, item.year])
        await db.runAsync(`INSERT INTO DocumentMark (id_docs, mark) VALUES (?, ?)`, [result.lastId, item.mark])
        await db.runAsync(`INSERT INTO DocumentParentFolderId (id_doc, parentFolderId) VALUES (?, ?)`, [result.lastId, item.parentFolderId])

        return new Promise( (resolve, reject)=> {
            db.get(`SELECT document_id, name, subject, year, mark, parentFolderId FROM Documents 
            JOIN DocumentMark ON document_id = ${result.lastId}
            JOIN DocumentParentFolderId ON document_id = ${result.lastId}`, function(err, row) {
                if(err) {
                    reject(err);
                }
                resolve(row);
            })
        })
    }
    getList() {
        return new Promise((resolve, reject) => {
            db.all(`SELECT document_id, name, subject, year, mark, parentFolderId FROM Documents 
            JOIN DocumentMark ON document_id = id_docs
            JOIN DocumentParentFolderId ON document_id = id_doc`, (err,rows)=> {
                if(err) {
                    reject(err);
                }
                resolve(rows)
            })
        })
    }
    async removeItem(id) {
        await db.runAsync(`DELETE FROM Documents WHERE document_id = (?)`, [id])
        await db.runAsync(`DELETE FROM DocumentMark WHERE id_docs = (?)`, [id])
        await db.runAsync(`DELETE FROM DocumentParentFolderId WHERE id_doc = (?)`, [id])
    }
    
    // async getElementById(id) {
    //     return new Promise((resolve, reject)=>{
    //         db.each(`SELECT * FROM Documents WHERE document_id = (?)`,[id], function(err, row) {
    //             if(err){
    //                 reject(err);
    //             }
    //             console.log(row);
    //             resolve(row);
                
    //         })
    //     })
    // }
    async updateItem(id, changedItem) {
        await db.runAsync(`UPDATE Documents 
            SET name = (?), 
            subject = (?),
            year = (?)
            WHERE document_id = (${id})`, [changedItem.name, changedItem.subject, changedItem.year])

        await db.runAsync(`UPDATE DocumentParentFolderId 
            SET parentFolderId = (?) 
            WHERE id_doc = (${id})`, [changedItem.parentFolderId])

        await db.runAsync(`UPDATE DocumentMark 
            SET mark = (?) 
            WHERE id_docs = (${id})`, [changedItem.mark])

        return new Promise((resolve, reject) => {
            db.get(`SELECT document_id, name, subject, year, mark, parentFolderId FROM Documents
            JOIN DocumentMark ON document_id = id_docs
            JOIN DocumentParentFolderId ON document_id = id_doc
            WHERE document_id = (?)`, [id], function(err, row) {
                if(err){
                    reject(err)
                }
                resolve(row)
            })
        })
    
    }
    getByParentId(parentId) {
        return new Promise((resolve, reject)=>{
            db.all(`SELECT document_id, name, subject, year, mark, parentFolderId FROM Documents   
            JOIN DocumentMark ON document_id = id_docs
            JOIN DocumentParentFolderId ON document_id = id_doc
            WHERE parentFolderId = (?)`,[parentId], function(err, row) {
                if(err){
                    reject(err);
                }
                console.log(row);
                resolve(row);
                
            })
        })
    }
}

module.exports = DocumentsStorage