// array of song i'm gonna input
var songs = ["hand of God.mp3", "ajrOverture.mp3", "aviciiBadreputation.mp3", "alanwalkerLostcontrol.mp3", "marshCheckout.mp3", "justinyummy.mp3", "Hear Me Calling.mp3", "Drown.mp3", "opheliaDreamin.mp3"];
// array of music poster
var poster = ["images/jonCover.jpg", "images/ajrCover.jpg", "images/aviciiCover.jpg", "images/alanWalkercover.jpg", "images/Cover.jpg", "images/justinbiebercover.jpg", "images/hearMe.jpeg", "images/ekali.jpg", "images/ophelia.jpg"];

var songTitle = document.getElementById("song_title");
var fillbar = document.getElementById("fill");

// creating object of audio class

var song = new Audio();
var currentSong = 0; // point the the current song

// to play song when widow or body is loading
window.onload = playSong; // call the function playSong() when widows is loading;

function playSong() {
    song.src = songs[currentSong]; //set the source of the first song

    songTitle.textContent = songs[currentSong]; // set the title of song

    song.play();
}
// change play button to pause
function playOrPauseSong() {
    if (song.paused) {
        song.play();
        $("#play img").attr("src", "images/icons/pause.png");
    } else {
        song.pause();
        $("#play img").attr("src", "images/icons/play.png")
    }

}

// calling function with onClick event Listener
// access seekbar
song.addEventListener('timeupdate', function () {

    var position = song.currentTime / song.duration;

    fillbar.style.width = position * 100 + '%';
});

// next button
function next() {
    currentSong++;
    if (currentSong > 8) {
        currentSong = 0;
    }
    playSong();
    $("#play img").attr("src", "images/icons/pause.png")
    $("#image img").attr("src", poster[currentSong]);
    $("#bg img").attr("src", poster[currentSong]);
}
// previous button
function previous() {
    currentSong--;
    if (currentSong < 0) {
        currentSong = 8;
    }
    playSong();
    $("#play img").attr("src", "images/icons/pause.png")
    $("#image img").attr("src", poster[currentSong]);
    $("#bg img").attr("src", poster[currentSong]);
}