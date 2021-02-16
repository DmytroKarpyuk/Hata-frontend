import { DB } from './DB';
import { PhotoAlbumsAdd } from './PhotoAlbumsAdd';
import { PhotoAlbumsAdapt } from './PhotoAlbumsAdapt';

class PhotoAlbumsMain {

    init(): void {
        const db = new DB();
        const photoAlbumsAdd = new PhotoAlbumsAdd();
        const photoAlbumsAdapt = new PhotoAlbumsAdapt();
        db.init();
        photoAlbumsAdd.init();
        photoAlbumsAdapt.init();
    }
}

const main = new PhotoAlbumsMain();
main.init();