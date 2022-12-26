function start(){
var button=document.getElementById("start")
button.addEventListener("click",Myfunction,false);
}

function Myfunction(){
let sound=document.getElementById("sounds");
sound.play();
}
