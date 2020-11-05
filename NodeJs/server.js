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
var router = express.Router();
app.use(bodyParser.json()); // чтобы парсить json


app.get('/', function (req, res) {
    res.send("Show API");
});

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
app.use('/files', router);
// app.route('/files/:id')
//     .get( (req, res) => {
//         res.send( documents.getElementById(Number(req.params.id)) );
//     })

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
    .put( (req, res) => {
        const id = req.params.id;
        const user = users.updateUser(id, new User( req.body.name, req.body.id, req.body.roles));

        res.send(user);
    })
    .delete( (req, res) => {
        users.removeItem(req.params.id);
        res.sendStatus(200);
    })
    .get( (req, res) => {
        res.send(users.getElementById(req.params.id));
    })

// app.route( '/users/:id')
//     .get( (req, res) => {
//         res.send(users.getElementById(req.params.id))
//     })









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