const music= document.querySelector("audio");
const img = document.querySelector("img");
const play = document.getElementById("play");
const artist = document.getElementById("artist");
const title = document.getElementById("title");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

const song = [
    {
      name: "Disha-1",
      title: "Just Relax",
      artist: "Lesfm"
    },
    {
        name: "Disha-2",
        title: "Positive Way",
        artist: "RomanSenykMusic"
      },
      {
        name: "Disha-3",
        title: "Beyond the time main",
        artist: "Daddy_s_Music"
      }
];

let isPlaying = false;

// for play function
const playMusic = () => {
  isPlaying = true;
  music.play();
  play.classList.replace("fa-play" , "fa-pause");
  img.classList.add("anime");
};

// for pause function
const pauseMusic = () => {
    isPlaying = false;
    music.pause();
    play.classList.replace("fa-pause" , "fa-play");
    img.classList.remove("anime");
  };

  play.addEventListener("click" , () =>{
    isPlaying  ? pauseMusic() : playMusic();
  })

//   changing the music data
  
  const loadSongs = (song) =>{
    title.textContent = song.title;
    artist.textContent = song.artist;
    music.src = `../music/${song.name}.mp3` ;
    img.src = `../images/${song.name}.jpg` ;
 } 

  // loadSongs(song[1]);
  songIndex = 0;
  const nextSong = () =>{
    songIndex = (songIndex + 1) % song.length;
    loadSongs(song[songIndex]);
    playMusic();
  };
  const prevSong = () =>{
    songIndex = (songIndex - 1 + song.length )% song.length;
    loadSongs(song[songIndex]);
    playMusic();
  };

  next.addEventListener("click" , nextSong);
  prev.addEventListener("click" , prevSong);