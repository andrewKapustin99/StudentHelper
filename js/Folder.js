class Folder{
    constructor(id, name, parentFolderId){
        this.id = id;
        this.name = name; // имя папки
        this.parentFolderId = parentFolderId;
    }
}
module.exports = Folder;