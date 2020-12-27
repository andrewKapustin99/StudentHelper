class ClientApi {
    async getData(url) {
        return await fetch(url)
            .then(res => res.json());
    }

    async postData(url, data) {
        return await fetch(url, {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
    }

    async deleteData(url, data) {
        return await fetch(url, {
            method: "DELETE"
        })
            .then(res => res.text())
    }

    async putData(url, data) {
        return await fetch(url, {
            method: "PUT",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res=>res.json())
    }

}
const basicUrl = 'http://localhost:1703';

class FolderClient extends ClientApi {
    async getRootFolder() {
        return await this.getData(basicUrl+'/folders/root');
    }
    async getFolder(id) {
        return await this.getData(basicUrl+'/folders/'+id) // загнать путь в переменную ????
    }
    async deleteFolder(id) {
        return await this.deleteData(basicUrl+'/folders/'+id);
    }
    async postFolder(data) {
        return await this.postData(basicUrl+'/folders', data);
    }
    async putFolder(id, data) {
        return await this.putData(basicUrl+'/folders/'+id, data);
    }
}


const folderExample = {
    "name":'New Folder new Life'
}

const folderClietn = new FolderClient();
// folderClietn.getRootFolder().then(data => console.log(data));
// folderClietn.getFolder(2).then(data => console.log(data));
// folderClietn.postFolder(folderExample).then( data=> console.log(data));
// folderClietn.deleteFolder(2).then( data => console.log(data));
// folderClietn.putFolder(2, folderExample).then(data => console.log(data));



class FileClient extends ClientApi {
    async getFile(parentId) {
        return await this.getData(basicUrl+'/files/'+parentId);
    }
    async deleteFile(id) {
        return await this.deleteData(basicUrl+'/files/'+id);
    }
    async postFile(data) {
        return await this.postData(basicUrl+'/files', data);
    }
    async putFile(id, data) {
        return await this.putData(basicUrl+'/files/'+id, data);
    }
}
const fileExample = {
    "name": "Name of the Book - 2",
    "subject": "new Subject",
    "year": 1212,
    "mark": 4,
    "parentFolderId": 0,
    "id": 1
}
const fileClient = new FileClient();
// fileClient.getFile(0).then( data => console.log(data));
// fileClient.postFile(fileExample).then(data=> console.log(data));
// fileClient.deleteFile(2).then(data=>console.log(data));
// fileClient.putFile(1, fileExample).then( data=> console.log(data) );


class UserClient extends ClientApi {
    async getAllUsers() {
        return await this.getData(basicUrl+'/users');
    }
    async getUser(id) {
        return await this.getData(basicUrl+'/users/'+id);
    }
    async deleteUser(id) {
        return await this.deleteData(basicUrl+'/users/'+id);
    }
    async postUser(data) {
        return await this.postData(basicUrl+'/users', data);
    }
    async putUser(id, data) {
        return await this.putData(basicUrl+'/users/'+id, data);
    }
}
const newUser = {
    "name": "Igor",
    "id": "igor@mail.ru",
    "roles": ["student"]
}
const userClietn = new UserClient();
userClietn.getAllUsers().then( data => console.log(data) );
// userClietn.getUser('ivan@gmail.com').then( data => console.log(data) );
// userClietn.deleteUser('ivan@gmail.com').then( data => console.log(data));


// РАБОТАЮТ В POSTMAN, НО НЕ РАБОТАЮТ В БРАУЗЕРЕ
// userClietn.postUser(newUser).then(data => console.log(data));
userClietn.putUser('ivan@gmail.com', newUser).then( data => console.log(data));
