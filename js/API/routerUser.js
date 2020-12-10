const express = require('express');
const users = require('../Users-Storage');
const User = require('../createUser');
const router = express.Router();


// app.route('/users')
router
    .get('/', async (req, res) => {
        const list = await users.getList()
        res.send(list);
    })
    .post('/', async (req, res)=> {
        const user = await users.addItems(new User( req.body.name, req.body.id, req.body.roles));
        res.send(user);
    })
    .put('/:id', async (req, res) => {
        const id = req.params.id;
        const user = await users.updateUser(id, new User( req.body.name, req.body.id, req.body.roles));
        res.send(user);
    })
    .delete('/:id', async(req, res) => {
        await users.removeItem(Number(req.params.id));
        res.sendStatus(200);
    })
    .get('/:id', async (req, res) => {
        const user = await users.getElementById(Number(req.params.id));
        res.send(user);
    });

module.exports = router;