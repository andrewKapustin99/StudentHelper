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
    const tag = `
        <td colspan="4">
            <a href="#" id="${item.id}" class="tableBtnFolders">${item.name}</a>
        </td>`;
    let td = tag
    createTr(td, style)
}

// верстка для файла
function createFile(item) {
    const style = 'table-row-file';
    const tag = `
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
        </td>`;
    let td = tag
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
        if(target.id != 1) {
            createBackBtn(data.parentFolderId);
        }
        console.log(target);
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
    console.log(target);

    function showContent() {
        clearTable();
        fillTable(target);
    }

    if(target.classList.value === 'tableBtnFolders' || target.classList.value === 'tableBtnBack') {
        showContent()
    }
});


// ________________________________________________________________________________________________________________________________

// let foldersRow = document.getElementsByClassName('table-row-folder');
// console.log(foldersRow);
// table.addEventListener('click', function(event) {
//     let target = event.target;
//     console.log(target);
// })


// кнопка действия


let dropBtns = document.getElementsByClassName('btn-down');



// function showMenu(target) {
//     target.classList.add('show')
// }
// function closeMenu() {
//     for(let i = 0; i < dropBtns.length; i++) {
//         dropBtns[i].nextElementSibling.classList.remove('show')
//     }
// }
// document.addEventListener('click', function(event) {
//     let target = event.target;
//     if(target.classList.contains('btn-down')) {
//         const menu = target.nextElementSibling;
//         if(menu.classList.contains('show')){
//             closeMenu()
//         } else {
//             closeMenu()
//             showMenu(menu)
//         }
//     }
// })




tbody.addEventListener('contextmenu', function(event) {
    hideMenu();
    event.preventDefault();
    let target = event.target;
    console.log(target);
    if(target.classList.value === 'tableBtnFolders') {
        const menu = document.getElementById('folderDropdown')
        menu.style.left = event.clientX + "px";
        menu.style.top = event.clientY + "px";
        menu.classList.add('show')    
    } else if (target.classList.value === 'tableBtnFiles') {
        const menu = document.getElementById('fileDropdown')
        menu.style.left = event.clientX + "px";
        menu.style.top = event.clientY + "px";
        menu.classList.add('show')
    }

    // Добавить папку
    const addFolderBtn = document.getElementById('addFolder');
    addFolderBtn.addEventListener('click', function(event) {
        event.preventDefault();
        hideMenu();

        document.querySelector('.modal_add_folder').classList.remove('hide');
        document.querySelector('.darkBcgr').classList.remove('hide');

        const headerTitle = document.getElementById('modal_folder_header-title')
        const body = document.getElementById('modal_folder_body')
        const footer = document.getElementById('modal_folder_footer')


        headerTitle.innerHTML = "Добавить папку"
        body.innerHTML = `
        <div class="folder_body_wrapp">
            <label for="addFoldername"> Название папки</label>
            <input id="addFoldername" type="text">
        </div> 
        `
        footer.innerHTML = `
            <button>Закрыть</button>
            <button id="add">Добавить</button>
        `

        const addBtn = document.getElementById('add')
        addBtn.addEventListener('click', function() {
            folderClient.postFolder({
                "name":document.getElementById('addFoldername').value, 
                "parentFolderId": target.id
                }
            ).then(()=>{})
            hideWindow()
        })        
    })


    // удалить папку
    const deleteFolderBtn = document.getElementById('removeFolder')
    deleteFolderBtn.addEventListener('click', function(event) {
        event.preventDefault();
        hideMenu()
        document.querySelector('.modal_add_folder').classList.remove('hide');
        document.querySelector('.darkBcgr').classList.remove('hide');

        const headerTitle = document.getElementById('modal_folder_header-title')
        const body = document.getElementById('modal_folder_body')
        const footer = document.getElementById('modal_folder_footer')

        headerTitle.innerHTML = "Добавить папку"
        body.innerHTML = `
        <div class="folder_body_wrapp">
            <p>Вы уыерене что хотите удалить папку?</p>
        </div> 
        `
        footer.innerHTML = `
            <button id="yesRemove">Да</button>
            <button id="noRemove">Нет</button>
        `

        const myFolder = target
        console.log(myFolder);
        const yesRemove = document.getElementById('yesRemove')
        yesRemove.addEventListener('click', function() {
            folderClient.deleteFolder(target.id).then(data=>console.log(data))
            hideWindow()
        
            console.log(myFolder);
            // clearTable();
            folderClient.get
        })
    })
})



function hideMenu() {
    const menu = document.getElementById('folderDropdown');
    const fileMenu = document.getElementById('fileDropdown');
    menu.classList.remove('show')
    fileMenu.classList.remove('show')
}

document.addEventListener('click', function() {
    hideMenu()
})



function hideWindow() {
    document.querySelector('.modal_add_folder').classList.add('hide')
    document.querySelector('.darkBcgr').classList.add('hide')
}


const closeModalWindow = document.getElementById('closeModalWindow');
closeModalWindow.addEventListener('click', hideWindow)

