// MAPstorage
const db = require('./db')

class UsersStorage {
    getList() {
        return new Promise((resolve, reject) => {
            db.all(`SELECT * FROM Users`, (err,rows)=> {
                if(err) {
                    reject(err);
                }
                resolve(rows)
            })
        })
    }
    async addItems(item) {
        const result = await db.runAsync(`INSERT INTO Users (name) VALUES (?)`, [item.name]);
        await db.runAsync(`INSERT INTO UserRoles (userId, roleId) VALUES (?, 1)`, [result.lastId]);

        return new Promise( (resolve, reject) => {
            db.get(`SELECT * FROM Users WHERE user_id == ${result.lastId}`, function(err, row) {
                if(err) {
                    reject(err);
                }
                resolve(row);
            });
        })

        // await db.getAsync(`SELECT * FROM Users WHERE user_id == ${result.lastId}`); // не возрващает объект

    }

    async getElementById(id) {
        return new Promise((resolve, reject)=>{
            db.each(`SELECT * FROM Users WHERE user_id == ${id}`, function(err, row) {
                if(err){
                    reject(err);
                }
                resolve(row);
            })
        })
    }

    async updateUser(id, newUser) {
        await db.runAsync(`UPDATE Users SET name = (?) WHERE user_id = (?)`, [`${newUser.name}`, `${id}`])
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