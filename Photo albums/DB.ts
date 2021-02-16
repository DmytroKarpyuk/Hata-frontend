/** Back-end imitation =) */
import { PhotoAlbumsDomElements } from './PhotoAlbumsDomElements';
const photoAlbumsDomElements = new PhotoAlbumsDomElements();

export class DB {

    init(): void {
        const albums = [
            {
                id: 0,
                name: 'Album 1',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                cover: 'https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_960_720.jpg'
            },
            {
                id: 1,
                name: 'Album 2',
                description: 'Lorem ipsum dolor sit amet.',
                cover: 'https://setwallpapers.fra1.digitaloceanspaces.com/preview/aeb5648719b8ca535bfe21b44666275e.jpg'
            },
            {
                id: 2,
                name: 'Album 3',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                cover: 'https://cdn.pixabay.com/photo/2018/08/21/23/29/fog-3622519_960_720.jpg'
            },
            {
                id: 3,
                name: 'Album 4',
                description: 'Lorem ipsum dolor sit amet.',
                cover: 'https://cdn.pixabay.com/photo/2016/11/14/04/45/elephant-1822636_960_720.jpg'
            },
            {
                id: 4,
                name: 'Album 5',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                cover: 'https://cdn.pixabay.com/photo/2017/03/13/10/25/hummingbird-2139279_960_720.jpg'
            },
            {
                id: 5,
                name: 'Листя...',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                cover: 'https://i.pinimg.com/originals/c1/36/a8/c136a856eaa1822f18de55723aa70b09.jpg'
            },
            {
                id: 6,
                name: 'Драматургія',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                cover: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80'
            },
            {
                id: 7,
                name: 'Album 8',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                cover: 'https://i.pinimg.com/originals/a8/d7/42/a8d7422188e55a2508fe50d14daf0903.jpg'
            }
        ];

        // tslint:disable-next-line: forin
        for (const key in albums) {
            // #Card Item
            const div = document.createElement('div');
            div.setAttribute('class', 'col-12 col-sm-6 col-lg-4 col-xl-3 column-item');
            div.innerHTML = `
            <div class="card album-item mb-5 shadow">
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
            </div>`;
            photoAlbumsDomElements.albumsList.appendChild(div);
        }
    }
}

// <textarea class="form-control photo-name-editing" rows="2"></textarea>