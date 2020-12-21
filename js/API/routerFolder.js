const express = require('express');
const folderStorage = require('../FolderStorage');
const filesStorage = require('../DocumentStorage')
const Folder = require('../Folder');
const router = express.Router();

router
    .get('/', async(req, res) =>{
        const folders = await folderStorage.getList();
        res.send( folders );
    })
    .get('/root', async(req, res) =>{
        const root = await folderStorage.getByParentId(null);
        const resultFolder = await folderStorage.getElementById(root[0].id, true);
        const innerFiles = await filesStorage.getByParentId(root[0].id);
        resultFolder.innerFiles = await innerFiles;
        return res.json(resultFolder);
    })
    .get('/:id', async (req, res) =>{
        const foldId = await Number(req.params.id);
        const resultFolder = await folderStorage.getElementById(foldId, false);
        const innerFiles = await filesStorage.getByParentId(foldId);
        resultFolder.innerFiles = await innerFiles;
        return res.json(resultFolder);
    })
    .post('/', async (req, res) => {
        const folder = await folderStorage.addItems(new Folder({name: req.body.name, parentFolderId:req.body.parentFolderId}) );
        res.send(folder);
    })
    .delete('/:id', async (req, res) => {
        await folderStorage.removeItem(Number(req.params.id));
        res.sendStatus(200);
    })
    .put('/:id', async (req, res) => {
        const id = req.params.id;
        const folder = await folderStorage.updateItem(id, req.body );
        res.send(folder);
    })


module.exports = router;