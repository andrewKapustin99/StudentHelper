// const arrayStorage = require('../../../core/storages/storage types/arrayStorage');
// const Folder = require('../../../core/models/models-types/Folder');

// let _id = 0;
// class FolderStorage extends  arrayStorage{
//     constructor() {
//         super();
//     }
//     addItems(item) {
//         item.id = _id++;
//         this.array.push(item);
//         return new Promise((resolve, reject)=> {
//             resolve(this.array[this.array.length-1])
//         });
//         // item.id = _id++;
//         // this.array.push(item);
//         // return item;
//     }

//     getElementById(id, extended) {
//         if(!extended) {
//             super.getElementById(id);
//         }
//         const innerFolders = this.getByParentId(id);
//         return new Folder({...super.getElementById(id), folders: innerFolders})
//     }
//     getByParentId(parentId) {
//         return this.array.filter( x => x.parentFolderId === parentId);
//     }

// }
const FoldersStorage = require('../dataBase/folderStorage')
const folderStorage = new FoldersStorage();

module.exports = folderStorage;