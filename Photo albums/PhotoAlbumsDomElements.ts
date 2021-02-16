export class PhotoAlbumsDomElements {
    mainContainer: HTMLDivElement;
    albumsList: HTMLDivElement;
    addAlbumBtn: HTMLDivElement;
    customFileInput: HTMLInputElement;
    output: HTMLDivElement;
    btnSubmit: HTMLElement;
    constructor() {
        this.mainContainer = document.querySelector('.main-container') as HTMLDivElement;
        this.albumsList = document.querySelector('.albums-list') as HTMLDivElement;
        this.addAlbumBtn = document.querySelector('.add-album-btn') as HTMLDivElement;
        this.customFileInput = document.querySelector('.custom-file-input') as HTMLInputElement;
        this.output = document.querySelector('.output') as HTMLDivElement;
        this.btnSubmit = document.querySelector('#btn-submit') as HTMLElement;
    }
}