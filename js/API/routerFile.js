const express = require('express');
const documents = require('../DocumentStorage');
const SubjectDocument = require('../createFile');

const router = express.Router();

router // вынести в отдельный файл
    .get('/', async (req, res) => {
        const list = await documents.getList()
        res.send(list);
    })
    .get('/:parentId', async (req, res) =>{
        const fold = await documents.getByParentId(Number(req.params.parentId))
        res.send(fold);
    })
    .post('/', async (req, res) => {
        const file = await documents.addItems(new SubjectDocument({name: req.body.name, subject: req.body.subject, year: req.body.year, mark: req.body.mark, parentFolderId: req.body.parentFolderId}));
        res.send(file);
    })
    .put('/:id',async (req, res) => {
        const id = req.params.id;
        const file = await documents.updateItem(id, req.body);
        res.send(file);
    })
    .delete('/:id',async (req, res) => {
        await documents.removeItem(Number(req.params.id));
        res.sendStatus(200);
    })

module.exports = router;