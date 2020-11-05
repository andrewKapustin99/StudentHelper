let globalId = 0
class DocumentStorage{
    constructor(initial){
        this.items = initial || [];
    }
    addItems(item) {
        const id = globalId++;
        item.id = id;
        this.items.push(item);
        return item;
    }
    removeItem(id) {
        this.items = this.items.filter( element => element.id !== id)
    }
    getList() {
        return this.items;
    }
    getElementById(id) {
        return this.items.find( item => item.id == id);
    }
    sortItems(key) {
        return this.items.sort( (a, b) => a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0);
    }
    updateItem(id, body) {
        const file = this.items.find( item => item.id == id);
        if(file) {
            file.name = body.name || file.name;
            file.year = body.year;

            // ...
        }
        return file;
    }
}


module.exports = DocumentStorage;