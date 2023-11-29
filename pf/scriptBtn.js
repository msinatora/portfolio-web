const playPauseButton = document.getElementById('play-pause-button');
const audio = document.getElementById('audio');

playPauseButton.addEventListener('click', () => {
  if (audio.paused) {
    playAudio();
  } else {
    pauseAudio();
  }
});

function playAudio() {
  audio.play();
  playPauseButton.classList.add('pause');
}

function pauseAudio() {
  audio.pause();
  playPauseButton.classList.remove('pause');
}