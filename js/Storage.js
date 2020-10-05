let docsStorage = [];
class DocumentStorage{
    constructor(arr){
        this.arr = arr;
    }
    // this = DocumentStor
    addDoc(doc){ // добавить документ в хранилище
        docsStorage.push(doc);
    }
    removeDoc(name){ // удалить документ из хранилища
        for(let i = 0; i < this.arr.length; i++) {
            if(name == this.arr[i].name){
                this.arr.splice(i, 1)
            }
        }
    }
    getList(){ // вывести список всех документов хранилища
        return this.arr;
    }
    // sortDocs(){
    //     return docsStorage.sort();
    // }
    getElementByItsId(id){ // выбрать элемент по ID
        for(let i = 0; i < this.arr.length; i++){
            if(this.arr[i].id == id){
                return this.arr[i];
            }
        } 
    }
    sortList(param){
        if(param == 'name'){
            return docsStorage.sort(function(a, b){
                if(a.name > b.name){
                    return 1
                } if (a.name < b.name){
                    return -1
                }
                return 0
            });
        } else if (param == 'subject'){
            return docsStorage.sort(function(a, b){
                if(a.subject > b.subject){
                    return 1
                } if (a.subject < b.subject){
                    return -1
                }
                return 0
            });
        } else if (param == 'year'){
            return docsStorage.sort(function(a, b){
                if(a.year > b.year){
                    return 1
                } if (a.year < b.year){
                    return -1
                }
                return 0
            });
        } else if(param == 'mark') {
            return docsStorage.sort(function(a, b){
                if(a.mark > b.mark){
                    return 1
                } if (a.mark < b.mark){
                    return -1
                }
                return 0
            });
        }
    }
}
let DocumentStor = new DocumentStorage(docsStorage);