var $body = document.getElementsByTagName("body")[0];
var fullPlayer = document.createElement("DIV");
var audio = document.createElement("AUDIO");

/*setting fullPlayer style */
fullPlayer.style.backgroundColor = "black";
fullPlayer.style.position = "fixed";
fullPlayer.style.width = "100%";
fullPlayer.style.height = "50px";

/* settinf player attributs */
audio.id = "audio";
audio.controls = "controls";

fullPlayer.appendChild(audio);

$body.appendChild(fullPlayer);
