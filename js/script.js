document.addEventListener('DOMContentLoaded', () => {
    const miniFish = document.querySelector('.mini-fish');
    let direction = 1;
    let position = 0;

    function swimVertically() {
        position += direction;

        if (position >= window.innerHeight - miniFish.clientHeight || position <= 0) {
            direction *= -1;
        }

        miniFish.style.top = `${position}px`;

        requestAnimationFrame(swimVertically);
    }

    swimVertically();
});
////////////////////////////
let currentBackground = 1;
let currentMusic = 1;

function toggleSettings() {
    const dropdown = document.getElementById('settings-dropdown');
    dropdown.style.display = dropdown.style.display === 'none' ? 'block' : 'none';
}
//////////////
function changeBackground() {
    const container = document.querySelector('.background-container');
    
    if (currentBackground === 1) {
        container.style.backgroundImage = "url('../image/background 2.jpeg')";
        currentBackground = 2;
    } else {
        container.style.backgroundImage = "url('../image/background.jpeg')";
        currentBackground = 1;
    }
}
///////////////
function changeMusic() {
    const audio = document.getElementById('background-music');
    
    if (currentMusic === 1) {
        audio.src = "../audio/music2.mp3";
        currentMusic = 2;
    } else {
        audio.src = "../audio/music1.mp3";
        currentMusic = 1;
    }

    audio.play();
}

function playMusic() {
    const audio = document.getElementById('background-music');
    audio.play();
}

function pauseMusic() {
    const audio = document.getElementById('background-music');
    audio.pause();
}

function setVolume(volume) {
    const audio = document.getElementById('background-music');
    audio.volume = volume;
}

// Initialize dropdown to be hidden
document.getElementById('settings-dropdown').style.display = 'none';

