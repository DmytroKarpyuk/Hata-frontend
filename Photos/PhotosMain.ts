import { DB } from './DB';
import { PhotosEdit } from './PhotosEdit';
import { PhotosAdapt } from './PhotosAdapt';

class PhotosMain {

    init(): void {
        const db = new DB();
        const photosEdit = new PhotosEdit();
        const photosAdapt = new PhotosAdapt();
        db.init();
        photosEdit.init();
        photosAdapt.init();
    }
}

const main = new PhotosMain();
main.init();