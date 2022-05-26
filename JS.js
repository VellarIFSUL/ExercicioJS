//exe 01
var exe01 = document.getElementById("exe01");
function IN01(){
    exe01.children[0].src="img/bates OFF.png";
};
function OUT02(){
    exe01.children[0].src="img/bates ON.png";
}

//exe 02
var exe02 = document.getElementById("exe02");
function ON02(){
    exe02.children[0].src="img/lampada_on.jpg";
    exe02.children[1].src="img/interruptor_on.jpg";
}
function OFF02(){
    exe02.children[0].src="img/lampada_off.jpg";
    exe02.children[1].src="img/interruptor_off.jpg";
}

//exe03
var exe03 = document.getElementById("exe03");
function torneiraON(){
    exe03.children[1].src="img/torneira_aberta.png";
}
function torneiraOFF(){
    exe03.children[1].src="img/torneira_fechada.png";
}

//exe04

