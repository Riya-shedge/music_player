const songs = [
    {
      title: "Can't Zzz",
      artist: "Maurice Chase",
      src: "public/song1.mp3",
      image: "public/photo.jpg"
    },
    {
      title: "Dreams",
      artist: "Joakim Karud",
      src: "public/song2.mp3",
      image: "public/th.jpg"
    },
    {
        title: "Memory Lane",
        artist: "Purrple Cat",
        src: "public/song3.mp3",
        image: "public/photo3.avif"
    },
    {
        title: "Night Drive",
        artist: "Michael FK",
        src: "public/song4.mp3",
        image: "public/photo1.avif"
      }
  ];
  
  let currentSongIndex = 0;
  
  const audio = document.getElementById("audio");
  const playBtn = document.querySelector(".controls button:nth-child(2)");
  const seekBar = document.getElementById("seek");
  const volumeBar = document.getElementById("volume");
  
  const titleEl = document.querySelector(".song-info h2");
  const artistEl = document.querySelector(".song-info p");
  const albumArt = document.querySelector(".album-art");
  
  function loadSong(index) {
    const song = songs[index];
    audio.src = song.src;
    titleEl.textContent = song.title;
    artistEl.textContent = song.artist;
    albumArt.src = song.image;
    audio.load();
  }
  
  function togglePlay() {
    if (audio.paused) {
      audio.play();
      playBtn.textContent = "⏸️";
    } else {
      audio.pause();
      playBtn.textContent = "⏯️";
    }
  }
  
  function prevSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(currentSongIndex);
    audio.play();
    playBtn.textContent = "⏸️";
  }
  
  function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(currentSongIndex);
    audio.play();
    playBtn.textContent = "⏸️";
  }
  
  audio.ontimeupdate = () => {
    seekBar.max = audio.duration;
    seekBar.value = audio.currentTime;
  };
  
  seekBar.oninput = () => {
    audio.currentTime = seekBar.value;
  };
  
  volumeBar.oninput = () => {
    audio.volume = volumeBar.value;
  };
  
  // Load first song on page load
  loadSong(currentSongIndex);
  