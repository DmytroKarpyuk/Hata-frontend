import { PhotoAlbumsDomElements } from './PhotoAlbumsDomElements';
import { AlbumToAdd } from './PhotoAlbumsInterfaces';
import Swal from 'sweetalert2';

const photoAlbumsDomElements = new PhotoAlbumsDomElements();

let files: FileList | null;
const mediaFiles: File[] = [];

export class PhotoAlbumsAdd {

    init(): void {
        document.addEventListener('DOMContentLoaded', () => {
            this.fileSelection();
            this.removePhoto();
            this.selectAlbumCover();
            this.toSend();
        });
    }

    // File selection
    fileSelection(): void {
        photoAlbumsDomElements.customFileInput.addEventListener('change', (e) => {
            const myPromise = new Promise<void>((resolve, reject) => {
                files = (e.target as HTMLInputElement).files;
                if (files !== null) {
                    if (files.length <= 10) {
                        for (let i = 0; i < files.length; i++) {
                            if ((files[i].size / 1024) / 1024 < 20) {
                                if (/\.(jpe?g|png|gif)$/i.test(files[i].name)) {
                                    const check = this.addToArray(files[i]);
                                    if (check) {
                                        this.showThumbs(files[i].size, files[i].lastModified, files[i], i);
                                    }
                                    else {
                                        Swal.fire({
                                            icon: 'info',
                                            title: 'Duplicate!',
                                            text: `File: ${files[i].name} has already been added!`
                                        });
                                    }
                                }
                                else {
                                    Swal.fire({
                                        icon: 'info',
                                        title: 'Wrong file format',
                                        text: 'Files must be in .jpeg, .png and .gif format!'
                                    });
                                }
                            }
                            else {
                                Swal.fire({
                                    icon: 'info',
                                    title: 'File size',
                                    text: `File ${files[i].name} will not be added, it is more than 20 MB`
                                });
                            }
                        }
                    }
                    else {
                        Swal.fire({
                            icon: 'info',
                            title: 'Files quantity',
                            text: 'You can choose only 10 files at once'
                        });
                    }
                    (document.getElementById('fileInputControl') as HTMLInputElement).value = '';
                    resolve();
                }
            });
            myPromise.then(() => {
                this.numRestruct();
            });
        });
    }

    // Add to array
    addToArray(item: File): boolean {
        const ifExist = this.checkBySize(item);
        if (ifExist) {
            return false;
        }
        else {
            mediaFiles.push(item);
            return true;
        }
    }

    // Check By Size
    checkBySize(item: File): boolean {
        // tslint:disable-next-line: prefer-for-of
        for (let i = 0; i < mediaFiles.length; i++) {
            if (mediaFiles[i].size === item.size) {
                return true;
            }
        }
        return false;
    }

    // Show thumbs
    showThumbs(fileSize: number, fileLastModified: number, file: File, i: number): void {
        const reader = new FileReader();
        reader.addEventListener('load', () => {
            const div = document.createElement('div');
            div.setAttribute('class', 'col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4');
            div.innerHTML = `
            <div class="card preview-item mb-5">
                <div class="thumb-wrp">
                    <img src="${reader.result}"
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
                                data-class="checkbox-for-cover">
                            <label class="form-check-label" for="${fileLastModified}">
                                <span class="thumb-checkbox-text mr-1">Set as album cover</span>
                            </label>
                        </div>
                        <div class="dropdown-divider"></div>
                        <!-- #Remove -->
                        <div class="remove"
                            id="${fileSize}"
                            title="Remove">
                            <i class="fas fa-trash-alt"></i>
                            Remove
                        </div>
                    </div>
                </div>
            </div>`;
            photoAlbumsDomElements.output.insertBefore(div, null);
        }, false);
        reader.readAsDataURL(file);
    }

    // Select album cover
    selectAlbumCover(): void {
        document.addEventListener('click', (e) => {
            if ((e.target as HTMLInputElement).dataset.class === 'checkbox-for-cover') {
                // tslint:disable-next-line: prefer-for-of
                for (let i = 0; i < mediaFiles.length; i++) {
                    (document.getElementById(String(mediaFiles[i].lastModified)) as HTMLInputElement).checked = false;
                }
                const checkBoxId: string = (e.target as HTMLElement).id;
                (document.getElementById(checkBoxId) as HTMLInputElement).checked = true;
            }
        });
    }

    // Listener for remove button
    removePhoto(): void {
        document.addEventListener('click', (e) => {
            if ((e.target as HTMLElement).className === 'remove') {
                const selectedIdString = (e.target as HTMLElement).id;
                const selectedIdNumber = Number(selectedIdString);
                // tslint:disable-next-line: prefer-for-of
                for (let i = 0; i < mediaFiles.length; i++) {
                    if (mediaFiles[i].size === selectedIdNumber) {
                        mediaFiles.splice(i, 1);
                        const thumbOpacity: HTMLElement = document.getElementById(selectedIdString)?.parentElement?.parentElement?.parentElement as HTMLElement;
                        thumbOpacity.style.opacity = '0';
                        setTimeout(() => {
                            document.getElementById(selectedIdString)?.parentElement?.parentElement?.parentElement?.parentElement?.remove();
                        }, 500);
                    }
                }
                setTimeout(() => {
                    this.numRestruct();
                }, 700);
            }
        });
    }

    // Thumb input id restruct
    numRestruct(): void {
        const arr = document.querySelectorAll('.file-name');
        for (let i = 0; i < arr.length; i++) {
            arr[i].id = `thumb-input${i}`;
            arr[i].setAttribute('placeholder', `${i}`);
        }
    }

    // To send
    toSend(): void {
        photoAlbumsDomElements.btnSubmit.addEventListener('click', (e) => {
            // Cancel the event(submit)
            e.preventDefault();

            // Variables
            const fileNames: string[] = [];
            const checkBoxes: boolean[] = [];
            const formData = new FormData();
            const xhr = new XMLHttpRequest();

            // File names to array
            for (let i = 0; i < mediaFiles.length; i++) {
                if (!(document.querySelector(`#thumb-input${i}`) as HTMLInputElement).value) {
                    fileNames.push('');
                } else {
                    fileNames.push((document.querySelector(`#thumb-input${i}`) as HTMLInputElement).value.trim());
                }
            }

            // Value of checkboxes to array
            // tslint:disable-next-line: prefer-for-of
            for (let i = 0; i < mediaFiles.length; i++) {
                checkBoxes.push((document.getElementById(String(mediaFiles[i].lastModified)) as HTMLInputElement).checked);
            }

            // Creating dataToAdd object
            const dataToAdd: AlbumToAdd = {
                albumName: (document.querySelector('#album-name') as HTMLInputElement).value.trim(),
                albumDescription: (document.querySelector('#album-description') as HTMLInputElement).value.trim(),
                files: []
            };
            for (let i = 0; i < mediaFiles.length; i++) {
                if (dataToAdd.files !== undefined) {
                    dataToAdd.files[i] = { name: fileNames[i], isCover: checkBoxes[i] };
                }
            }

            // dataToAdd to JSON
            const dataToAddJson = JSON.stringify(dataToAdd);

            // Album info(json) to FormData
            formData.append('albumInfo', dataToAddJson);

            // tslint:disable-next-line: prefer-for-of
            for (let i = 0; i < mediaFiles.length; i++) {
                // Media files to FormData
                formData.append('file', mediaFiles[i]);
            }

            xhr.open('POST', 'https://postman-echo.com/post', true);
            xhr.send(formData);

            xhr.onload = () => {
                if (xhr.status !== 200) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: `Error ${xhr.status}: ${xhr.statusText}!`
                    });

                } else {
                    Swal.fire({
                        icon: 'success',
                        title: 'Done!',
                        text: `Done, got ${xhr.response.length} bytes`
                    });
                }
            };

            xhr.onerror = () => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!'
                });
            };
        });
    }
}
