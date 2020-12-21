class SubjectDocument{
    constructor({name, id, subject, year, mark, parentFolderId}){
        this.name = name;
        this.id = id;
        this.subject = subject;
        this.year = year;
        this.mark = mark;
        this.parentFolderId = parentFolderId;
    }
}

module.exports = SubjectDocument;