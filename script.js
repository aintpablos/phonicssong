document.addEventListener("DOMContentLoaded", function() {
    const playButton = document.getElementById("playButton");
    const audio = document.getElementById("thesong");

    playButton.addEventListener("click", function() {
        audio.currentTime = 0; // Restart from beginning
        audio.play().catch(function(error) {
            console.error("Playback failed:", error);
        });
    });
});
