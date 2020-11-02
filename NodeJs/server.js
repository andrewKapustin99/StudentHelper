var express = require('express');
var bodyParser = require('body-parser');
var documents = require('../js/DocumentStorage');
var fillDocStorage = require('../js/fillFile'); // потом можно удалить
var SubjectDocument = require('../js/createFile');

var users = require('../js/Users-Storage');
var fillUserStorage = require('../js/User');
var User = require('../js/createUser');

fillDocStorage();
fillUserStorage();


var app = express();
app.use(bodyParser.json()); // чтобы парсить json


app.get('/', function (req, res) {
    res.send("Show API");
});

app.route('/files')
    .get( (req, res) => {
        res.send(documents.getList());
    })
    .post( (req, res) => {
        documents.addItems(new SubjectDocument( req.body.name, req.body.subject, req.body.year, req.body.mark));
        res.send(documents.getList());
    })
    .put( (req, res) => {
    })
    .delete( (req, res) => {
        documents.removeItem(req.params.id);
        res.sendStatus(200);
    });

app.route('/files/:id')
    .get( (req, res) => {
        res.send( documents.getElementById(Number(req.params.id)) );
    })

// app.route('files/:key')
//     .get( (req, res) => {
//
//     })

app.route('/users')
    .get( (req, res) => {
        res.send(users.getList());
    })
    .post( (req, res)=> {
        users.addItems(new User( req.body.name, req.body.id, req.body.roles));
        res.sendStatus(200);
    })
    .delete( (req, res) => {
        users.removeItem(req.params.id);
        res.sendStatus(200);
    })

app.route( '/users/:id')
    .get( (req, res) => {
        res.send(users.getElementById(req.params.id))
    })









// app.get('/users', function (req, res) {
//     // res.send(users);
//     res.send(documents.getList());
// });
//
// // Добавление юзера
// app.post('/users', function (req, res) {
//     var user = {
//         id: Date.now(),
//         name: req.body.name
//     }
//     users.push(user);
//     res.send(user);
// });
//
// // обновление юзера
// app.put('/users/:id', function (req, res) {
//     var user = users.find( function (user) {
//         return user.id === Number(req.params.id);
//     });
//     user.name = req.body.name;
//     res.sendStatus(200);
// })
//
//
// app.delete('/users/:id', function (req, res) {
//     users = users.filter( function (user) {
//         return user.id !== Number(req.params.id);
//     });
//     res.sendStatus(200);
// })

app.listen(1703, function () {
    console.log("API app started");
});