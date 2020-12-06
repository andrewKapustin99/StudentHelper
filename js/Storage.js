const arrayStorage = require('./arrayStorage');

let globalId = 0
class documentStorage extends arrayStorage{
    constructor(){
        super();
    }
    addItems(item) {
        const id = globalId++;
        item.id = id;
        this.items.push(item);
        return item;
    }
    updateItem(id, body) {
        const file = this.items.find( item => item.id == id);
        if(file) {
            file.name = body.name || file.name;
            file.year = body.year;
            file.subject = body.subject;
            file.year = body.year;
            // ...
        }
        return file;
    }
}

module.exports = documentStorage;