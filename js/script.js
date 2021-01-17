const table = document.getElementById('table');

// верстка для папки
function createTr(td, style) {
    let tr = document.createElement('tr');
    if(style) {
        tr.classList.add(style);
    }
    tr.innerHTML = td;
    table.append(tr); 
}
// верстка для папки
function createFolder(item) {
    const style = 'table-row-folder';
    const td = `
        <td colspan="4">
            <a href="#" id="${item.id}" class="tableBtnFolders">${item.name}</a>
        </td>
        <td class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">...</button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="#">Добавить</a>
                <a class="dropdown-item" href="#">Удалить</a>
                <a class="dropdown-item" href="#">Изменить</a>
            </div>
        </td>
    `;
    createTr(td, style)
}

// верстка для файла
function createFile(item) {
    const style = 'table-row-file';
    const td = `
        <td>
            <a href="#" class="tableBtnFiles">${item.name}</a>
        </td>
        <td>
            <a class="tableBtnFiles">${item.subject}</a>
        </td>
        <td>
            <a class="tableBtnFiles">${item.year}</a>
        </td>
        <td>
            <a class="tableBtnFiles">${item.mark}</a>
        </td>
        <td class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">...</button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="#">Добавить</a>
                <a class="dropdown-item" href="#">Удалить</a>
                <a class="dropdown-item" href="#">Изменить</a>
            </div>
        </td>
    `;
    createTr(td, style);
}

// верстка для кнопки назад
function createBackBtn(parentId) {
    const style = 'table-row-backBtn';
    const td = `
        <td colspan="5">
            <a id="${parentId}" class="tableBtnBack">...</a>
        </td>
    `;
    createTr(td, style);
}

// __________________________________________________________________________________________________________________________________

// заполнение корневой папки при загрузке 
function fillRootTable() {
    folderClient.getRootFolder().then(data => {
        createFolders(data);
        createFiles(data);
    });
}
fillRootTable();

// __________________________________________________________________________________________________________________________________

// создание всех папок из директории
function createFolders(data) {
    data.folders.forEach( item => createFolder(item) );
}
// создание всех файлов из директории
function createFiles(data) {
    data.innerFiles.forEach( item => createFile(item) );
}

// заполние таблицы папками и файлами исходя из директории
function fillTable(target) {
    folderClient.getFolder(Number(target.id)).then(data=> {
        if(target.id != 0) {
            createBackBtn(data.parentFolderId);
        }
        createFolders(data);
        createFiles(data);
    });
}

// очистить содержание таблицы
function clearTable() {
    tbody.innerHTML = '';
}

// __________________________________________________________________________________________________________________________________

let tbody = document.getElementsByTagName('tbody')[0];
tbody.addEventListener('click', function(event) {
    let target = event.target;

    function showContent() {
        clearTable();
        fillTable(target);
    }

    if(target.classList.value === 'tableBtnFolders' || target.classList.value === 'tableBtnBack') {
        showContent()
    }
});


// ________________________________________________________________________________________________________________________________


// let addFolderBtn = document.getElementById('addFolder');
// let deleteFolderBtn = document.getElementById('deleteFolder');
// let submitFolder = document.getElementById('submitFolder');

// addFolderBtn.addEventListener('click', function() {

//     let folderName = document.getElementById('folderName');

//     submitFolder.addEventListener('click', function() {
//         let createdFolder = {
//             'name': folderName.value
//         }
//         folderClient.postFolder(createdFolder);

//         console.log();
        
//     });
// });