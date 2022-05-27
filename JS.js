//exe 01
var exe01 = document.getElementById("exe01").children[0];
function IN01(){
    exe01.src="img/bates OFF.png";
};
function OUT01(){
    exe01.src="img/bates ON.png";
}

//exe 02
var exe02 = document.getElementById("exe02");
var exe02Int = exe02.children[1];
var lamp = true;
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
var exe03Tor = exe03.children[1];
var pos = 0;

function Torneira03(){
    const intervaloTor = setInterval(Esvaziar,200);
    function Esvaziar(){
        exe03Tor.src="img/torneira_aberta.png";
        pos+=2;
        exe03.children[0].style.backgroundPosition = "0px "+String(pos)+"px";
        if(pos>140){
            //acabei programando ela ficando vazia pq n consegui fazer ela parar quando clicava dnv :(
            clearInterval(intervaloTor);
            exe03Tor.src="img/torneira_aberta2.png";  
        }
    }
}

//exe04
function ConfCPF04(){
    this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');
}

//exe05
var exe05 = document.getElementById("exe05").children[0].children[0];
function Upper05(){
    var val=exe05.value;
    exe05.value=val.toUpperCase();
}

//exe06
var exe06 = document.getElementById("exe06");
var forme06=exe06.children[0];
function style06(){
    if(event.type =='focusin'){
        event.target.style.border = "2px solid green";
        event.target.style.backgroundColor = "red";
    }else if(event.type =='focusout'){
        event.target.style.border = "1px solid red ";
        event.target.style.backgroundColor = "green";
    }
    
}

window.onload = function (){
    //exe 01
    exe01.addEventListener("mouseenter", IN01,false);
    exe01.addEventListener("mouseleave", OUT01, false);

    //exe 02
    exe02Int.addEventListener("click", Lamp02, false);

    //exe 03
    exe03Tor.addEventListener("click", Torneira03, false);

    //exe 04
    var cpf = document.getElementById('cpf');
    cpf.addEventListener("input", ConfCPF04, false);

    //exe05
    exe05.addEventListener("change", Upper05, false);

    //exe06
    //listener montado no html :(
}