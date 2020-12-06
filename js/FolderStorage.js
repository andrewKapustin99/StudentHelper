// class FolderStorage{
//     constructor(initial){
//         this.folders = initial || [];
//     }
//     addFolder(folder) {
//         this.folders.push(folder);
//     }
//     deleteFolder(id) {
//         this.folders = this.folders.filter( element => element.id !== id)
//     }
//     getFolders() {
//         return this.folders;
//     }
//     getFoldersByParentId(id) {
//         return this.folders.find( item => folders.parentId == id);
//     }
//     getFilesByParentId() {
//
//     }
// }
const folderStorage = new FolderStorage();
module.exports= folderStorage;
