var screen = document.querySelector('#screen_canvas');
var brush = screen.getContext('2d');

brush.fillStyle = 'lightgray';
brush.fillRect(0, 0, 600, 400);

function drawRect(xIni, yIni, xFin, yFin, fill) {
    brush.fillStyle = fill;
    brush.fillRect(xIni, yIni, xFin, yFin);
}

function limpaTela() {
    brush.clearRect(0, 0, 600, 400);
    
    brush.fillStyle = 'lightgray';
    brush.fillRect(0, 0, 600, 400);
}

function sorteiaPosicao(maximo) {
    return Math.floor(Math.random() * maximo);
}


function atualizaTela(){

}

function shot(event) {
    var x = event.pageX - screen.offsetLeft;
    var y = event.pageY - screen.offsetTop;
    limpaTela();
    drawRect(x-25,y-25,50,50,'grey');

    console.log(x,y);
}

screen.onclick = shot;



setInterval(atualizaTela, 100);