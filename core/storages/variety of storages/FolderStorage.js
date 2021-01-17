const arrayStorage = require('../storage types/arrayStorage');
const Folder = require('../../models/variety of models/Folder')

let _id = 0;
class FolderStorage extends  arrayStorage{
    constructor() {
        super();
    }
    addItems(item) {
        item.id = _id++;
        this.array.push(item);
        return item;
    }

    getElementById(id, extended) {
        if(!extended) {
            super.getElementById(id);
        }
        const innerFolders = this.getByParentId(id);
        return new Folder({...super.getElementById(id), folders: innerFolders})
    }
    getByParentId(parentId) {
        return this.array.filter( x => x.parentFolderId === parentId);
    }

}
const folderStorage = new FolderStorage();
module.exports = folderStorage;