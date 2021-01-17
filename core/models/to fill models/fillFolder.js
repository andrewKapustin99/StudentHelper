const folderStorage = require('../../storages/variety of storages/FolderStorage');
const Folder = require('../variety of models/Folder');

createRootFolder = function () {
    const root = folderStorage.addItems({name:'root', parentFolderId: null});
    const folder1 = folderStorage.addItems({name: 'курс 1', parentFolderId: root.id});
    const folder2 = folderStorage.addItems({name: 'курс 2', parentFolderId: root.id});

    const folder3 = folderStorage.addItems({name: 'Математика', parentFolderId: folder1.id});
    const folder4 = folderStorage.addItems({name: "Русский языка", parentFolderId: folder2.id});
    const folder5 = folderStorage.addItems({name: "Английский языка", parentFolderId: folder2.id});
    const folder6 = folderStorage.addItems({name: "Турецкий языка", parentFolderId: folder2.id});
    const folder7 = folderStorage.addItems({name: "Испанский языка", parentFolderId: folder2.id});
    const folder8 = folderStorage.addItems({name: "Немецкий языка", parentFolderId: folder2.id});

}

module.exports = createRootFolder;