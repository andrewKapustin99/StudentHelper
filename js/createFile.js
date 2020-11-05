class SubjectDocument{
    constructor(name, subject, year, mark){
        this.name = name;
        // this.id = Date.now();
        this.subject = subject;
        this.year = year;
        this.mark = mark;
    }
}

module.exports = SubjectDocument;