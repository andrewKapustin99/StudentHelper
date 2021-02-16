const db = require('./db')

class DocumentsStorage {
    async addItems(item) {
        const result = await db.runAsync(`INSERT INTO Documents (name, subject, year, mark, parentFolderId) VALUES (?,?,?,?,?)`, [item.name, item.subject, item.year, item.mark, item.parentFolderId])

        return await db.getAsync(`SELECT * FROM Documents WHERE id = ${result.lastId}`)
    }
    async getList() {
        return await db.allAsync(`SELECT * FROM Documents`)
    }
    async removeItem(id) {
        await db.runAsync(`DELETE FROM Documents WHERE id = (?)`, [id])
    }
    
    // async getElementById(id) {
    // }

    async updateItem(id, changedItem) {
        await db.runAsync(`UPDATE Documents 
            SET name = (?), 
            subject = (?),
            year = (?),
            mark = (?), 
            parentFolderId = (?)
            WHERE id = (${id})`, [changedItem.name, changedItem.subject, changedItem.year, changedItem.mark, changedItem.parentFolderId])

        return await db.getAsync(`SELECT * FROM Documents WHERE id = ${id}`)    
    }
    async getByParentId(parentId) {
        return await db.allAsync(`SELECT * FROM Documents WHERE parentFolderId = ${parentId}`)
    }
}

module.exports = DocumentsStorage