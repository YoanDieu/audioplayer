var $body = document.getElementsByTagName("body")[0];
var fullPlayer = document.createElement("DIV");


/* AUDIO ITSELF */
var audio = document.createElement("AUDIO");
var source = document.createElement("SOURCE");

/*setting fullPlayer style */
fullPlayer.style.backgroundColor = "black";
fullPlayer.style.position = "fixed";
fullPlayer.style.display = "block";
fullPlayer.style.width = "100%";
fullPlayer.style.height = "50px";
fullPlayer.style.zIndex = "500";
fullPlayer.style.bottom = "0px";
fullPlayer.style.verticalAlign = "middle";
/* setting backward css and attributs */
var backwardBtn = document.createElement("DIV");
backwardBtn.style.width = "32px";
backwardBtn.style.height = "100%";
backwardBtn.style.marginLeft = "32px";
backwardBtn.style.display = "inline-block";
backwardBtn.style.verticalAlign = "middle";
var iconBack = document.createElement("I");
iconBack.className = "fa fa-step-backward";
iconBack.style.color = "white";
iconBack.style.marginTop = "20px";
iconBack.style.fontSize = "13px";
backwardBtn.appendChild(iconBack);



/* setting playBtn css and attributs */
var playBtn = document.createElement("DIV");
playBtn.style.width = "32px";
playBtn.style.height = "100%";
playBtn.style.display = "inline-block"
playBtn.style.verticalAlign = "middle";
var iconPlay = document.createElement("I");
iconPlay.className = "fa fa-play";
iconPlay.style.color = "white";
iconPlay.style.verticalAlign = "middle";
iconPlay.style.marginTop = "15px";
iconPlay.style.fontSize = "20px";
playBtn.appendChild(iconPlay);
var iconPause = document.createElement("I");
iconPause.className = "fa fa-pause";
iconPause.style.color = "white";
iconPause.style.verticalAlign = "middle";
iconPause.style.marginTop = "15px";
iconPause.style.fontSize = "20px";
iconPause.style.display = "none";
playBtn.appendChild(iconPause);

/* setting forward css and attributs */
var forwardBtn = document.createElement("DIV");
forwardBtn.style.width = "32px";
forwardBtn.style.height = "100%";
forwardBtn.style.marginLeft = "5px";
forwardBtn.style.marginRight = "10px";
forwardBtn.style.display = "inline-block";
forwardBtn.style.verticalAlign = "middle";
var iconForward = document.createElement("I");
iconForward.className = "fa fa-step-forward";
iconForward.style.color = "white";
iconForward.style.fontSize = "13px";
iconForward.style.marginTop = "20px";
forwardBtn.appendChild(iconForward);



/*setting timline basics */
var timeline = document.createElement("DIV");
timeline.style.position = "relative";
timeline.style.display = "inline-block";
timeline.style.height = "50px";
timeline.style.backgroundColor = "grey";
timeline.style.width = "80.2%";
timeline.style.verticalAlign = "middle";

/* setting progressBar */
var progressBar = document.createElement("DIV");
progressBar.style.display = "block";
progressBar.style.height = "50px";
progressBar.style.backgroundColor = "#0c0c0c";
progressBar.style.width = "100%";

/* setting imagecover css and attributs */
var cover = document.createElement("DIV");
cover.style.width = "50px";
cover.style.height = "100%";
cover.style.display = "inline-block";
cover.style.verticalAlign = "middle";
cover.style.zIndex = "510";
var coverImg = document.createElement("IMG");
coverImg.src = "images/album-01.jpg";
coverImg.style.height = "50px";
cover.appendChild(coverImg);

/* settings song and song length */
var songTitle = document.createElement("P");
songTitle.style.color = "white";
songTitle.style.width = "60%";
songTitle.style.verticalAlign = "middle";
songTitle.style.display = "inline-block";
songTitle.style.fontSize = "13px";
songTitle.innerHTML = "Aeolus - She Threw Herself Into The Sea";
songTitle.style.zIndex = "510";
var songLength = document.createElement("P");
songLength.style.color = "white";
songLength.style.verticalAlign = "middle";
songLength.style.display = "inline-block";
songLength.style.textAlign = "right";
songLength.style.fontSize = "13px";
songLength.innerHTML = "00:00/03:20";
songLength.style.zIndex = "510";

/*pushing all into timeline */
timeline.appendChild(progressBar);
timeline.appendChild(cover);
timeline.appendChild(songTitle);
timeline.appendChild(songLength);

/* setting volumeBtn */
var volumeBtn= document.createElement("DIV");
volumeBtn.style.width = "32px";
volumeBtn.style.height = "100%";
volumeBtn.style.marginLeft = "20px";
volumeBtn.style.marginRight = "10px";
volumeBtn.style.display = "inline-block";
volumeBtn.style.verticalAlign = "middle";
var iconVolume = document.createElement("I");
iconVolume.className = "fa fa-volume-up";
iconVolume.style.color = "white";
iconVolume.style.fontSize = "20px";
iconVolume.style.marginTop = "15px";
volumeBtn.appendChild(iconVolume);

/* setting BurgerBtn */
var burgerBtn= document.createElement("DIV");
burgerBtn.style.width = "32px";
burgerBtn.style.height = "100%";
burgerBtn.style.marginLeft = "0px";
burgerBtn.style.marginRight = "10px";
burgerBtn.style.display = "inline-block";
burgerBtn.style.verticalAlign = "middle";
var iconBurger = document.createElement("I");
iconBurger.className = "fa fa-bars";
iconBurger.style.color = "white";
iconBurger.style.fontSize = "20px";
iconBurger.style.marginTop = "15px";
burgerBtn.appendChild(iconBurger);

/*setting source attributs*/
source.src = "music/montageson.ogg";
source.type = "audio/ogg";

/* setting playerBtn attribut and style */



audio.appendChild(source);
fullPlayer.appendChild(backwardBtn);
fullPlayer.appendChild(playBtn);
fullPlayer.appendChild(forwardBtn);
fullPlayer.appendChild(timeline);
fullPlayer.appendChild(volumeBtn);
fullPlayer.appendChild(burgerBtn);

fullPlayer.appendChild(audio);


/* pushing all into body */
$body.appendChild(fullPlayer);


function playPause(e){

  if (!audio.paused){
    audio.pause();
    iconPause.style.display = "none";
    iconPlay.style.display = "inline-block";
  }else {
    audio.play();
    iconPlay.style.display = "none";
    iconPause.style.display = "inline-block";
  }


}

playBtn.addEventListener("click", playPause , false);
