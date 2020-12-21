const ArrayStorage = require('./arrayStorage');

let _id = 0;
class DocumentStorage extends ArrayStorage{
    constructor() {
        super();
    }
    addItems(item) {
        item.id = _id++;
        this.array.push(item);
        return item;
    }
    getByParentId(parentId) {
        return this.array.filter( x=> x.parentFolderId === parentId);
    }

}
const documentStorage = new DocumentStorage();
module.exports = documentStorage;