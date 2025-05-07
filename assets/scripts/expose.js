// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  let hornPhotos = document.querySelector('#expose img');
  let hornType = document.getElementById('horn-select');
  let hornSound = document.querySelector('#expose audio');

  hornType.addEventListener('change', changeHorn);

  function changeHorn() {
    //console.log(hornType.value);
    let pickedHorn = hornType.value;
    if(pickedHorn == 'air-horn') {
      hornPhotos.src = "assets/images/air-horn.svg";
      hornPhotos.alt = "air-horn img";
      hornSound.src = "assets/audio/air-horn.mp3";
    }
    else if(pickedHorn == 'car-horn') {
      hornPhotos.src = "assets/images/car-horn.svg";
      hornPhotos.alt = "car-horn img";
      hornSound.src = "assets/audio/car-horn.mp3";
    }
    else if(pickedHorn == 'party-horn') {
      hornPhotos.src = "assets/images/party-horn.svg";
      hornPhotos.alt = "party-horn img";
      hornSound.src = "assets/audio/party-horn.mp3";
    }
  }

  let button = document.querySelector('#expose button');
  button.addEventListener('click', sound);
  let confetti = new JSConfetti();

  function sound() {
    if(hornSound.src) {
      //console.log(hornSound.src);
      if(hornType.value == 'party-horn') {
        confetti.addConfetti();
      }
      hornSound.play();
    }
  }

  let volumeSet = document.getElementById('volume');
  let volumePhoto = document.querySelector('#volume-controls img');
  volumeSet.addEventListener('input', changeVolume);

  function changeVolume() {
    let level = volumeSet.value;

    if (level < 1) {
      volumePhoto.src = 'assets/icons/volume-level-0.svg';
    } else if (level < 33) {
      volumePhoto.src = 'assets/icons/volume-level-1.svg';
    } else if (level < 67) {
      volumePhoto.src = 'assets/icons/volume-level-2.svg';
    } else {
      volumePhoto.src = 'assets/icons/volume-level-3.svg';
    }
    hornSound.volume = level / 100;
  }
}