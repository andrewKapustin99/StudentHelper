const express = require('express');
const bodyParser = require('body-parser');
// const documents = require('../js/DocumentStorage');

const fillDocStorage = require('../js/fillFile'); // потом можно удалить
const fillUserStorage = require('../js/User');

const apiRouter = require('../js/API/apiRouter');



fillDocStorage();
fillUserStorage();


const app = express();
app.use(bodyParser.json()); // чтобы парсить json


app.get('/', function (req, res) {
    res.send("Show API");
});

app.use('/', apiRouter);


app.listen(1703, function () {
    console.log("API app started");
});