const player = document.querySelector('.player')
      video = document.querySelector('#video' ),
      btnStart = document.querySelector('.btn-start'),
      btnStop  = document.querySelector('.btn-stop'),
      btnPause = document.querySelector('.btn-pause'),
      volumeBtn = document.querySelector('#video-volume'),
      btnQuickly = document.querySelector('.btn-quickly'),
      btnSlowly = document.querySelector('.btn-slowly');

let progressBar = document.querySelector('#progress-bar')


btnStart.addEventListener('click',start)
btnStart.addEventListener('dblclick',pause)
btnStop.addEventListener('click',stop)
btnPause.addEventListener('click',pause)
volumeBtn.addEventListener('click',videoVolume)
btnQuickly.addEventListener('click',speedUp)
btnSlowly.addEventListener('click',speedDown)
video.addEventListener('timeupdate',progressUpdate)
progressBar.addEventListener('click',progressChange)
function start(){
    video.play()
    video.playbackRate = 1

}
function stop(){
    video.pause()
    video.currentTime = 0
}
function  videoVolume(){
    let v = this.value
    video.volume = v/100
}
function  pause(){
    video.pause()

}
function speedUp(){
    video.play();
    video.playbackRate = 2
}
function  speedDown(){
    video.play();
    video.playbackRate = 0.5
}

function progressUpdate(){
    let dur = video.duration;
    let current = video.currentTime;
    progressBar.value  = (100 * current) / dur
}
function  progressChange(){
    let w = this.offsetWidth;
    let o = event.offsetX
    this.value = 100 * w / o
    video.pause()
    video.currentTime = video.duration * (o/w)
    video.play();

}
