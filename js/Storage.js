let docsStorage = [];
class DocumentStorage{
    constructor(arr){
        this.arr = arr;
    }
    addDoc(doc){ // добавить документ в хранилище
        docsStorage.push(doc);
    }
    removeDoc(doc){ // удалить документ из хранилища
        docsStorage.splice(docsStorage.indexOf(doc), 1);
    }
    getList(){ // вывести список всех документов хранилища
        return this.arr;
    }
    sortDocs(){
        return docsStorage.sort();
    }
}

let DocumentStor = new DocumentStorage(docsStorage);


// console.log(DocumentStor)



// готово