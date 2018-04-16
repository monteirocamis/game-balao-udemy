function iniciaJogo(){

var url = window.location.search;
var nivel_jogo = url.replace("?", "");

var tempo_segundo = 0;
if(nivel_jogo == 1){//1 facil -> 120 segs
    tempo_segundo = 120
}

if(nivel_jogo == 2){//2 facil -> 60 segs
    tempo_segundo = 60
}

if(nivel_jogo == 3){//3 dificil -> 30 segs
    tempo_segundo = 30
}

document.getElementById('cronometro').innerHTML = tempo_segundo;//inserindo segundos no span
var qtde_baloes = 10;//quantidade de baloes

cria_baloes(qtde_baloes);
}

function cria_baloes(qtde_baloes){
for(var i = 1; i<= qtde_baloes; i++){
    var balao = document.createElement("img");
    balao.src = "imagens/balao_azul_pequeno.png";

    document.getElementById('cenario').appendChild(balao);
        }
}