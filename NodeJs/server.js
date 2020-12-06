var express = require('express');
var bodyParser = require('body-parser');
var documents = require('../js/DocumentStorage');
var fillDocStorage = require('../js/fillFile'); // потом можно удалить
var SubjectDocument = require('../js/createFile');

var users = require('../js/Users-Storage');
var fillUserStorage = require('../js/User');
var User = require('../js/createUser');
// const apiRouter = require('API/apiRouter');
const apiRouter = require('../js/API/apiRouter');



fillDocStorage();
fillUserStorage();


var app = express();
app.use(bodyParser.json()); // чтобы парсить json


app.get('/', function (req, res) {
    res.send("Show API");
});

app.use('/api', apiRouter);


app.listen(1703, function () {
    console.log("API app started");
});