// MAPstorage
const db = require('./db')

class UsersStorage {
    async getList() {
        return await db.allAsync(`SELECT user_id, name, roleName FROM Users JOIN UserRoles ON user_id = userId
        JOIN Roles ON roleId = role_id`)
    }
    async addItems(item) {
        const result = await db.runAsync(`INSERT INTO Users (name) VALUES (?)`, [item.name]);
        await db.runAsync(`INSERT INTO UserRoles (userId, roleId) VALUES (?, 1)`, [result.lastId]);

        return await db.getAsync(`SELECT * FROM Users WHERE user_id == ${result.lastId}`)
    }

    async getElementById(id) {
        return await db.getAsync(`SELECT * FROM Users WHERE user_id == ${id}`)
    }

    async updateUser(id, newUser) {
        await db.runAsync(`UPDATE Users SET name = (?) WHERE user_id = (?)`, [`${newUser.name}`, `${id}`])
        await db.runAsync(`UPDATE Users SET name = (?) WHERE user_id = (?)`)
    }
    async getValue (value) {
        return Promise.resolve(value.user_id)
    }
    async removeItem(id) {
        await db.runAsync(`DELETE FROM Users WHERE user_id = (?)`, [id])
        await db.runAsync(`DELETE FROM UserRoles WHERE userId = (?)`, [id])
    }
}

module.exports = UsersStorage