let playBtn = document.querySelector('#play')
let playList = document.querySelector('#play-list')
let range = document.querySelector('#range-input')
let audio = document.querySelector('audio')
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
let checkA
console.log(audio);
let songs = [
    {
        id: 1,
        name: 'Cửu môn hồi ức',
        singer: 'Unknow',
        src: './songs/CuaMonHoiUc.m4a',
        time: '4:05'
    },
    {
        id: 2,
        name: 'Lời yêu ngây dại',
        singer: 'Kha',
        src: './songs/Lời Yêu Ngây Dại.m4a',
        time: '4:33'
    },
    {
        id: 3,
        name: 'Lose Yourself',
        singer: 'Eminem',
        src: './songs/Lose Yourself.m4a',
        time: '5:24'
    },
    {
        id: 4,
        name: 'Dance monkey',
        singer: 'Tone',
        src: './songs/Dance monkey.mp3',
        time: '3:30'
    },
    {
        id: 5,
        name: 'Buttercup',
        singer: '',
        src: './songs/[Vietsub+Lyrics] Buttercup - Jack Stauber _ Cover.m4a',
        time: '2:04'
    },
    {
        id: 6,
        name: 'Everyday Normal Guy 2',
        singer: '',
        src: './songs/Jon Lajoie - Everyday Normal Guy 2.m4a',
        time: '3:15'
    },
    {
        id: 7,
        name: 'Uptown funk',
        singer: '',
        src: './songs/mark_ronson_uptown_funk_official_video_ft_bruno_mars_-bG__3IByoK-gucZOHUi.mp3',
        time: '4:30'
    },
    {
        id: 8,
        name: 'Centuries',
        singer: '',
        src: './songs/nightcore_centuries_luL7BHMByoK-gucZtfgK.mp3',
        time: '3:15'
    },
    {
        id: 9,
        name: 'Genius',
        singer: 'Sia',
        src: './songs/nightcore_genius_switching_vocals_-4572499731872913700 - Copy.mp3',
        time: '3:18'
    },
    {
        id: 10,
        name: 'Counting stars',
        singer: '',
        src: './songs/onerepublic_counting_stars_official_music_video_RRJuCHMByoK-gucZXV-B.mp3',
        time: '4:43'
    },
    {
        id: 11,
        name: 'Cradles',
        singer: 'Sub urban',
        src: './songs/sub_urban_cradles_official_music_video_2_0R6nIByoK-gucZPVTT.mp3',
        time: '3:38'
    },
    {
        id: 12,
        name: 'Freak',
        singer: 'Sub urban',
        src: './songs/sub_urban_freak_feat_rei_ami_official_music_video_YuQMBXMByoK-gucZIiP1 - Copy.mp3',
        time: '3:27'
    },
    {
        id: 13,
        name: 'Impossible',
        singer: '',
        src: './songs/vietsub_impossible_shontelle_AtlnBHMByoK-gucZ9uIi - Copy.mp3',
        time: '3:46'
    },
    {
        id: 14,
        name: 'Crush',
        singer: '',
        src: './songs/vietsub_lyric_crush_tessa_violet_IO6MBXMByoK-gucZGmGu - Copy.mp3',
        time: '3:32'
    },
    {
        id: 15,
        name: 'River',
        singer: '',
        src: './songs/vietsub_lyric_river_charlie_puth_Yv-QBnMByoK-gucZqQOs - Copy.mp3',
        time: '3:11'
    },
    {
        id: 16,
        name: 'Cheap thrills',
        singer: '',
        src: './songs/vietsub_lyrics_cheap_thrills_sia_SBatCHMByoK-gucZe1BZ.mp3',
        time: '3:27'
    },
    {
        id: 17,
        name: 'Dancin',
        singer: '',
        src: './songs/vietsub_lyrics_dancin_aaron_smith_krono_remix_rOc7BXMByoK-gucZhW-C.mp3',
        time: '4:36'
    },
    {
        id: 18,
        name: 'OOPS',
        singer: '',
        src: './songs/vietsub_lyrics_oops_little_mix_SexxBXMByoK-gucZ0iKA.mp3',
        time: '3:58'
    },
    {
        id: 19,
        name: 'Send it',
        singer: '',
        src: './songs/vietsub_lyrics_send_it_austin_mahone_ft_rich_homie_quan_YQreB3MByoK-gucZg_Wp.mp3',
        time: '3:33'
    },
    {
        id: 20,
        name: 'Why not me',
        singer: '',
        src: './songs/vietsub_lyrics_why_not_me_enrique_iglesias_gfs_BnMByoK-gucZ281R.mp3',
        time: '3:36'
    },
    {
        id: 21,
        name: 'Maps',
        singer: '',
        src: './songs/vietsub_maps_maroon_5_3431682474692340751.mp3',
        time: '3:10'
    },
    {
        id: 22,
        name: 'Me and my broken heart',
        singer: '',
        src: './songs/vietsub_me_and_my_broken_heart_rixton___57BnMByoK-gucZd1Kb.mp3',
        time: '3:11'
    },
    {
        id: 23,
        name: 'Say so',
        singer: '',
        src: './songs/vietsub_say_so_doja_cat_clean_f_xWBnMByoK-gucZ3NMn.mp3',
        time: '3:57'
    },
    {
        id: 24,
        name: 'Watermelon Sugar',
        singer: '',
        src: './songs/Watermelon Sugar x Seaside - Harry Styles _ SEB.m4a',
        time: '3:05'
    },
    {
        id: 25,
        name: 'Boss bitch',
        singer: '',
        src: './songs/y2mate.com - AMV Kanbe Daisuke Boss Bitch Doja Cat .mp3',
        time: '2:13'
    },
    {
        id: 26,
        name: 'Ngây thơ',
        singer: '',
        src: './songs/y2mate.com - Lyric VideoNGÂY THƠ  TĂNG DUY TÂN X PHONG MAX REMIX  Vietnamese Music  Nhạc EDM Hot Tik Tok_320kbps.mp3',
        time: '4:39'
    },
    {
        id: 27,
        name: '911',
        singer: '',
        src: './songs/y2mate.com - Nightcore  911 lyrics.mp3',
        time: '2:55'
    },
    {
        id: 28,
        name: 'Blood  Water',
        singer: '',
        src: './songs/y2mate.com - Nightcore  Blood  Water acoustic_320kbps.mp3',
        time: '3:27'
    },
    {
        id: 29,
        name: 'Karma',
        singer: '',
        src: './songs/y2mate.com - Nightcore  Karma lyrics_320kbps.mp3',
        time: '3:05'
    },
    {
        id: 30,
        name: 'Teeth',
        singer: '',
        src: './songs/y2mate.com - Nightcore Teeth Deeper Version.mp3',
        time: '3:07'
    },
    {
        id: 31,
        name: 'Panda vs Low',
        singer: '',
        src: './songs/y2mate.com - Panda vs Low  Desiigner feat Florida  Tpain Cesar Castilla Mashup.mp3',
        time: '5:46'
    },
    {
        id: 32,
        name: 'Tâm lặng như nước',
        singer: '',
        src: './songs/y2mate.com - VietsubPinyin Tâm Lặng Như Nước 心如止水   Ice Paper 抖音音乐_320kbps.mp3',
        time: '3:05'
    }
]
function render() {
    let htmls = songs.map(e => {
        return `<div class="my-playlist-list d-flex" data-index="${e.id}">
                    <span class="my-list-number col-1"><i>${e.id}</i></span>
                    <span class="my-list-title col-5">${e.name}</span>
                    <span class="my-list-singer col-4">${e.singer}</span>
                    <span class="my-list-time col-2">${e.time}</span>
                </div>`
    })
    playList.innerHTML = htmls.join('')
}
render()
function playAudio(e, check) {
    if (check) {
        e.className = 'box-2-4-font bi bi-pause-circle'
        range.onpointerdown = (e)=>{
            checkA = true
            setMusic(e)
        }   
        range.onpointermove = (e)=>{
            setMusic(e)
        }
        range.onpointerup = (e)=>{
            checkA = false
            setMusic(e)
        }
        function setMusic(e){
            if(checkA){
                let seekTime = audio.duration * (e.target.value / 100)
                audio.currentTime = seekTime
            }
        }
        audio.ontimeupdate = () => {
            if (!checkA) {
                range.value = Math.floor(audio.currentTime * (100 / audio.duration))
            }
            
            firstTime.textContent = `${Math.floor(((audio.duration - audio.currentTime) / 60))}:${Math.round(((audio.duration - audio.currentTime) % 60))}`
            lastTime.innerHTML = `${Math.floor(((audio.duration) / 60))}:${Math.round(((audio.duration) % 60))}`
        }
        audio.play()
    } else {
        e.className = 'box-2-4-font bi bi-play-circle-fill'
        audio.pause()   
    }
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
    playList.childNodes.forEach(e=>{
        let icon = e.childNodes[1].childNodes[0]
        // let check = test.classList.contains('bi-volume-up-fill')

        if(e.dataset.index == currenIndex+1){
            e.className = 'my-playlist-list d-flex play-active'
            icon.className = 'bi-volume-up-fill'
        }else{
            e.className = 'my-playlist-list d-flex'
            icon.className = ''
        }
        
    })
    
}
currentSong()