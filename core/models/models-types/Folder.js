class Folder{
    constructor({id, name, parentFolderId, folders, files }){
        this.id = id;
        this.name = name; // имя папки
        this.parentFolderId = parentFolderId;
        this.folders = folders;
        this.files = files;
    }
}
module.exports = Folder;