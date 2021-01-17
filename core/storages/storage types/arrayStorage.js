class ArrayStorage{
    constructor(initial){
        this.array = initial || [];
    }
    addItems(item) {
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
    updateItem(id, changedItem) {
        const itemIndex = this.array.findIndex( x => x.id === Number(id));
        const oldItem = this.array[itemIndex];
        const normalizedData = Object.fromEntries(Object.entries(changedItem).filter( ([key, value]) => value !== undefined))
        const updatedItem = {...oldItem, ...normalizedData};
        this.array.splice(itemIndex, 1, updatedItem);
        return updatedItem;
    }
}
module.exports = ArrayStorage;