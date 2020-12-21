const documentStorage = require('./DocumentStorage');
const File = require('./createFile');

const run = function () {
    const file1 = documentStorage.addItems( {name: 'logorifm', subject: 'algebra', year: 2020, mark: 5, parentFolderId: 0});
    const file2 = documentStorage.addItems( {name: 'english', subject: 'english in mass media', year: 2018, mark: 6, parentFolderId: 0});
    const file3 = documentStorage.addItems( {name: 'themes', subject: 'deutsch', year: 2015, mark: 3, parentFolderId: 0});
    const file4 = documentStorage.addItems( {name: 'spain history', subject: 'spanish', year: 2021, mark: 2, parentFolderId: 0});

    const file5 = documentStorage.addItems( {name: 'Document 1', subject: 'spanish', year: 2021, mark: 2, parentFolderId: 2});
    const file6 = documentStorage.addItems( {name: 'Document 2', subject: 'english', year: 2021, mark: 2, parentFolderId: 2});
    const file7 = documentStorage.addItems( {name: 'Document 3', subject: 'deutsch', year: 2021, mark: 2, parentFolderId: 2});
    const file8 = documentStorage.addItems( {name: 'Document 4', subject: 'turki', year: 2021, mark: 2, parentFolderId: 2});
    const file9 = documentStorage.addItems( {name: 'Document 5', subject: 'russian', year: 2021, mark: 2, parentFolderId: 2});

}

module.exports = run;