//Create the audio tag
var soundFile = document.createElement("audio");
soundFile.preload = "auto";

//Load the sound file (using a source element for expandability)
var src = document.createElement("source");
src.src = "sound/Wacek_-_Brain_Waves_8580.mp3";
soundFile.appendChild(src);

//Load the audio tag
//It auto plays as a fallback
soundFile.load();
soundFile.volume = 0.300000;
soundFile.play();

//Plays the sound
function playMusic() {
    //Set the current time for the audio file to the beginning
    soundFile.currentTime = 0.01;
    soundFile.volume = soundFile.volume;

    //Due to a bug in Firefox, the audio needs to be played after a delay
    setTimeout(function(){soundFile.play();},1);
}

playMusic();