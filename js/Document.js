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

function start(name, subject, year, mark) {
    const docum = new SubjectDocument(name, subject, year, mark);
    DocumentStor.addDoc(docum);
}

start('logorifm', 'algebra', 2020, 5);
start('english', 'english in mass media', 2018, 6);
start('themes', 'deutsch', 2015, 3);
start('spain history', 'spanish', 2021, 2)

