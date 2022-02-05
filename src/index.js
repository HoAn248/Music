let playBtn = document.querySelector('#play')
let playList = document.querySelector('#play-list')
let range = document.querySelector('#range-input')
let audio = document.querySelector('#audio')
let firstTime = document.querySelector('#first-time')
let lastTime = document.querySelector('#last-time')
let next = document.querySelector('#next')
let pre = document.querySelector('#pre')
let random = document.querySelector('#random')
let repeat = document.querySelector('#repeat')
let volumeP = document.getElementById('volume-change')
let currenIndex = 0;
let isRandom = false
let isRepeat = false
let huu = false
let checkA
let songs = [
    {
        id: 1,
        name: 'Cửu môn hồi ức',
        singer: 'Unknow',
        src: './songs/CuaMonHoiUc.m4a',
    },
    {
        id: 2,
        name: 'Lời yêu ngây dại',
        singer: 'Kha',
        src: './songs/Lời Yêu Ngây Dại.m4a',
    },
    {
        id: 3,
        name: 'Lose Yourself',
        singer: 'Eminem',
        src: './songs/Lose Yourself.m4a',
    },
    {
        id: 4,
        name: 'Dance monkey',
        singer: 'Tone',
        src: './songs/Dance monkey.mp3',
    },
    {
        id: 5,
        name: 'Buttercup',
        singer: '',
        src: './songs/[Vietsub+Lyrics] Buttercup - Jack Stauber _ Cover.m4a',
    },
    {
        id: 6,
        name: 'Everyday Normal Guy 2',
        singer: '',
        src: './songs/Jon Lajoie - Everyday Normal Guy 2.m4a',
    },
    {
        id: 7,
        name: 'Uptown funk',
        singer: '',
        src: './songs/mark_ronson_uptown_funk_official_video_ft_bruno_mars_-bG__3IByoK-gucZOHUi.mp3',
    },
    {
        id: 8,
        name: 'Centuries',
        singer: '',
        src: './songs/nightcore_centuries_luL7BHMByoK-gucZtfgK.mp3',
    },
    {
        id: 9,
        name: 'Genius',
        singer: 'Sia',
        src: './songs/nightcore_genius_switching_vocals_-4572499731872913700 - Copy.mp3',
    },
    {
        id: 10,
        name: 'Counting stars',
        singer: '',
        src: './songs/onerepublic_counting_stars_official_music_video_RRJuCHMByoK-gucZXV-B.mp3',
    },
    {
        id: 11,
        name: 'Cradles',
        singer: 'Sub urban',
        src: './songs/sub_urban_cradles_official_music_video_2_0R6nIByoK-gucZPVTT.mp3',
    },
    {
        id: 12,
        name: 'Freak',
        singer: 'Sub urban',
        src: './songs/sub_urban_freak_feat_rei_ami_official_music_video_YuQMBXMByoK-gucZIiP1 - Copy.mp3',
    },
    {
        id: 13,
        name: 'Impossible',
        singer: '',
        src: './songs/vietsub_impossible_shontelle_AtlnBHMByoK-gucZ9uIi - Copy.mp3',
    },
    {
        id: 14,
        name: 'Crush',
        singer: '',
        src: './songs/vietsub_lyric_crush_tessa_violet_IO6MBXMByoK-gucZGmGu - Copy.mp3',
    },
    {
        id: 15,
        name: 'River',
        singer: '',
        src: './songs/vietsub_lyric_river_charlie_puth_Yv-QBnMByoK-gucZqQOs - Copy.mp3',
    },
    {
        id: 16,
        name: 'Cheap thrills',
        singer: '',
        src: './songs/vietsub_lyrics_cheap_thrills_sia_SBatCHMByoK-gucZe1BZ.mp3',
    },
    {
        id: 17,
        name: 'Dancin',
        singer: '',
        src: './songs/vietsub_lyrics_dancin_aaron_smith_krono_remix_rOc7BXMByoK-gucZhW-C.mp3',
    },
    {
        id: 18,
        name: 'OOPS',
        singer: '',
        src: './songs/vietsub_lyrics_oops_little_mix_SexxBXMByoK-gucZ0iKA.mp3',
    },
    {
        id: 19,
        name: 'Send it',
        singer: '',
        src: './songs/vietsub_lyrics_send_it_austin_mahone_ft_rich_homie_quan_YQreB3MByoK-gucZg_Wp.mp3',
    },
    {
        id: 20,
        name: 'Why not me',
        singer: '',
        src: './songs/vietsub_lyrics_why_not_me_enrique_iglesias_gfs_BnMByoK-gucZ281R.mp3',
    },
    {
        id: 21,
        name: 'Maps',
        singer: '',
        src: './songs/vietsub_maps_maroon_5_3431682474692340751.mp3',
    },
    {
        id: 22,
        name: 'Me and my broken heart',
        singer: '',
        src: './songs/vietsub_me_and_my_broken_heart_rixton___57BnMByoK-gucZd1Kb.mp3',
    },
    {
        id: 23,
        name: 'Say so',
        singer: '',
        src: './songs/vietsub_say_so_doja_cat_clean_f_xWBnMByoK-gucZ3NMn.mp3',
    },
    {
        id: 24,
        name: 'Watermelon Sugar',
        singer: '',
        src: './songs/Watermelon Sugar x Seaside - Harry Styles _ SEB.m4a',
    },
    {
        id: 25,
        name: 'Boss bitch',
        singer: '',
        src: './songs/y2mate.com - AMV Kanbe Daisuke Boss Bitch Doja Cat .mp3',
    },
    {
        id: 26,
        name: 'Ngây thơ',
        singer: '',
        src: './songs/y2mate.com - Lyric VideoNGÂY THƠ  TĂNG DUY TÂN X PHONG MAX REMIX  Vietnamese Music  Nhạc EDM Hot Tik Tok_320kbps.mp3',
    },
    {
        id: 27,
        name: '911',
        singer: '',
        src: './songs/y2mate.com - Nightcore  911 lyrics.mp3',
    },
    {
        id: 28,
        name: 'Blood  Water',
        singer: '',
        src: './songs/y2mate.com - Nightcore  Blood  Water acoustic_320kbps.mp3',
    },
    {
        id: 29,
        name: 'Karma',
        singer: '',
        src: './songs/y2mate.com - Nightcore  Karma lyrics_320kbps.mp3',
    },
    {
        id: 30,
        name: 'Teeth',
        singer: '',
        src: './songs/y2mate.com - Nightcore Teeth Deeper Version.mp3',
    },
    {
        id: 31,
        name: 'Panda vs Low',
        singer: '',
        src: './songs/y2mate.com - Panda vs Low  Desiigner feat Florida  Tpain Cesar Castilla Mashup.mp3',
    },
    {
        id: 32,
        name: 'Tâm lặng như nước',
        singer: '',
        src: './songs/y2mate.com - VietsubPinyin Tâm Lặng Như Nước 心如止水   Ice Paper 抖音音乐_320kbps.mp3',
    }
]
async function render() {
    let htmls = songs.map(async e => {
        let audioMusic = new Audio(`${e.src}`)
        const time = await audioTime(audioMusic)
        return `<div class="my-playlist-list d-flex" data-index="${e.id}">
            <span class="my-list-number col-1"><i>${e.id}</i></span>
            <span class="my-list-title col-5">${e.name}</span>
            <span class="my-list-singer col-4">${e.singer}</span>
            <span class="my-list-time col-2">${time} </span>
            </div>`
    })
    const num = await Promise.all(htmls)
    playList.innerHTML = num.join('')

}
function audioTime(e) {
    return new Promise(function (resolve) {
        e.addEventListener('loadedmetadata', function () {
            let time = formatTime(e.duration)
            resolve(time)
            huu = true
        })
    })
}
function formatTime(sec_num) {
    let hours = Math.floor(sec_num / 3600);
    let minutes = Math.floor((sec_num - hours * 3600) / 60);
    let seconds = Math.floor(sec_num - hours * 3600 - minutes * 60);

    hours = hours < 10 ? (hours > 0 ? '0' + hours : 0) : hours;

    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    if (seconds < 10) {
        seconds = '0' + seconds;
    }
    return (hours !== 0 ? hours + ':' : '') + minutes + ':' + seconds;
}
render()
function playAudio(e, check) {
    if (check) {
        e.className = 'box-2-4-font bi bi-pause-circle'
        range.onpointerdown = (e) => {
            checkA = true
            setMusic(e)
        }
        range.onpointermove = (e) => {
            setMusic(e)
        }
        range.onpointerup = (e) => {
            checkA = false
            setMusic(e)
        }
        function setMusic(e) {
            if (checkA) {
                let seekTime = audio.duration * (e.target.value / 100)
                audio.currentTime = seekTime
            }
        }
        audio.ontimeupdate = () => {
            if (!checkA) {
                range.value = Math.floor(audio.currentTime * (100 / audio.duration))
            }
            firstTime.textContent = formatFirstTime(audio)

            // firstTime.textContent = `${Math.floor(((audio.duration - audio.currentTime) / 60))}:${Math.round(((audio.duration - audio.currentTime) % 60))}`
            lastTime.innerHTML = formatTime(audio.duration)
        }
        audio.play()
    } else {
        e.className = 'box-2-4-font bi bi-play-circle-fill'
        audio.pause()
    }
}
function formatFirstTime(secs) {
    var min = Math.floor(((secs.duration - secs.currentTime) / 60));
    var sec = Math.round(((secs.duration - secs.currentTime) % 60));
    if(min < 10){
        min = '0'+ min
    }
    if(sec < 10){
        sec = '0'+ sec
    }
    return min + ':' + sec;
  }
function currentSong() {
    audio.src = `${songs[currenIndex].src}`
}
next.onclick = (e) => {
    if (isRandom) {
        currenIndex = Math.floor(Math.random() * songs.length)
    } else {
        currenIndex++;
        if (currenIndex >= songs.length) {
            currenIndex = 0;
        }
    }
    let check = true
    playBtn.className = 'box-2-4-font bi bi-pause-circle'
    playBtn.click()
    playAudio(playBtn, check)
    currentSong()
    audio.play()
}
pre.onclick = (e) => {
    e.preventDefault()
    if (isRandom) {
        currenIndex = Math.floor(Math.random() * songs.length)
    } else {
        currenIndex--;
        if (currenIndex < 0) {
            currenIndex = songs.length - 1;
        }
    }
    let check = true
    playBtn.className = 'box-2-4-font bi bi-pause-circle'
    playBtn.click()
    playAudio(playBtn, check)
    currentSong()
    audio.play()
}
random.onclick = (e) => {
    e.target.classList.toggle('control-active')
    if (isRandom) {
        isRandom = false
    } else {
        isRandom = true
    }
}
audio.onended = () => {
    if (isRepeat) {
        audio.play()
    } else {
        next.click()
    }
}
repeat.onclick = (e) => {
    e.target.classList.toggle('control-active')
    if (isRepeat) {
        isRepeat = false
    } else {
        isRepeat = true
    }
}
volumeP.addEventListener('pointermove', setVolume)
function setVolume() {
    audio.volume = volumeP.value / 100;
}
setVolume()
playBtn.addEventListener('click', (e) => {
    let check = e.target.classList.contains('bi-play-circle-fill')
    playList.click()
    playAudio(e.target, check);
})
playList.onclick = (e) => {
    e.preventDefault()
    let songNode = e.target.closest('.my-playlist-list')

    if (songNode) {
        currenIndex = Number(songNode.dataset.index) - 1
        currentSong()
        let check = true
        playAudio(playBtn, check)
        audio.play()
    }
    playList.childNodes.forEach(e => {
        let icon = e.childNodes[1].childNodes[0]
        // let check = test.classList.contains('bi-volume-up-fill')

        if (e.dataset.index == currenIndex + 1) {
            e.className = 'my-playlist-list d-flex play-active'
            icon.className = 'bi-volume-up-fill'
        } else {
            e.className = 'my-playlist-list d-flex'
            icon.className = ''
        }

    })

}
// currentSong()