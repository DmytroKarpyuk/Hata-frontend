import { PhotoAlbumsDomElements } from './PhotoAlbumsDomElements';
const photoAlbumsDomElements = new PhotoAlbumsDomElements();

export class PhotoAlbumsAdapt {

    width: number;
    height: number;

    constructor() {
        this.width = document.body.clientWidth;
        this.height = screen.height;
    }

    init(): void {
        this.listenForLoad();
        this.listenForResize();
        this.adaptMainContainer();
    }

    listenForLoad(): void {
        window.addEventListener('load', () => {
            this.width = document.body.clientWidth;
            this.height = screen.height;

            if (this.width < 576) {
                this.addClass();
            } else if (this.width > 575) {
                this.removeClass();
            }
        });
    }

    listenForResize(): void {
        window.addEventListener('resize', () => {
            this.width = document.body.clientWidth;
            this.height = screen.height;

            if (this.width < 576) {
                this.addClass();
            } else if (this.width > 575) {
                this.removeClass();
            }
        });
    }

    adaptMainContainer(): void {
        photoAlbumsDomElements.mainContainer.style.minHeight = (this.height - 55).toString() + 'px';
    }

    /** Add a new classes for mobile mode */
    addClass(): void {
        photoAlbumsDomElements.addAlbumBtn.classList.add('add-album-btn-mobile');
        photoAlbumsDomElements.addAlbumBtn.innerHTML = '<i class="fas fa-plus"></i>';
        document.querySelectorAll('.card-body').forEach((element) => {
            element.classList.add('card-body-mobile');
        });
        document.querySelectorAll('.album-cover-img').forEach((element) => {
            element.classList.add('album-cover-img-mobile');
        });
        document.querySelectorAll('.album-name-row').forEach((element) => {
            element.classList.add('album-name-row-mobile');
        });
        document.querySelectorAll('.album-description-row').forEach((element) => {
            element.classList.add('album-description-row-mobile');
        });
        document.querySelectorAll('.dropup').forEach((element) => {
            element.classList.add('dropup-mobile', 'ml-2', 'mb-2');
        });
        document.querySelectorAll('.card-btn-settings').forEach((element) => {
            element.classList.add('card-btn-settings-mobile');
        });
    }

    /** Remove mobile mode classes */
    removeClass(): void {
        photoAlbumsDomElements.addAlbumBtn.classList.remove('add-album-btn-mobile');
        photoAlbumsDomElements.addAlbumBtn.innerHTML = 'Додати альбом';
        document.querySelectorAll('.card-body').forEach((element) => {
            element.classList.remove('card-body-mobile');
        });
        document.querySelectorAll('.album-cover-img').forEach((element) => {
            element.classList.remove('album-cover-img-mobile');
        });
        document.querySelectorAll('.album-name-row').forEach((element) => {
            element.classList.remove('album-name-row-mobile');
        });
        document.querySelectorAll('.album-description-row').forEach((element) => {
            element.classList.remove('album-description-row-mobile');
        });
        document.querySelectorAll('.dropup').forEach((element) => {
            element.classList.remove('dropup-mobile', 'ml-2', 'mb-2');
        });
        document.querySelectorAll('.card-btn-settings').forEach((element) => {
            element.classList.remove('card-btn-settings-mobile');
        });
    }
}