const express = require('express');
const app = express();

const folderStorage = require('../FolderStorage');
const Folder = require('../Folder');
const router = express.Router();

router
    .get('/', (req, res) => {
        res.send(document.getFolders())
    })
    .post('/', (req, res)=> {
        const folder = folderStorage.addFolder(new Folder(req.body.name, req.body.id, req.body.parentId));
        res.send(folder);
    })
    .delete('/:id', (req, res) => {
        folderStorage.deleteFolder(Number(req.params.id));
    })
    .get('/:id', (req, res) => {
        res.send(folderStorage.getFoldersByParentId(Number(req.params.parentId)));
    })
    .post('/:id/upload', (req, res) =>{

    })


module.exports = router;