const express = require('express');
const folderStorage = require('../FolderStorage');
const Folder = require('../Folder');
const router = express.Router();

router
    .get('/', (req, res) =>{
        res.send( folderStorage.getList() );
    })
    .post('/', (req, res) => {
        const folder = folderStorage.addItems(new Folder(req.body.id, req.body.name, req.body.parentFolderId));
        res.send(folder);
    })
    .delete('/:id', (req, res) => {
        folderStorage.removeItem(Number(req.params.id));
        res.sendStatus(200);
    })
    .put('/:id', (req, res) => {
        const id = req.params.id;
        const folder = folderStorage.updateFolder(id, new Folder((req.body.id, req.body.name, req.body.parentFolderId)));
        res.send(folder);
    })
    .get('/:parentId', (req, res) =>{
        res.send(folderStorage.getFoldersByParentId(Number(req.params.parentFolderId)));
    })


module.exports = router;