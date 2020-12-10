const express = require('express');
const documents = require('../DocumentStorage');
const SubjectDocument = require('../createFile');

const router = express.Router();

router // вынести в отдельный файл
    .get('/', async (req, res) => {
        const list = await documents.getList()
        res.send(list);
    })
    .post('/', async (req, res) => {
        const file = await documents.addItems(new SubjectDocument( req.body.name, req.body.subject, req.body.year, req.body.mark));
        res.send(file);
    })
    .put('/:id',async (req, res) => {
        const id = req.params.id;
        const file = await documents.updateItem(id, new SubjectDocument( req.body.name, req.body.subject, req.body.year, req.body.mark));
        // console.log(file, req.body);
        res.send(file);
    })
    .delete('/:id',async (req, res) => {
        await documents.removeItem(Number(req.params.id));
        res.sendStatus(200);
    })
    .get('/:id', async (req, res) => {
        const file = await documents.getElementById(Number(req.params.id));
        res.send( file );
    });

module.exports = router;