const express = require('express');
const users = require('../Users-Storage');
const User = require('../createUser');
const router = express.Router();


// app.route('/users')
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