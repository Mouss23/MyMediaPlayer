const container = document.querySelector('.container');

const player = document.createElement('div');
player.classList.add('player');
container.appendChild(player);

const myVideo = document.createElement('video');
myVideo.classList.add('myVideo');
myVideo.setAttribute('src', '/assets/videos/30-seconds.mp4');
player.appendChild(myVideo);

const progression = document.createElement('div');
progression.classList.add('progressBar');
container.appendChild(progression);

const control = document.createElement('div');
control.classList.add('control');
container.appendChild(control);

const play = document.createElement('button');
play.classList.add('playBtn');
play.innerHTML = '<i class="fa-solid fa-play"></i>';
control.appendChild(play);

const volumeSlider = document.createElement('input');
volumeSlider.classList.add('vol');
volumeSlider.id = 'vol';
volumeSlider.setAttribute('type', 'range');
volumeSlider.setAttribute('max', '1');
volumeSlider.setAttribute('min', '0');
volumeSlider.setAttribute('step', '0.1')
volumeSlider.setAttribute('value', '1');
control.appendChild(volumeSlider);

const back = document.createElement('button');
back.classList.add('retour');
back.id = 'retour';
back.innerHTML = '<i class="fa-solid fa-backward"></i>';
control.appendChild(back);

const forWard = document.createElement('button');
forWard.classList.add('avance');
forWard.innerHTML = '<i class="fa-solid fa-forward"></i>';
control.appendChild(forWard);


play.addEventListener('click', togglePlay);
myVideo.addEventListener('click', togglePlay);

function togglePlay() {
  if (myVideo.paused) {
    myVideo.play();
    play.innerHTML = '<i class="fa-solid fa-play"></i>';
  }
  else {
    myVideo.pause();
    play.innerHTML = '<i class="fa-solid fa-pause"></i>';

  }
}


const slider = document.getElementById('vol');
slider.addEventListener('input', function () {
  myVideo.volume = slider.value;
});

const progress = document.createElement('input');
progress.setAttribute('type', 'range')
progress.setAttribute('max', '100')
progress.setAttribute('min', '0')
progress.setAttribute('value', '0')
progression.appendChild(progress);

function progressLoop() {
  setInterval(function () {
    progress.value = Math.round((myVideo.currentTime / myVideo.duration) * 100);
  });
}
progressLoop();

const progressBar = document.querySelector('#progressbar')
progressBar.addEventListener("input", function () {
  myVideo.currentTime = myVideo.duration * (progressBar.value / 100);
});

progressBar.addEventListener('timeupdate', function () {
  const progress = (myVideo.currentTime / myVideo.duration) * 100;
  progressBar.value = progress;
});




