class arrayStorage{
    constructor(initial){
        this.items = initial || [];
    }
    addItems(item) {
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
}


module.exports = arrayStorage;


