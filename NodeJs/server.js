const express = require('express');
const bodyParser = require('body-parser');
// const documents = require('../js/DocumentStorage');

const fillDocStorage = require('../js/fillFile'); // потом можно удалить
const fillUserStorage = require('../js/fillUser');
const fillFolderStorage = require('../js/fillFolder');

var cors = require('cors');


const apiRouter = require('../js/API/apiRouter');

fillDocStorage();
fillUserStorage();
fillFolderStorage();

const app = express();
app.use(bodyParser.json()); // чтобы парсить json

app.use(cors());


app.get('/', function (req, res) {
    res.send("Show API");
});

app.use('/', apiRouter);


app.listen(1703, function () {
    console.log("API app started");
});