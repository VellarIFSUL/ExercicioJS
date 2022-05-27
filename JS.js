//exe 01
var exe01 = document.getElementById("exe01");
function IN01(){
    exe01.children[0].src="img/bates OFF.png";
};
function OUT01(){
    exe01.children[0].src="img/bates ON.png";
}

//exe 02
var exe02 = document.getElementById("exe02");
var exe02Int = exe02.children[1];
var lamp = false;
function Lamp02(){
    if (lamp){
        exe02.children[0].src="img/lampada_on.jpg";
        exe02Int.src="img/interruptor_on.jpg";
        lamp = false;
    }else{
        exe02.children[0].src="img/lampada_off.jpg";
        exe02Int.src="img/interruptor_off.jpg";
        lamp = true;
    }
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
function ConfCPF(){
    function campoCPF() {
        if (event.keyCode >= 48 && event.keyCode <= 57) {
            return true;
        } else {
            event.preventDefault();
            return false;
        }
    }
}

window.onload = function (){
    //exe 01 listener
    exe01.addEventListener("mouseenter", IN01,false);
    exe01.addEventListener("mouseleave", OUT01, false);

    //exe 02
    exe02Int.addEventListener("click", Lamp02, false);
    //exe 04
    var cpf = document.getElementById("cpf");
    cpf.addEventListener("keypress", ConfCPF, false);
}