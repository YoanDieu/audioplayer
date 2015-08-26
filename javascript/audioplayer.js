var $body = document.getElementsByTagName("body")[0];
var fullPlayer = document.createElement("DIV");
var audio = document.createElement("AUDIO");
var source = document.createElement("SOURCE");
var playBtn = document.createElement("BUTTON");
var backwardBtn = document.createElement("DIV");
var script = document.getElementsByTagName("script")[0];


/*setting fullPlayer style */
fullPlayer.style.backgroundColor = "black";
fullPlayer.style.position = "fixed";
fullPlayer.style.display = "block";
fullPlayer.style.width = "100%";
fullPlayer.style.height = "50px";

/* setting player attributs */
audio.id = "audio";

/*setting source attributs*/
source.src = "music/montageson.ogg";
source.type = "audio/ogg";

/* setting playerBtn attribut and style */
playBtn.innerHTML = "play";



audio.appendChild(source);
fullPlayer.appendChild(playBtn);
fullPlayer.appendChild(audio);

$body.insertBefore(fullPlayer, script);

playBtn.addEventListener("click", function(e){ audio.play();}, false);
