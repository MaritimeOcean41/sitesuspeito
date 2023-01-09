const audio = new Audio("music.mp3");

$(document.body).on('click', function(e) {
    audio.play();
});
audio.addEventListener("ended", () => {
    audio.play();
});