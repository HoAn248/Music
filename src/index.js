document.addEventListener('DOMContentLoaded', () => {
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
    let song
    const url = 'https://6201ecb3b8735d00174cb652.mockapi.io/SongsAPI'
    async function songsAPI() {
        await fetch(url)
            .then(data => data.json())
            .then(data => {
                song = data
            })
        return song
    }
    songsAPI().then(songs => {
        async function render() {
            let htmls = songs.map(async e => {
                return `<div class="my-playlist-list d-flex" data-index="${e.id}">
                <span class="my-list-number col-1"><i>${e.id}</i></span>
                <span class="my-list-title col-5">${e.name}</span>
                <span class="my-list-singer col-4">${e.singer}</span>
                </div>`
            })
            const num = await Promise.all(htmls)
            playList.innerHTML = num.join('')
        }
        render()
        function currentSong() {
            audio.src = `${songs[currenIndex].src}`
        }
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
                    if (firstTime === NaN) {
                        console.log(123);
                    }
                    firstTime.textContent = formatFirstTime(audio)
                    lastTime.innerHTML = formatTime(audio.duration)
                }
                if (huu === false) {
                    huu = true
                    audio.src = songs[currenIndex].src;
                    audio.play()
                } else {
                    audio.play()
                }
            } else {
                e.className = 'box-2-4-font bi bi-play-circle-fill'
                audio.pause()
            }
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
       
        playList.onclick = (e) => {
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
                if (e.dataset.index == currenIndex + 1) {
                    e.className = 'my-playlist-list d-flex play-active'
                    icon.className = 'bi-volume-up-fill'
                } else {
                    e.className = 'my-playlist-list d-flex'
                    icon.className = ''
                }
            })
        }
        playBtn.addEventListener('click', (e) => {
            let check = e.target.classList.contains('bi-play-circle-fill')
            playList.click()
            playAudio(e.target, check);
        })
        
    })

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


    function formatFirstTime(secs) {
        var min = Math.floor(((secs.duration - secs.currentTime) / 60));
        var sec = Math.round(((secs.duration - secs.currentTime) % 60));
        if (min < 10) {
            min = '0' + min
        }
        if (sec < 10) {
            sec = '0' + sec
        }
        return min + ':' + sec;
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
})