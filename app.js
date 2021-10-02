const music = document.querySelector("audio");
const img = document.querySelector('img');
const play = document.getElementById("play");
const artist = document.getElementById("artist");
const title = document.getElementById("title");
const previ = document.getElementById("previ");
const next = document.getElementById("next");


const songs = [
    {
    name: "song-1",
    title: "Levitating",
    artist: "Dua Lipa"
},

{
    name: "song-2",
    title: "Wahran",
    artist: "RANDALL"
},

{
    name: "song-3",
    title: "Surprise",
    artist: "You know him"
},
];



let isPlaying = false;

//FOR PLAY
const playMusic = () => {
    isPlaying = true;
    music.play();
    play.classList.replace("fa-play", "fa-pause");
    img.classList.add("anime");

};

//FOR PAUSE
const pauseMusic = () => {
    isPlaying = false;
    music.pause();
    play.classList.replace("fa-pause", "fa-play");
    img.classList.remove("anime");

};

play.addEventListener('click', () => {

    isPlaying ? pauseMusic() : playMusic();
});


 

//to the next song

const loadSong = (songs) => {
    title.textContent = songs.title;
    artist.textContent = songs.artist;
    //music.src = "music/" + songs.name + ".mp3";
    music.src = `music/${songs.name}.mp3`;
    img.src ="images/" + songs.name + ".jpg";
    
};


 songIndex = 0;
//loadSong(songs[2]);

const nextSong = () => {
    songIndex = (songIndex + 1) % songs.length;
    loadSong(songs[songIndex]); 
    playMusic();
};

const previSong = () => {
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    loadSong(songs[songIndex]); 
    playMusic();
};



next.addEventListener("click", nextSong);
previ.addEventListener("click", previSong);


