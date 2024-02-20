document.addEventListener('DOMContentLoaded', function () {
    const playCheckbox = document.getElementById('playCheckbox');
    const spotifyContainer = document.getElementById('spotifyContainer');
    const spotifyPlayer = document.getElementById('spotifyPlayer');

    playCheckbox.addEventListener('change', function () {
        if (playCheckbox.checked) {
            spotifyContainer.style.display = 'block';
            spotifyPlayer.contentWindow.postMessage('{"method":"play"}', 'https://open.spotify.com');
        } else {
            spotifyContainer.style.display = 'none';
            spotifyPlayer.contentWindow.postMessage('{"method":"pause"}', 'https://open.spotify.com');
        }
    });
});
// Function to create a heart element
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = Math.random() * window.innerWidth + 'px'; // Random X position
    document.body.appendChild(heart);

    // Remove the heart after it reaches the bottom of the screen
    heart.addEventListener('animationiteration', () => {
      heart.remove();
    });
  }

  // Create hearts periodically
  setInterval(createHeart, 200); // Adjust this number to control frequency