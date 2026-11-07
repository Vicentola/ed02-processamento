
function draw(){

const canvas = document.getElementById("meuCanvas");
const ctx = canvas.getContext("2d");

const largura = 100
const altura = 100
const alturaTelhado = 100
const hTotal = altura + alturaTelhado
const topoCasa = (canvas.height - hTotal) / 2;



const casaX = (canvas.width - largura) / 2;
const casaY = topoCasa + alturaTelhado;

desenharCasa(ctx, casaX, casaY, largura, altura, alturaTelhado);
desenharCasa(ctx, 400, 400, largura, -10, alturaTelhado);
}




function desenharCasa(ctx, casaX, casaY, largura, altura, alturaTelhado) {

const larguraPorta = largura * 0.3;
const alturaPorta = altura * 0.5;

const larguraJanela = largura * 0.3;
const alturaJanela = altura * 0.3;

//chaminé
const inclinacao = alturaTelhado / (largura / 2);
const d1 = largura * 0.08
const d2 = largura * 0.35
const yPeEsquerdo = casaY - d1 * inclinacao;
const yPeDireito = casaY - d2 * inclinacao;
const yTopo = casaY - alturaTelhado * 0.8;

ctx.lineWidth = 5;
ctx.strokeRect(casaX, casaY, largura, altura);

//telhado 

ctx.beginPath();
ctx.moveTo(casaX, casaY);
ctx.lineTo(casaX + largura / 2, casaY - alturaTelhado);
ctx.lineTo(casaX + largura, casaY);
ctx.closePath();
ctx.stroke();

//janela 

ctx.strokeRect(casaX + largura * 0.2, casaY + altura * 0.1, larguraJanela, alturaJanela);

//porta

ctx.strokeRect(casaX + largura - larguraPorta -largura * 0.1 , casaY + altura - alturaPorta, larguraPorta, alturaPorta); // a porta tem 30% da largura da casa 


//chaminé
ctx.beginPath();
ctx.moveTo(casaX + d1, yPeEsquerdo);
ctx.lineTo(casaX + d1, yTopo);
ctx.lineTo(casaX + d2, yTopo);
ctx.lineTo(casaX + d2, yPeDireito);

ctx.stroke();


    
}


draw();
