class ArrayStorage{
    constructor(initial){
        this.array = initial || [];
    }
    addItems(item) {
        this.array.push(item);
        return item;
    }
    removeItem(id) {
        this.array = this.array.filter( element => element.id !== id)
    }
    getList() {
        return this.array;
    }
    getElementById(id) {
        return this.array.find( item => item.id == id);
    }
    sortItems(key) {
        return this.array.sort( (a, b) => a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0);
    }
}
module.exports = ArrayStorage;