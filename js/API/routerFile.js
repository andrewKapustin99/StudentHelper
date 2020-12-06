const express = require('express');
const documents = require('../DocumentStorage');
const SubjectDocument = require('../createFile');

const router = express.Router();

router // вынести в отдельный файл
    .get('/', (req, res) => {
        res.send(documents.getList());
    })
    .post('/', (req, res) => {
        const file = documents.addItems(new SubjectDocument( req.body.name, req.body.subject, req.body.year, req.body.mark));
        // res.send(documents.getList())
        res.send(file);
    })
    .put('/:id',(req, res) => {
        const id = req.params.id;
        const file = documents.updateItem(id, new SubjectDocument( req.body.name, req.body.subject, req.body.year, req.body.mark));
        console.log(file, req.body);
        res.send(file);
    })
    .delete('/:id',(req, res) => {
        documents.removeItem(Number(req.params.id));
        res.sendStatus(200);
    })
    .get('/:id', (req, res) => {
        res.send( documents.getElementById(Number(req.params.id)) );
    });

module.exports = router;