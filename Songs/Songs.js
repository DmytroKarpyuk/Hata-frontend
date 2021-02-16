// #Variables
const songs = {
    0: {
        id: 0,
        artist: 'Radiohead',
        name: 'Paranoid Android',
        cover: 'img/album_covers/OkComp.jpg',
        link: 'tracks/Paranoid_Android.mp3'
    },
    1: {
        id: 1,
        artist: 'Radiohead',
        name: 'How To Disappear Completely',
        cover: 'img/album_covers/Ka.jpg',
        link: 'tracks/How_To_Disappear_Completely.mp3'
    },
    2: {
        id: 2,
        artist: 'Radiohead',
        name: 'Pyramid Song',
        cover: 'img/album_covers/Amnsk.jpg',
        link: 'tracks/Pyramid_Song.mp3'
    },
    3: {
        id: 3,
        artist: 'Radiohead',
        name: 'Weird Fishes',
        cover: 'img/album_covers/Rnbws.jpg',
        link: 'tracks/Weird_Fishes_Arpeggi.mp3'
    },
    4: {
        id: 4,
        artist: 'Max. G',
        name: 'Time To Say Goodbye',
        cover: 'img/album_covers/Max_G.jpg',
        link: 'tracks/Time_To_Say_Goodbye.mp3'
    },
    5: {
        id: 5,
        artist: 'Karpyuk',
        name: 'No Answers',
        cover: 'img/album_covers/No_Answers_logo.jpg',
        link: 'tracks/No_Answers.mp3'
    },
    6: {
        id: 6,
        artist: 'Rammstein',
        name: 'Mein Herz Brennt',
        cover: 'img/album_covers/Mutter.jpg',
        link: 'tracks/Mein_Herz_Brennt.mp3'
    },
    7: {
        id: 7,
        artist: 'Karpyuk',
        name: 'Runaway',
        cover: 'img/album_covers/Runaway_logo.jpg',
        link: 'tracks/Runaway.mp3'
    }
}
let song
let song_id
let song_list = document.querySelector('.songs-list')

// #Loop
for (const key in songs) {
    // #Card Item
    let div = document.createElement('div')
    div.setAttribute('class', 'col-12 col-sm-6 col-lg-4 col-xl-3 d-flex')
    div.innerHTML = `
    <div class="card song-item mt-5 flex-fill shadow">
        <div class="embed-responsive embed-responsive-1by1">
            <img src="${songs[key].cover}" class="card-img-top embed-responsive-item album-cover-item" alt="">
         </div>
        <div class="card-body">
            <h5 class="card-title text-center" style="font-size: 17px;">${songs[key].artist}</h5>
            <p class="card-text text-center" id="song-name` + songs[key].id + `">${songs[key].name}</p>
        </div>
        <button type="button" class="btn btn-light play-pause" id="${songs[key].id}" style="cursor: pointer;">
            <i class="fas fa-play"></i>
        </button>
    </div>`
    song_list.appendChild(div)

    // #Name length
    let row = document.querySelector('#song-name' + `${songs[key].id}`).innerHTML
    if (row.length > 27) {
        document.querySelector('#song-name' + `${songs[key].id}`).innerHTML = row.substr(0, 24) + '...'
        document.querySelector('#song-name' + `${songs[key].id}`).setAttribute('title', `${songs[key].name}`)
    }
}

// #Play - Pause
document.querySelectorAll(".play-pause")
    .forEach((element) => {
        element.onclick = playPauseSong
    })

// #Panel
document.querySelector('.panel-play-pause')
    .addEventListener('click', playPauseSong)

// document.querySelector('#previous')
//     .addEventListener('click', () => {
//         alert('Previous')
//     })

function playPauseSong() {
    let id = this.id
    if (song) {
        if (id === song_id) {
            if (song.paused) {
                document.getElementById(id).innerHTML = '<i class="fas fa-pause"></i>'
                document.getElementById(id).className = 'btn btn-success play-pause'
                // #Panel
                document.querySelector('.panel-play-pause').innerHTML = '<i class="fas fa-pause"></i>'
                document.querySelector('.panel-play-pause').className = 'btn btn-success panel-play-pause mr-1'

                song.play()
            } else {
                document.getElementById(id).innerHTML = '<i class="fas fa-play"></i>'
                document.getElementById(id).className = 'btn btn-secondary play-pause'
                // #Panel
                document.querySelector('.panel-play-pause').innerHTML = '<i class="fas fa-play"></i>'
                document.querySelector('.panel-play-pause').className = 'btn btn-secondary panel-play-pause mr-1'

                song.pause()
            }
        } else {
            document.getElementById(song_id).innerHTML = '<i class="fas fa-play"></i>'
            document.getElementById(song_id).className = 'btn btn-light play-pause'
            // #Panel
            document.querySelector('.panel-play-pause').innerHTML = '<i class="fas fa-play"></i>'
            document.querySelector('.panel-play-pause').className = 'btn btn-secondary panel-play-pause mr-1'

            song.pause()
            song.currentTime = 0
            playNewSong(id)
        }
    } else {
        playNewSong(id)
    }
}

function playNewSong(id) {
    song_id = id
    document.getElementById(id).innerHTML = '<i class="fas fa-pause"></i>'
    document.getElementById(id).className = 'btn btn-success play-pause'

    // #Panel
    document.querySelector('.artist-name').innerHTML = `<b>${songs[id].artist}</b>`
    document.querySelector('.song-name').innerHTML = `${songs[id].name}`
    document.querySelector('.album-cover-panel').src = `${songs[id].cover}`
    document.querySelector('.song-name').setAttribute('title', `${songs[id].name}`)
    document.querySelector('.panel-play-pause').setAttribute('id', id)
    document.querySelector('.panel-play-pause').innerHTML = '<i class="fas fa-pause"></i>'
    document.querySelector('.panel-play-pause').className = 'btn btn-success panel-play-pause mr-1'
    document.querySelector('.panel').style.marginBottom = '0px'

    song = new Audio(songs[id].link)
    song.play()
}
