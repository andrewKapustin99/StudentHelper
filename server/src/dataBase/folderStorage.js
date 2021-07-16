const db = require('./db')

class FoldersStorage {
    async addItems(item) {
        const result = await db.runAsync(`INSERT INTO Folders (name, parentFolderId) VALUES (?, ?)`, [item.name, item.parentFolderId])
        return await db.getAsync(`SELECT * FROM Folders WHERE id = ${result.lastId}`)
        // возвращает id = 1 всегда
    }
    async removeItem(id) {
        await db.runAsync(`DELETE FROM Folders WHERE id = (?)`, [id])
    }
    async getList(){
        return await db.allAsync(`SELECT * FROM Folders`)
    }

    async getElementById(id) {
            const folder = await db.getAsync(`SELECT * FROM Folders WHERE id = ${id}`)

            const folders = await db.allAsync(`SELECT * FROM Folders WHERE parentFolderId = ${id}`)

            return {
                ...folder, 
                folders
            }
    }


    updateItem(id, changedItem) {

    }
    async getByParentId (id) {
        let sql;
        if(id === null) {
            sql = `SELECT * FROM Folders WHERE parentFolderId IS NULL`;
        } else {
            sql = `SELECT * FROM Folders WHERE parentFolderId = ${id}`;
        }
        return await db.allAsync(sql)
    }
}

module.exports = FoldersStorage;