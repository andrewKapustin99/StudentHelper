class Folder{
    constructor(id, parentId, name, descrioption){
        this.id = id;
        this.parentId = parentId;
        this.name = name; // имя папки
        this.descrioption = descrioption;
    }
}
module.exports = Folder;