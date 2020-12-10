const express = require('express');
const folderStorage = require('../FolderStorage');
const Folder = require('../Folder');
const router = express.Router();

router
    .get('/', async(req, res) =>{
        const folders = await folderStorage.getList()
        res.send( folders );
    })
    .post('/', async (req, res) => {
        const parentId = folderStorage.getList()[0].name;
        const folder = await folderStorage.addItems(new Folder(req.body.id, req.body.name, parentId));
        res.send(folder);
    })
    .delete('/:id', async (req, res) => {
        await folderStorage.removeItem(Number(req.params.id));
        res.sendStatus(200);
    })
    .put('/:id', async (req, res) => {
        const id = req.params.id;
        const folder = await folderStorage.updateFolder(id, new Folder((req.body.id, req.body.name, req.body.parentFolderId)));
        res.send(folder);
    })
    .get('/:parentId', async (req, res) =>{
        const fold = await folderStorage.getFoldersByParentId(Number(req.params.parentFolderId))
        res.send(fold);
    })


module.exports = router;