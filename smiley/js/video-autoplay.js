var video = document.getElementById('myVideo');
var playbutton = document.getElementById("play");

playbutton.addEventListener("click", function (e) {
  //  Toggle between play and pause based on the paused property
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}, false);

video.addEventListener("play", function () {
  playbutton.innerHTML = "Pause";
}, false);

video.addEventListener("pause", function () {
  playbutton.innerHTML = "Play";
}, false);