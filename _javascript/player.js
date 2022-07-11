var myVideo = document.getElementById("video1");

function playPause() {
    if (myVideo.paused)
        myVideo.play();
    else
        myVideo.pause();
}

function makeBig() {
    myVideo.width = 700;
}

function makeSmall() {
    myVideo.width = 320;
}

function makeNormal() {
    myVideo.width = 550;
}

function fullscreen() {

    myVideo.requestFullscreen();

}

function volumeUp() {
    if (myVideo.volume < 1) myVideo.volume += 0.1;
}

function volumeDown() {
    if (myVideo.volume > 0) myVideo.volume -= 0.1;
}

function mute() {
    if (myVideo.muted) {
        myVideo.muted = false;
    } else {
        myVideo.muted = true;
    }
}
