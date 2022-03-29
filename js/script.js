var screen = document.querySelector('#screen_canvas');
var brush = screen.getContext('2d');

brush.fillStyle = 'black';
brush.fillRect(0, 0, 600, 400);

let xInicial = 0;
let yInicial = 0;
let xFinal = 50;
let yFinal = 50;
let xyMed = (xFinal+yFinal)/10;
let xIncr = xFinal/xyMed;
let result;

function drawRect(xIni, yIni, xFin, yFin, fill) {
    brush.fillStyle = fill;
    brush.fillRect(xIni, yIni, xFin, yFin);
}

function sorteiaPosicao(maximo) {
    return Math.floor(Math.random() * maximo);
}

function criarQuadrado(x, y, x1, y1, x2, y2, borda) {
    return result = (x>=x1 && (y>=y1 && y<=(y1+y2)) && x<=(x1+x2)) && !(x>=(x1+borda) && (y>=(y1+borda) && y<=(y1+y2-borda)) && x<=(x1+x2-borda));
}


function atualizaTela(){
    let res = 5;
    let resSom = 0;
    let cor = '';   

    for(var x=0; x < 590; x = x+res+resSom){ 
        for(var y=0; y < 390; y = y+res+resSom){

            result = criarQuadrado(x, y, 50, 50, 50, 50, 4);
            result += criarQuadrado(x, y, 110, 50, 50, 50, 4);
            result += criarQuadrado(x, y, 170, 50, 50, 50, 4);
            result += criarQuadrado(x, y, 230, 50, 50, 50, 4);
            result += criarQuadrado(x, y, 290, 50, 50, 50, 4);

            if(result) {
                cor = `rgba(0,0,0,1)`;
            } else {
                cor = `rgba(${sorteiaPosicao(255)},${sorteiaPosicao(255)},${sorteiaPosicao(255)},1)`;
            }

            drawRect(res+x,res+y,res,res, cor);
        }
    }
}

setInterval(atualizaTela, 100);