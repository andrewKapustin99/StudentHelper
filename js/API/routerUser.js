var express = require('express');
var users = require('../Users-Storage');
var User = require('../createUser');
var router = express.Router();

router
    .get('/', (req, res) => {
        res.send(users.getList());
    })
    .post('/', (req, res)=> {
        const user = users.addItems(new User( req.body.name, req.body.id, req.body.roles));
        res.send(user);
    })
    .put('/:id', (req, res) => {
        const id = req.params.id;
        const user = users.updateUser(id, new User( req.body.name, req.body.id, req.body.roles));
        res.send(user);
    })
    .delete('/:id', (req, res) => {
        users.removeItem(Number(req.params.id));
        res.sendStatus(200);
    })
    .get('/:id', (req, res) => {
        res.send(users.getElementById(Number(req.params.id)));
    });

module.exports = router;