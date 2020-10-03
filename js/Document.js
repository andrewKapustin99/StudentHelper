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

let documents =[]; // запушить файлы в массив

const file1 = new SubjectDocument('english litrature', 'english litrature', 2019, 0);
const file2 = new SubjectDocument('english', 'english in mass media', 2019, 0);
const file3 = new SubjectDocument('deutch themes', 'deutsch', 2020, 0);
const file4 = new SubjectDocument('spain history', 'spanish', 2017, 0);
