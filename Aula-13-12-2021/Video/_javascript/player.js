var video = document.getElementById("playerCustom")

//play/pause
function playPause() {
    if (video.paused == true) {
        video.play();
        video.width=700
    } else
        video.pause();
}

// tela cheia
function telaCheia() {
    video.requestFullscreen();
}

// maximizar tela
function maximizar() {
    video.width = 1000;
}

// minimizar tela
function minimizar() {
    video.width = 450;
}

// tela padrao
function telaPadrao() {
    video.width = 700;
}

// volume mais
function volumeMais() {
    video.volume = video.volume + 0.9;
}

//volume menos

function volumeMenos() {
    video.volume = video.volume - 0.9;
}

// mudo
function mute() {
    if (video.muted) {
        video.muted = false;
    } else {
        video.muted = true
    }
}