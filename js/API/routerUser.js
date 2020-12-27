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
        const user = await users.addItems(new User({name: req.body.name, id: req.body.id, roles: req.body.roles}));
        // res.sendStatus(200);
        res.send(user); // не показывает нового юзера
    })
    .put('/:id', async (req, res) => {
        const userId = await users.getElementById(req.params.id);
        const id = await users.getValue(userId);
        const updatedUser = await users.updateUser(id, new User({name: req.body.name, email: req.body.email, roles: req.body.roles}));
        res.send(updatedUser);
    })
    .delete('/:id', async(req, res) => {
        const user = await users.getElementById(req.params.id);
        const id = await users.getValue(user);
        await users.removeItem(id);
        res.sendStatus(200);
    })
    .get('/:id', async (req, res) => {
        const user = await users.getElementById(req.params.id);
        res.send(user);
    });

module.exports = router;