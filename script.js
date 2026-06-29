document.addEventListener("DOMContentLoaded", () => {
    const audio = document.getElementById("bg-soundtrack");
    const audioToggle = document.getElementById("audio-toggle");
    const audioText = document.getElementById("audio-text");

    audioToggle.addEventListener("click", () => {
        if (audio.paused) {
            audio.play()
                .then(() => {
                    audioText.innerHTML = "⏸ PAUSE SOUNDTRACK";
                })
                .catch(error => {
                    console.error("Playback restriction or error encountered:", error);
                });
        } else {
            audio.pause();
            audioText.innerHTML = "✨ PLAY SOUNDTRACK";
        }
    });
})