let userId = 0;
class MapStorage {
    constructor(initial){
        this.map = initial || new Map();
    }
    addItems(item) {
        this.map.set(userId++, item);
    }
    removeItem(key) {
        this.map.delete(key)
    }
    getElementById(id) {
        let a = null;
        this.map.forEach(element => {
            element.id == id ? a = element : false;
        });
        return a;
    }
    getList() {
        let arr = Object.fromEntries(this.map.entries());
        return Object.values(arr)
    }
    sortItems(key){
        let keysValue = Object.fromEntries(this.map.entries());
        keysValue = Object.values(keysValue);
        return keysValue.sort( (a, b) => a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0);
    }
    updateUser(id, newItem) {
        const oldItem = this.map.get(id);
        const updatedItem = {...oldItem, ...newItem};
        this.map.set(id, updatedItem);
        return updatedItem;
    }
    getValue(value) {
        return [...this.map].find( ([key, val]) => val == value )[0]
    }
}

module.exports = MapStorage;