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

start('english litrature', 'english litrature', 2019, 5);
start('english', 'english in mass media', 2019, 6);
start('deutch themes', 'deutsch', 2020, 3);
start('spain history', 'spanish', 2017, 2)




