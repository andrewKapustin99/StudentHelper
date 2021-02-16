const express = require('express');
const bodyParser = require('body-parser');
// const documents = require('../js/DocumentStorage');

// const fillDocStorage = require('../../core/models/to-fill-models/fillFile'); // потом можно удалить
// const fillUserStorage = require('../../core/models/to-fill-models/fillUser');
// const fillFolderStorage = require('../../core/models/to-fill-models/fillFolder');

var cors = require('cors');


const apiRouter = require('./API/router/apiRouter');

// fillDocStorage();
// fillUserStorage();
// fillFolderStorage();

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