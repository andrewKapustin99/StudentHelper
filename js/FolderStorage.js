const arrayStorage = require('./arrayStorage');

let globalId = 0;
class FolderStorage extends  arrayStorage{
    constructor() {
        super();
    }
    addItems(item) {
        if(this.array.length === 0) {
            item.parentFolderId = null;
        }

        const id = globalId++;
        item.id = id;
        this.array.push(item);
        return item;
    }

    getFoldersByParentId(id) {
        return this.array.find( item => item.parentFolderId === id);
    }
    getFilesByParentId(id) {
        // return ????.find( item => item.parentFolderId === id)
    }
    updateFolder(id, body) {
        const folder = this.array.find( item => item.id == id);
        if(folder) {
            folder.name = body.name || folder.name;
        }
    }
}
const folderStorage = new FolderStorage();

module.exports = folderStorage;