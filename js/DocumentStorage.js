const ArrayStorage = require('./arrayStorage');

let globalId = 0;
class DocumentStorage extends ArrayStorage{
    constructor() {
        super();
    }
    addItems(item) {
        const id = globalId++;
        item.id = id;
        this.array.push(item);
        return item;
    }
    updateItem(id, body) {
        const file = this.array.find( item => item.id == id);
        if(file) {
            file.name = body.name || file.name;
            file.year = body.year || file.subject;
            file.subject = body.subject || file.subject;
        }
        return file;
    }
}
const documentStorage = new DocumentStorage();
module.exports = documentStorage;