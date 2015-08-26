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

/* setting backward css and attributs */
var backwardBtn = document.createElement("DIV");
backwardBtn.style.width = "32px";
backwardBtn.style.height = "100%";
backwardBtn.style.marginLeft = "32px";
backwardBtn.style.display = "inline-block";
var iconBack = document.createElement("I");
iconBack.className = "fa fa-step-backward";
iconBack.style.color = "white";
iconBack.style.marginTop = "17px";
iconBack.style.fontSize = "13px";
backwardBtn.appendChild(iconBack);

/* setting forward css and attributs */
var forwardBtn = document.createElement("DIV");
forwardBtn.style.width = "32px";
forwardBtn.style.height = "100%";
forwardBtn.style.marginLeft = "5px";
forwardBtn.style.display = "inline-block";
var iconForward = document.createElement("I");
iconForward.className = "fa fa-step-forward";
iconForward.style.color = "white";
iconForward.style.marginTop = "17px";
iconForward.style.fontSize = "13px";
forwardBtn.appendChild(iconForward);

/* setting playBtn css and attributs */
var playBtn = document.createElement("DIV");
playBtn.style.width = "32px";
playBtn.style.height = "100%";
playBtn.style.display = "inline-block"
var iconPlay = document.createElement("I");
iconPlay.className = "fa fa-play";
iconPlay.style.color = "white";
iconPlay.style.verticalAlign = "middle";
iconPlay.style.fontSize = "20px";

playBtn.appendChild(iconPlay);

/*setting source attributs*/
source.src = "music/montageson.ogg";
source.type = "audio/ogg";

/* setting playerBtn attribut and style */



audio.appendChild(source);
fullPlayer.appendChild(backwardBtn);
fullPlayer.appendChild(playBtn);
fullPlayer.appendChild(forwardBtn);
fullPlayer.appendChild(audio);


$body.appendChild(fullPlayer);

playBtn.addEventListener("click", function(e){ audio.play();}, false);
