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
timeline.style.width = "79%";
timeline.style.verticalAlign = "middle";

/* setting imagecover css and attributs */
var cover = document.createElement("DIV");
cover.style.width = "50px";
cover.style.height = "100%";
cover.style.display = "inline-block";
cover.style.verticalAlign = "middle";
var coverImg = document.createElement("IMG");
coverImg.src = "album-03-300x300.jpg";
coverImg.style.height = "50px";
cover.appendChild(coverImg);

/* settings song and song length */
var songTitle = document.createElement("P");
songTitle.style.color = "white";
songTitle.style.verticalAlign = "middle";
songTitle.style.display = "inline-block";
songTitle.style.fontSize = "13px";
songTitle.innerHTML = "Aeolus - She Threw Herself Into The Sea";
var songLength = document.createElement("P");
songLength.style.color = "white";
songLength.style.verticalAlign = "middle";
songLength.style.display = "inline-block";
songLength.style.textAlign = "right";
songLength.style.fontSize = "13px";
songLength.innerHTML = "00:00/03:20";

/*pushing all into timeline */
timeline.appendChild(cover);
timeline.appendChild(songTitle);
timeline.appendChild(songLength);

/*setting source attributs*/
source.src = "music/montageson.ogg";
source.type = "audio/ogg";

/* setting playerBtn attribut and style */



audio.appendChild(source);
fullPlayer.appendChild(backwardBtn);
fullPlayer.appendChild(playBtn);
fullPlayer.appendChild(forwardBtn);
fullPlayer.appendChild(timeline);

fullPlayer.appendChild(audio);


$body.appendChild(fullPlayer);

playBtn.addEventListener("click", function(e){ audio.play();}, false);
