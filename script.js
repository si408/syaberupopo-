let audioFiles = [...Array(100).keys()].map(i => `audio/audio${i + 1}.wav`);
let audio = new Audio();
let isPlaying = false;
let timeoutID;

const playPauseButton = document.getElementById("togglePlayPause");
playPauseButton.textContent = "再生";

playPauseButton.addEventListener("click", () => {
    if (isPlaying) {
        clearTimeout(timeoutID);
        audio.pause();
        playPauseButton.textContent = "再生";  // 一時停止中なので「再生」に変更
    } else {
        playRandomAudio();
        playPauseButton.textContent = "一時停止";  // 再生中なので「一時停止」に変更
    }
    isPlaying = !isPlaying;
});

function playRandomAudio() {
    let randomFile = audioFiles[Math.floor(Math.random() * audioFiles.length)];
    audio.src = randomFile;
    audio.play();

    // 再生間隔を決定する
    let randomDelay;
    if (Math.random() < 0.5) {  // 50%の確率で2～5秒
        randomDelay = Math.floor(Math.random() * (5000 - 2000 + 1)) + 2000;
    } else {  // 50%の確率で5～30秒
        randomDelay = Math.floor(Math.random() * (30000 - 5000 + 1)) + 5000;
    }

    timeoutID = setTimeout(playRandomAudio, randomDelay);
}
