import { DB } from './DB';
import { PhotosEdit } from './PhotosEdit';
import { PhotosAdd } from './PhotosAdd';
import { PhotosAdapt } from './PhotosAdapt';

class PhotosMain {

    init(): void {
        const db = new DB();
        const photosEdit = new PhotosEdit();
        const photosAdd = new PhotosAdd();
        const photosAdapt = new PhotosAdapt();
        db.init();
        photosEdit.init();
        photosAdd.init();
        photosAdapt.init();
    }
}

const main = new PhotosMain();
main.init();