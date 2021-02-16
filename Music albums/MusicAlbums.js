// #Variables
const albums = {
    0: {
        id: 0,
        name: 'Album 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        cover: 'https://wallpapercave.com/wp/wp2700990.jpg'
    },
    1: {
        id: 1,
        name: 'Album 2',
        description: 'Lorem ipsum dolor sit amet.',
        cover: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/0ec5c569226647.5b79b483096c1.jpg'
    },
    2: {
        id: 2,
        name: 'Album 3',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        cover: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTs5ub84xlqvacUBWgOdMLOiehxW20KsWgH4A&usqp=CAU'
    },
    3: {
        id: 3,
        name: 'Album 4',
        description: 'Lorem ipsum dolor sit amet.',
        cover: 'https://i.pinimg.com/originals/da/18/3e/da183e46c3de1eaefa4f6705ca9a50dd.jpg'
    },
    4: {
        id: 4,
        name: 'Album 5',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        cover: 'https://i.pinimg.com/236x/e4/b0/89/e4b0892037b112c6b4643bbab3bb075b.jpg'
    },
    5: {
        id: 5,
        name: 'Листя...',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        cover: 'https://i.pinimg.com/originals/c1/36/a8/c136a856eaa1822f18de55723aa70b09.jpg'
    },
    6: {
        id: 6,
        name: 'Драматургія',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        cover: 'https://scontent-prg1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/101400760_273092844056406_5168436648273025175_n.jpg?_nc_ht=scontent-prg1-1.cdninstagram.com&_nc_cat=106&_nc_ohc=2wr9Wa7LVTEAX-nnPzn&oh=cc411ff559dd8b2b85c4247f5083599e&oe=5F931556'
    },
    7: {
        id: 7,
        name: 'Album 8',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        cover: 'https://i.pinimg.com/originals/a8/d7/42/a8d7422188e55a2508fe50d14daf0903.jpg'
    }
}
let files
let mediaFiles = []
let albumsList = document.querySelector('.albums-list')

// #Loop
for (const key in albums) {
    // #Card Item
    let div = document.createElement('div')
    div.setAttribute('class', 'col-12 col-sm-6 col-lg-4 col-xl-3 column-item')
    div.innerHTML = `
   <div class="card album-item mt-5 shadow">
        <a href="#" class="album-link">
            <div class="embed-responsive embed-responsive-1by1 image-wrp">
                <img src="${albums[key].cover}"
                     class="card-img-top embed-responsive-item album-cover-img"
                     alt="">
            </div>
        </a>
        <div class="card-body">
            <div class="row album-name-row">
                <h5 class="card-title">
                    ${albums[key].name}
                </h5>
            </div>
            <div class="row album-description-row">
                <p class="card-text album-description">
                    ${albums[key].description}
                </p>
            </div>
        </div>
        <div class="btn-group dropup">
            <button type="button"
                    class="btn btn-light btn-sm card-btn-settings"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false">
                <i class="fas fa-ellipsis-h"></i>
            </button>
            <div class="dropdown-menu">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <a class="dropdown-item" href="#">Something else here</a>
            </div>
        </div>
    </div>`
    albumsList.appendChild(div)
}

// #Description length
editDescriptionLength()

function editDescriptionLength() {
    let allDesc = document.querySelectorAll('.album-description')
    for (let i = 0; i < allDesc.length; i++) {
        allDesc[i].setAttribute('title', `${allDesc[i].innerHTML}`)
        if (allDesc[i].innerHTML.length > 27) {
            allDesc[i].innerHTML = `${allDesc[i].innerHTML.substr(0, 41)}...`
        }
    }
}

// #OnChange
function onChange(event) {
    files = event.target.files
    for (let i = 0; i < files.length; i++) {
        let check = addToArray(files[i])
        if (check) {
            showThumbs(files[i].size, files[i].lastModified, i)
        } else {
            Swal.fire({
                icon: 'info',
                title: 'Duplicate!',
                text: `File: ${files[i].name} has already been added!`
            })
        }
    }
    numRestruct()
    document.getElementById("fileInputControl").value = ""
    console.log(mediaFiles)
}

// #Add To Array
function addToArray(item) {
    let ifExist = checkBySize(item);
    if (ifExist) {
        return false
    } else {
        mediaFiles.push(item)
        return true
    }
}

// #Check By Size
function checkBySize(item) {
    for (let i = 0; i < mediaFiles.length; i++) {
        if (mediaFiles[i].size === item.size) {
            return true
        }
    }
    return false
}

// #Show thumbs
function showThumbs(fileSize, fileLastModified, i) {
    let div = document.createElement('div')
    div.setAttribute('class', 'col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4')
    div.innerHTML = `
    <div class="card preview-item mb-5">
        <div class="thumb-wrp">
            <img src="${URL.createObjectURL(event.target.files[i])}" 
                class="card-img-top thumb" 
                alt="">
        </div>
        <!-- #Input -->
        <div class="card-body thumb-input">
            <input type="text" 
                class="form-control file-name"
                id="thumb-input${i}"
                aria-label="Sizing example input" 
                aria-describedby="inputGroup-sizing-sm"
                name="name"
                placeholder="Name">
        </div>
        <!-- Dropright button -->
        <div class="btn-group thumb-menu">
            <button type="button" 
                class="btn btn-dark thumb-btn" 
                data-toggle="dropdown" 
                aria-haspopup="true" 
                aria-expanded="false">
                <i class="fas fa-ellipsis-v"></i>
            </button>
            <div class="dropdown-menu">
                <!-- #Checkbox -->
                <div class="form-check checkbox-wrap ml-1 mb-3">
                    <input class="form-check-input thumb-checkbox" 
                        type="checkbox" 
                        id="${fileLastModified}" 
                        title="Set as album cover" 
                        onclick="selectAlbumCover(this.id)">
                    <label class="form-check-label" for="${fileLastModified}">
                        <span class="thumb-checkbox-text mr-1">Set as album cover</span>
                    </label>
                </div>
                <div class="dropdown-divider"></div>
                <!-- #Remove -->
                <div class="remove ml-1" 
                    id="${fileSize}" 
                    onclick="deleteItem(this.id)"
                    title="Remove">
                    <i class="fas fa-trash-alt"></i>
                    Remove
                </div>
            </div>
        </div>    
    </div>`
    document.querySelector('.output').insertBefore(div, null);

    let thumb = document.querySelectorAll('.thumb')
    thumb.onload = () => {
        URL.revokeObjectURL(thumb.src)
    }
}

// #Delete thumb
function deleteItem(id) {
    let selectedId = Number(id)
    for (let i = 0; i < mediaFiles.length; i++) {
        if (mediaFiles[i].size === selectedId) {
            mediaFiles.splice(i, 1)
            document.getElementById(id)
                .parentElement
                .parentElement
                .parentElement
                .parentElement
                .setAttribute("style", "opacity: 0")
            setTimeout(() => {
                document.getElementById(id)
                    .parentElement
                    .parentElement
                    .parentElement
                    .parentElement
                    .remove()
            }, 500)
        }
    }
    setTimeout(() => {
        numRestruct()
    }, 1000)
}

// #ID Restruct
function numRestruct() {
    let arr = document.querySelectorAll(".file-name")
    for (let i = 0; i < arr.length; i++) {
        arr[i].id = `thumb-input${i}`
    }
}

// #Select album cover
function selectAlbumCover(id) {
    for (let i = 0; i < mediaFiles.length; i++) {
        document.getElementById(mediaFiles[i].lastModified).checked = false
    }
    document.getElementById(id).checked = true
}

//#To Send
document.addEventListener('DOMContentLoaded', init)

function init() {
    document.querySelector('#btn-submit').addEventListener('click', toSend)
}

function toSend(e) {

    // #Cancel the event(submit)
    e.preventDefault()

    // #Variables
    let fileNames = []
    let checkBoxes = []
    let formData = new FormData()
    let xhr = new XMLHttpRequest()

    // #File names to array
    for (let i = 0; i < mediaFiles.length; i++) {
        if (!document.querySelector(`#thumb-input${i}`).value) {
            fileNames.push('')
        } else {
            fileNames.push(document.querySelector(`#thumb-input${i}`).value.trim())
        }
    }

    // #Value of checkboxes to array
    for (let i = 0; i < mediaFiles.length; i++) {
        checkBoxes.push(document.getElementById(mediaFiles[i].lastModified).checked)
    }

    console.log(fileNames, checkBoxes)

    // #Creating albumInfo object
    let albumInfo = {
        albumName: document.querySelector('#album-name').value.trim(),
        albumDescription: document.querySelector('#album-description').value.trim(),
        files: []
    }
    for (let i = 0; i < mediaFiles.length; i++) {
        albumInfo.files[i] = { name: fileNames[i], isCover: checkBoxes[i] }
    }

    // #albumInfo to JSON
    let albumInfoJson = JSON.stringify(albumInfo)
    console.log(albumInfo, albumInfoJson)

    // #Album info(json) to FormData
    formData.append('albumInfo', albumInfoJson)

    for (let i = 0; i < mediaFiles.length; i++) {
        //#Media files to FormData
        formData.append('file', mediaFiles[i])
    }

    xhr.open('POST', 'https://postman-echo.com/post', true)
    xhr.send(formData)

    xhr.onload = function () {
        if (xhr.status !== 200) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: `Error ${xhr.status}: ${xhr.statusText}!`
            })

        } else {
            Swal.fire({
                icon: 'success',
                title: 'Done!',
                text: `Done, got ${xhr.response.length} bytes`
            })
        }
    };

    xhr.onerror = function () {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!'
        })
    };
}

// #Display width event
window.addEventListener('load', () => {
    let clientWidth = document.body.clientWidth;
    if (clientWidth < 576) {
        addClass();
    } else if (clientWidth > 575) {
        removeClass();
    }
});

window.addEventListener('resize', () => {
    let clientWidth = document.body.clientWidth;
    console.log(clientWidth);
    if (clientWidth < 576) {
        addClass();
    } else if (clientWidth > 575) {
        removeClass();
    }
});

function addClass() {
    document.querySelector('.add-album-btn').classList.add('add-album-btn-mobile');
    document.querySelector('.add-album-btn').innerHTML = `<i class="fas fa-plus"></i>`;

    document.querySelectorAll('.card-body').forEach((element) => {
        element.classList.add('card-body-mobile');
    })

    document.querySelectorAll('.album-cover-img').forEach((element) => {
        element.classList.add('album-cover-img-mobile');
    })

    document.querySelectorAll('.album-name-row').forEach((element) => {
        element.classList.add('album-name-row-mobile');
    })

    document.querySelectorAll('.album-description-row').forEach((element) => {
        element.classList.add('album-description-row-mobile');
    })

    document.querySelectorAll('.dropup').forEach((element) => {
        element.classList.add('dropup-mobile');
    })

    document.querySelectorAll('.card-btn-settings').forEach((element) => {
        element.classList.add('card-btn-settings-mobile');
    })
}

function removeClass() {
    document.querySelector('.add-album-btn').classList.remove('add-album-btn-mobile');
    document.querySelector('.add-album-btn').innerHTML = 'Додати альбом';

    document.querySelectorAll('.card-body').forEach((element) => {
        element.classList.remove('card-body-mobile');
    })

    document.querySelectorAll('.album-cover-img').forEach((element) => {
        element.classList.remove('album-cover-img-mobile');
    })

    document.querySelectorAll('.album-name-row').forEach((element) => {
        element.classList.remove('album-name-row-mobile');
    })

    document.querySelectorAll('.album-description-row').forEach((element) => {
        element.classList.remove('album-description-row-mobile');
    })

    document.querySelectorAll('.dropup').forEach((element) => {
        element.classList.remove('dropup-mobile');
    })

    document.querySelectorAll('.card-btn-settings').forEach((element) => {
        element.classList.remove('card-btn-settings-mobile');
    })
}
