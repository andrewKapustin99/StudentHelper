const arrayStorage = require('./arrayStorage');

let globalId = 0;
class FolderStorage extends  arrayStorage{
    constructor() {
        super();
    }
    addItems(item) {
        const id = globalId++;
        item.id = id;
        const parentFolder = this.array.find( item => item.parentFolderId === null);
        // console.log(this.array);
        // item.parentFolderId = parentFolder.name;
        this.array.push(item);
        return item
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
            folder.parentFolderId = body.parentFolderId || folder.parentFolderId;
        }
    }
}
const folderStorage = new FolderStorage();
module.exports = folderStorage;