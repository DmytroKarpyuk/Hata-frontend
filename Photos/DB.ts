/** Back-end imitation =) */
export class DB {

    init(): void {
        const example = [
            {
                id: 7,
                name: 'Назва',
                link: 'https://1.img-dpreview.com/files/p/TS600x400~sample_galleries/0724895971/0009166108.jpg'
            },
            {
                id: 8,
                name: 'Дуже довга назва фото така шо не влазить в одну стрічку',
                link: 'https://cdn.pixabay.com/photo/2020/09/23/09/12/orange-flower-5595483_960_720.jpg'
            },
            {
                id: 9,
                name: 'Photo Name',
                link: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?ixlib=rb-1.2.1&w=1000&q=80'
            },
            {
                id: 10,
                name: 'Photo Name',
                link: 'https://cdn.pixabay.com/photo/2020/06/07/12/01/currants-5270094_960_720.jpg'
            },
            {
                id: 11,
                name: 'На світлому',
                link: 'https://cdn.pixabay.com/photo/2015/09/06/00/46/yellow-926728_960_720.jpg'
            },
            {
                id: 12,
                name: 'Photo Name',
                link: 'https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569__340.jpg'
            },
            {
                id: 13,
                name: 'Photo Name',
                link: 'https://japantravelmate.com/wp-content/uploads/2015/05/MtKoya-AutumnLeaves.jpg'
            },
            {
                id: 14,
                name: 'Photo Name',
                link: 'https://i.pinimg.com/originals/67/88/50/67885095ea059f01529466b62fdf6936.jpg'
            },
            {
                id: 15,
                name: 'Photo Name',
                link: 'https://wonderfulengineering.com/wp-content/uploads/2016/01/Desktop-Wallpaper-4.jpg'
            },
            {
                id: 16,
                name: 'Photo Name',
                link: 'https://static.bhphotovideo.com/explora/sites/default/files/styles/960/public/Nikon-D750-Sample-Image-36.jpg?itok=aKsapRKG'
            },
            {
                id: 17,
                name: 'Photo Name',
                link: 'https://www.nikon-asia.com/d5600/common/img/tips3-1.jpg'
            },
            {
                id: 18,
                name: 'Photo Name',
                link: 'https://i.pinimg.com/originals/7a/c0/3d/7ac03d2b7faa8fb6467cf051e1e51d7e.jpg'
            },
            {
                id: 19,
                name: 'Photo Name',
                link: 'https://farm4.static.flickr.com/3490/4054270857_7c2d3e551a.jpg'
            },
            {
                id: 20,
                name: 'Photo Name',
                link: 'https://www.luminescentphoto.com/blog/wp-content/uploads/2014/09/Odell_20140927_3268.jpg'
            },
            {
                id: 21,
                name: 'Cyber Punk mood',
                link: 'https://free4kwallpapers.com/uploads/originals/2020/04/30/retro-mustang-wallpaper.jpg'
            },
            {
                id: 22,
                name: 'Photo Name',
                link: 'https://thumb.cloud.mail.ru/weblink/thumb/xw1/KzUH/jWTfJx9qX/25/72/257229643/257229643_2048.jpg'
            }
        ];

        const photoList = document.querySelector('.photo-list') as HTMLDivElement;

        // tslint:disable-next-line: forin
        for (const key in example) {
            // #Card Item
            const div = document.createElement('div');
            div.setAttribute('class', 'col-12 col-sm-6 col-lg-4 col-xl-3 column-item');
            div.innerHTML = `
            <input type="checkbox" class="mt-3 ml-3 checkbox-remove" id="${example[key].id}">
            <a data-fancybox="gallery" href="${example[key].link}" class="photo-link">
                <div class="card bg-dark text-white mb-5 shadow photo-item">
                    <div class="embed-responsive embed-responsive-4by3">
                        <img src="${example[key].link}"
                            class="card-img embed-responsive-item photo-img" alt="...">
                    </div>
                    <div class="card-img-overlay d-flex align-items-end photo-name-wrp">
                        <h6 class="card-title photo-name">${example[key].name}</h6>
                        <textarea class="form-control photo-name-editing" data-id="${example[key].id}" rows="2"></textarea>
                    </div>
                </div>
            </a>`;
            photoList.appendChild(div);
        }
    }
}

// <textarea class="form-control photo-name-editing" rows="2"></textarea>