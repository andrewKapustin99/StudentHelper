const table = document.getElementById('table');


let currentFolder;

let innerTr = document.getElementById('tableTr');

function createFolders(item) {

    let tr = document.createElement('tr');

    const td = `
        <td colspan="4">
            <a href="#" id="${item.id}" class="tableBtnFolders">${item.name}</a>
        </td>
    `;
    table.append(tr);
    tr.insertAdjacentHTML("afterend", td);

}

function createFiles(item, index) {
    let tr = document.createElement('tr');
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
    `
    table.append(tr);
    tr.insertAdjacentHTML("afterend", td);
}

function createBackBtn(parentId) {
    const tr = document.createElement('tr');
    const td = `
        <td colspan="4">
            <a id="${parentId}" class="tableBtnBack">...</a>
        </td>
    `
    table.append(tr);
    tr.insertAdjacentHTML("afterend", td);
}


folderClietn.getRootFolder().then(data => {
    if(data.folders) {
        data.folders.map( (item) => {
            createFolders(item);
        });
    }

    if(data.innerFiles.length) {
        data.innerFiles.map( (item, index) => {
            createFiles(item, index);
        });
    }
});

document.getElementsByTagName('tbody')[0].addEventListener('click', function(event) {
    let target = event.target;

    function showContent() {
        let element = document.getElementsByTagName('table')[0].tBodies[0];
        while (element.firstChild) {
            element.removeChild(element.firstChild);
        }

        folderClietn.getFolder(Number(target.id)).then(data=> {

            if(target.id != 0) {
                createBackBtn(data.parentFolderId);
            }

            data.folders.map(item => {
                createFolders(item);
            });
            if(data.innerFiles.length) {
                data.innerFiles.map( (item, index) => {
                    createFiles(item, index);
                });
            }

        });
    }

    if(target.classList.value === 'tableBtnFolders') {
        showContent()
    } else if (target.classList.value === 'tableBtnBack') {
        showContent();
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
//         folderClietn.postFolder(createdFolder);

//         console.log();
        
//     });
// });