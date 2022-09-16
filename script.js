const cover = document.getElementById('cover');
const disc = document.getElementById('disc');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const progressContainer = document.getElementById('progress-container');
const progress = document.getElementById('progress');
const timer = document.getElementById('timer');
const duration = document.getElementById('duration');
const prev = document.getElementById('prev');
const play = document.getElementById('play');
const next = document.getElementById('next');
let songIndex = 0;

// Songs info
const songs = [
  {
    title: 'Green Chair',
    artist: 'Diego Nava',
    coverPath: 'images/cover1.jpg',
    discPath: 'music/music1.mp3',
    duration: '1:33',
  },
  {
    title: 'Dance with Me',
    artist: 'Ahjay Stelino',
    coverPath: 'images/cover2.jpg',
    discPath: 'music/music2.mp3',
    duration: '2:22',
  },
  {
    title: 'Gimme that Bottle',
    artist: 'Michael Ramir',
    coverPath: 'images/cover3.jpg',
    discPath: 'music/music3.mp3',
    duration: '1:54',
  },
];

// Load song initially
loadSong(songs[songIndex]);

// Load the given song
function loadSong(song) {
  cover.src = song.coverPath;
  disc.src = song.discPath;
  title.textContent = song.title;
  artist.textContent = song.artist;
  duration.textContent = song.duration;
}

// Toggle play and pause
function playPauseMedia() {
  if (disc.paused) {
    disc.play();
  } else {
    disc.pause();
  }
}

// Update icon
function updatePlayPauseIcon() {
  if (disc.paused) {
    play.classList.remove('fa-pause');
    play.classList.add('fa-play');
  } else {
    play.classList.remove('fa-play');
    play.classList.add('fa-pause');
  }
}

// Update progress bar
function updateProgress() {
  progress.style.width = (disc.currentTime / disc.duration) * 100 + '%';

  let minutes = Math.floor(disc.currentTime / 60);
  let seconds = Math.floor(disc.currentTime % 60);
  if (seconds < 10) {
    seconds = '0' + seconds;
  }
  timer.textContent = `${minutes}:${seconds}`;
}

// Reset the progress
function resetProgress() {
  progress.style.width = 0 + '%';
  timer.textContent = '0:00';
}

// Go to previous song
function gotoPreviousSong() {
  if (songIndex === 0) {
    songIndex = songs.length - 1;
  } else {
    songIndex = songIndex - 1;
  }

  const isDiscPlayingNow = !disc.paused;
  loadSong(songs[songIndex]);
  resetProgress();
  if (isDiscPlayingNow) {
    playPauseMedia();
  }
}

// Go to next song
function gotoNextSong(playImmediately) {
  if (songIndex === songs.length - 1) {
    songIndex = 0;
  } else {
    songIndex = songIndex + 1;
  }

  const isDiscPlayingNow = !disc.paused;
  loadSong(songs[songIndex]);
  resetProgress();
  if (isDiscPlayingNow || playImmediately) {
    playPauseMedia();
  }
}

// Change song progress when clicked on progress bar
function setProgress(ev) {
  const totalWidth = this.clientWidth;
  const clickWidth = ev.offsetX;
  const clickWidthRatio = clickWidth / totalWidth;
  disc.currentTime = clickWidthRatio * disc.duration;
}

// Play/Pause when play button clicked
play.addEventListener('click', playPauseMedia);

// Various events on disc
disc.addEventListener('play', updatePlayPauseIcon);
disc.addEventListener('pause', updatePlayPauseIcon);
disc.addEventListener('timeupdate', updateProgress);
disc.addEventListener('ended', gotoNextSong.bind(null, true));

// Go to next song when next button clicked
prev.addEventListener('click', gotoPreviousSong);

// Go to previous song when previous button clicked
next.addEventListener('click', gotoNextSong.bind(null, false));

// Move to different place in the song
progressContainer.addEventListener('click', setProgress);


/*============= Bhakti Music ================*/

const cover1 = document.getElementById('cover1');
const disc1 = document.getElementById('disc1');
const title1 = document.getElementById('title1');
const artist1 = document.getElementById('artist1');
const progressContainer1 = document.getElementById('progress-container1');
const progress1 = document.getElementById('progress1');
const timer1 = document.getElementById('timer1');
const duration1 = document.getElementById('duration1');
const prev1 = document.getElementById('prev1');
const play1 = document.getElementById('play1');
const next1 = document.getElementById('next1');
let songIndex1 = 0;

// Songs info
const songs1 = [
  {
    title: 'Mangne ki Aadat',
    artist: 'Jai Shankar Ji',
    coverPath: 'images/cover1.jpg',
    discPath: 'music/bhakti/Mangne-ki.mp3',
    duration: '7:37',
  },
  {
    title: 'Teri Marzi ka',
    artist: 'Vijay Soni',
    coverPath: 'images/cover2.jpg',
    discPath: 'music/bhakti/Teri-Marzi.mp3',
    duration: '3:12',
  },
];

// Load song initially
loadSong1(songs1[songIndex1]);

// Load the given song
function loadSong1(song) {
  cover1.src = song.coverPath;
  disc1.src = song.discPath;
  title1.textContent = song.title;
  artist1.textContent = song.artist;
  duration1.textContent = song.duration;
}

// Toggle play and pause
function playPauseMedia1() {
  if (disc1.paused) {
    disc1.play();
  } else {
    disc1.pause();
  }
}

// Update icon
function updatePlayPauseIcon1() {
  if (disc1.paused) {
    play1.classList.remove('fa-pause');
    play1.classList.add('fa-play');
  } else {
    play1.classList.remove('fa-play');
    play1.classList.add('fa-pause');
  }
}

// Update progress bar
function updateProgress1() {
  progress1.style.width = (disc1.currentTime / disc1.duration) * 100 + '%';

  let minutes = Math.floor(disc1.currentTime / 60);
  let seconds = Math.floor(disc1.currentTime % 60);
  if (seconds < 10) {
    seconds = '0' + seconds;
  }
  timer1.textContent = `${minutes}:${seconds}`;
}

// Reset the progress
function resetProgress1() {
  progress1.style.width = 0 + '%';
  timer1.textContent = '0:00';
}

// Go to previous song
function gotoPreviousSong1() {
  if (songIndex1 === 0) {
    songIndex1 = songs1.length - 1;
  } else {
    songIndex1 = songIndex1 - 1;
  }

  const isDiscPlayingNow1 = !disc1.paused;
  loadSong1(songs1[songIndex1]);
  resetProgress1();
  if (isDiscPlayingNow1) {
    playPauseMedia1();
  }
}

// Go to next song
function gotoNextSong1(playImmediately) {
  if (songIndex1 === songs1.length - 1) {
    songIndex1 = 0;
  } else {
    songIndex1 = songIndex1 + 1;
  }

  const isDiscPlayingNow1 = !disc1.paused;
  loadSong1(songs1[songIndex1]);
  resetProgress1();
  if (isDiscPlayingNow1 || playImmediately) {
    playPauseMedia1();
  }
}

// Change song progress when clicked on progress bar
function setProgress1(ev) {
  const totalWidth1 = this.clientWidth1;
  const clickWidth1 = ev.offsetX;
  const clickWidthRatio1 = clickWidth1 / totalWidth1;
  disc1.currentTime = clickWidthRatio1 * disc1.duration;
}

// Play/Pause when play button clicked
play1.addEventListener('click', playPauseMedia1);

// Various events on disc
disc1.addEventListener('play', updatePlayPauseIcon1);
disc1.addEventListener('pause', updatePlayPauseIcon1);
disc1.addEventListener('timeupdate', updateProgress1);
disc1.addEventListener('ended', gotoNextSong1.bind(null, true));

// Go to next song when next button clicked
prev1.addEventListener('click', gotoPreviousSong1);

// Go to previous song when previous button clicked
next1.addEventListener('click', gotoNextSong1.bind(null, false));

// Move to different place in the song
progressContainer1.addEventListener('click', setProgress1);


/*============= Dj Music ================*/

const cover2 = document.getElementById('cover2');
const disc2 = document.getElementById('disc2');
const title2 = document.getElementById('title2');
const artist2 = document.getElementById('artist2');
const progressContainer2 = document.getElementById('progress-container2');
const progress2 = document.getElementById('progress2');
const timer2 = document.getElementById('timer2');
const duration2 = document.getElementById('duration2');
const prev2 = document.getElementById('prev2');
const play2 = document.getElementById('play2');
const next2 = document.getElementById('next2');
let songIndex2 = 0;

// Songs info
const songs2 = [
  {
    title: 'Backbone',
    artist: 'Hardy Sandhu',
    coverPath: 'images/cover1.jpg',
    discPath: 'music/dj songs/backbone.mp3',
    duration: '3:12',
  },
  {
    title: 'Bom Diggy Diggy Bom',
    artist: 'Honey singh',
    coverPath: 'images/cover2.jpg',
    discPath: 'music/dj songs/bom-diggy.mp3',
    duration: '3:20',
  },
  {
    title: 'Gangland',
    artist: 'Manjit Aulakh',
    coverPath: 'images/cover3.jpg',
    discPath: 'music/dj songs/gangland.mp3',
    duration: '3:49',
  },
  {
    title: 'So High',
    artist: 'Sidhumoose Wala',
    coverPath: 'images/cover2.jpg',
    discPath: 'music/dj songs/so-high.mp3',
    duration: '3:21',
  },
];

// Load song initially
loadSong2(songs2[songIndex2]);

// Load the given song
function loadSong2(song) {
  cover2.src = song.coverPath;
  disc2.src = song.discPath;
  title2.textContent = song.title;
  artist2.textContent = song.artist;
  duration2.textContent = song.duration;
}

// Toggle play and pause
function playPauseMedia2() {
  if (disc2.paused) {
    disc2.play();
  } else {
    disc2.pause();
  }
}

// Update icon
function updatePlayPauseIcon2() {
  if (disc2.paused) {
    play2.classList.remove('fa-pause');
    play2.classList.add('fa-play');
  } else {
    play2.classList.remove('fa-play');
    play2.classList.add('fa-pause');
  }
}

// Update progress bar
function updateProgress2() {
  progress2.style.width = (disc2.currentTime / disc2.duration) * 100 + '%';

  let minutes = Math.floor(disc2.currentTime / 60);
  let seconds = Math.floor(disc2.currentTime % 60);
  if (seconds < 10) {
    seconds = '0' + seconds;
  }
  timer2.textContent = `${minutes}:${seconds}`;
}

// Reset the progress
function resetProgress2() {
  progress2.style.width = 0 + '%';
  timer2.textContent = '0:00';
}

// Go to previous song
function gotoPreviousSong2() {
  if (songIndex2 === 0) {
    songIndex2 = songs2.length - 1;
  } else {
    songIndex2 = songIndex2 - 1;
  }

  const isDiscPlayingNow2 = !disc2.paused;
  loadSong2(songs2[songIndex2]);
  resetProgress2();
  if (isDiscPlayingNow2) {
    playPauseMedia2();
  }
}

// Go to next song
function gotoNextSong2(playImmediately) {
  if (songIndex2 === songs2.length - 1) {
    songIndex2 = 0;
  } else {
    songIndex2 = songIndex2 + 1;
  }

  const isDiscPlayingNow2 = !disc2.paused;
  loadSong2(songs2[songIndex2]);
  resetProgress2();
  if (isDiscPlayingNow2 || playImmediately) {
    playPauseMedia2();
  }
}

// Change song progress when clicked on progress bar
function setProgress2(ev) {
  const totalWidth2 = this.clientWidth2;
  const clickWidth2 = ev.offsetX;
  const clickWidthRatio2 = clickWidth2 / totalWidth2;
  disc2.currentTime = clickWidthRatio2 * disc2.duration;
}

// Play/Pause when play button clicked
play2.addEventListener('click', playPauseMedia2);

// Various events on disc
disc2.addEventListener('play', updatePlayPauseIcon2);
disc2.addEventListener('pause', updatePlayPauseIcon2);
disc2.addEventListener('timeupdate', updateProgress2);
disc2.addEventListener('ended', gotoNextSong2.bind(null, true));

// Go to next song when next button clicked
prev2.addEventListener('click', gotoPreviousSong2);

// Go to previous song when previous button clicked
next2.addEventListener('click', gotoNextSong2.bind(null, false));

// Move to different place in the song
progressContainer2.addEventListener('click', setProgress2);
