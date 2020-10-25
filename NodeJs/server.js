var express = require('express');
var bodyParser = require('body-parser');

var users = [
    {
        "id": 1,
        "name": "Andrew"
    },
    {
        "id": 2,
        "name": "Ivan"
    },
    {
        "id": 3,
        "name": "Vasy"
    }
];


var app = express();
app.use(bodyParser.json()); // чтобы парсить json


app.get('/', function (req, res) {
    res.send("Show API");
});
app.get('/users', function (req, res) {
    res.send(users);
});

// Добавление юзера
app.post('/users', function (req, res) {
    var user = {
        id: Date.now(),
        name: req.body.name
    }
    users.push(user);
    res.send(user);
});

// обновление юзера
app.put('/users/:id', function (req, res) {
    var user = users.find( function (user) {
        return user.id === Number(req.params.id);
    });
    user.name = req.body.name;
    res.sendStatus(200);
})


app.delete('/users/:id', function (req, res) {
    users = users.filter( function (user) {
        return user.id !== Number(req.params.id);
    });
    res.sendStatus(200);
})

app.listen(1703, function () {
    console.log("API app started");
});