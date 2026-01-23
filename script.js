document.addEventListener("DOMContentLoaded", () => {
    const audio = document.getElementById("player");
    const fileInput = document.getElementById("fileInput");
    
    if (!audio || !fileInput) return;

    fileInput.addEventListener("change", () => {
        const file = fileInput.files[0];
        if (!file) return;

        audio.src = URL.createObjectURL(file);
        audio.load();
        audio.play();
    });

    document.getElementById("play").addEventListener("click", () => audio.play());
    document.getElementById("pause").addEventListener("click", () => audio.pause());
    document.getElementById("stop").addEventListener("click", () => {
        audio.pause();
        audio.currentTime = 0;
    });

    document.getElementById("volume").addEventListener("input", (e) => {
        audio.volume = e.target.value;
    });
});