    const audio = document.getElementById("player");
    const fileInput = document.getElementById("fileInput");

    fileInput.addEventListener("change", () => {
    const file = fileInput.files[0];
    if (!file) return;

    audio.src = URL.createObjectURL(file);
    audio.load();
    audio.play();
    });

    document.getElementById("play").onClick = () => audio.play();
    document.getElementById("pause").onClick = () => audio.pause();
    document.getElementById("stop").onClick = () => {
    audio.pause();
    audio.currentTime = 0;
    };

    document.getElementById("volume").onInput = e => {
        audio.volume = e.target.value;
    };
    