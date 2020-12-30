const table = document.getElementById('table');
// let nameParentId = null;

// function createFolders(item) {
//     let tr = document.createElement('tr');
//     let td = document.createElement('td');
//     let a = document.createElement('a');
//     a.setAttribute('href', '#'); 
//     a.classList.add('tableBtnFolders');
//     a.setAttribute('id', item.id)
//     td.setAttribute('colspan', 4);
//     a.innerText = item.name;
//     td.appendChild(a);
//     table.appendChild(tr);
//     tr.appendChild(td);
// }

// function createFiles(item, index) {
//     const tr = document.createElement('tr');
//     tr.classList.add('trFiles')
//     const itemArr = [item.name, item.subject, item.year, item.mark]

//     for(let i = 0; i < 4; i++) {
//         const td = document.createElement('td');
//         const a = document.createElement('a');
//         a.classList.add('tableBtnFiles');
//         a.innerText = itemArr[i];
//         td.appendChild(a);
//         tr.appendChild(td);
//         table.appendChild(tr);
        
//     }
//     document.getElementsByClassName('trFiles')[index].cells[0].children[0].setAttribute('href', '#');
//     document.getElementsByClassName('trFiles')[index].cells[0].children[0].setAttribute('id', item.name);
// }

// function createBackBtn() {
//     const tr = document.createElement('tr');
//     const td = document.createElement('td');
//     const a = document.createElement('a');
//     td.setAttribute('colspan', 4);
//     a.classList.add('tableBtnBack');
//     a.innerText = '...';
//     td.appendChild(a);
//     tr.appendChild(td);
//     table.appendChild(tr);
// }

// folderClietn.getRootFolder().then(data => {
//     console.log(data);
//     if(data.folders) {
//         data.folders.map( (item) => {
//             createFolders(item)
//         });
//     }

//     if(data.innerFiles.length) {
//         data.innerFiles.map( (item, index) => {
//             createFiles(item, index);
//         });
//     }
//     nameParentId = data.parentFolderId;
// });


// document.getElementsByTagName('tbody')[0].addEventListener('click', function(event) {
//     let target = event.target;
//     console.log(target.classList.value);   

//     if(target.classList.value === 'tableBtnFolders') {
//         let element = document.getElementsByTagName('table')[0].tBodies[0];
//         while (element.firstChild) {
//             element.removeChild(element.firstChild);
//         }
    
//         folderClietn.getFolder(Number(target.id)).then(data=> {
//             console.log(data);
//             createBackBtn();
//             data.folders.map(item => {
//                 createFolders(item);
//             });
//             if(data.innerFiles.length) {
//                 data.innerFiles.map( (item, index) => {
//                     createFiles(item, index);
//                 });
//             }
//             nameParentId = data.parentFolderId;

//         });
//     }
//     if(target.classList.value === 'tableBtnBack') {
//         let element = document.getElementsByTagName('table')[0].tBodies[0];
//         while (element.firstChild) {
//             element.removeChild(element.firstChild);
//         }

//         folderClietn.getFolder(nameParentId).then(data=> {
//             console.log(target.parentId);
//             createBackBtn();
//             data.folders.map(item => {
//                 createFolders(item);
//             });
//             if(data.innerFiles.length) {
//                 data.innerFiles.map( (item, index) => {
//                     createFiles(item, index);
//                 });
//             }
//             // nameParentId = data.parentFolderId;
//         });
//     }
// });



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

function createBackBtn() {
    const tr = document.createElement('tr');
    const td = `
        <td colspan="4">
            <a class="tableBtnBack">...</a>
        </td>
    `
    table.append(tr);
    tr.insertAdjacentHTML("afterend", td);
}


folderClietn.getRootFolder().then(data => {
    console.log(data);
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

document.getEle

document.getElementsByTagName('tbody')[0].addEventListener('click', function(event) {
    let target = event.target;
    console.log(target);

    if(target.classList.value === 'tableBtnFolders') {
        let element = document.getElementsByTagName('table')[0].tBodies[0];
        while (element.firstChild) {
            element.removeChild(element.firstChild);
        }
    
        folderClietn.getFolder(Number(target.id)).then(data=> {
            createBackBtn();
            data.folders.map(item => {
                createFolders(item);
            });
            if(data.innerFiles.length) {
                data.innerFiles.map( (item, index) => {
                    createFiles(item, index);
                });
            }
            currentFolder = data;
        });

    } else if(target.classList.value === 'tableBtnBack') {

        let element = document.getElementsByTagName('table')[0].tBodies[0];
        while (element.firstChild) {
            element.removeChild(element.firstChild);
        }

        folderClietn.getFolder(???????????).then(data=> {
            
            createBackBtn();
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
});