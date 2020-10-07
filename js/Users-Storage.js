let userId = 0;
class UsersStorage extends DocumentStorage{
    constructor(initial){
        super(initial);
        this.items = initial || new Map();
    }
    addItems(item) {
        this.items.set(userId++, item);
    }
    removeItem(key) {
        this.items.delete(key)
    }
    getElementById(id) {
        let a = null;
        this.items.forEach(element => {
            element.id == id ? a = element : false;
        });
        return a;
    }
    getList() {
        let arr = Object.fromEntries(this.items.entries());
        return Object.values(arr)
    }
    sortItems(key){
        let keysValue = Object.fromEntries(this.items.entries());
        keysValue = Object.values(keysValue);
        return keysValue.sort( (a, b) => a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0);
    }
}

const userStorage = new UsersStorage();