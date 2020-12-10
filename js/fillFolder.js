const folderStorage = require('./FolderStorage');
const Folder = require('./Folder');

createRootFolder = function () {
    const rootFolder = new Folder(1, 'Root', null);
    folderStorage.addItems(rootFolder);
}

module.exports = createRootFolder;