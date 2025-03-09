document.getElementById('playButton').addEventListener('click', function() {
    const song = document.getElementById('birthdaySong');
    song.play().catch(error => {
    console.log("Audio playback failed: ", error);
    alert("Audio playback failed. Please ensure the file 'play_song.mp3' exists and is accessible.");
    });
    });