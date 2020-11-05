var documentStorage = require('./DocumentStorage');

var run = function () {
    let id = 0;
    class SubjectDocument{
        constructor(name, subject, year, mark){
            this.name = name;
            this.id = id++;
            this.subject = subject;
            this.year = year;
            this.mark = mark;
        }
    }

    function createDocument(name, subject, year, mark) {
        documentStorage.addItems(new SubjectDocument(name, subject, year, mark));
    }

    createDocument('logorifm', 'algebra', 2020, 5);
    createDocument('english', 'english in mass media', 2018, 6);
    createDocument('themes', 'deutsch', 2015, 3);
    createDocument('spain history', 'spanish', 2021, 2);
}

module.exports = run;