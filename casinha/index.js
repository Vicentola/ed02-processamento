
const casas = [
    { escalaX: 1,    escalaY: 1,    angulo: 0 },             // Casa 0
    { escalaX: 0.5,  escalaY: 0.5,  angulo: 0 },             // Casa 1
    { escalaX: 1.5,  escalaY: 1,    angulo: 0 },             // Casa 2
    { escalaX: 0.6,  escalaY: 1.4,  angulo: 0 },             // Casa 3
    { escalaX: 1,    escalaY: 0.45, angulo: 0 },             // Casa 4
    { escalaX: -1,   escalaY: 1,    angulo: 0 },             // Casa 5
    { escalaX: 1,    escalaY: 1,    angulo: -Math.PI / 2 },  // Casa 6 sentido antihorário math.pi = 90
    { escalaX: 1,    escalaY: -1,   angulo: -Math.PI / 2 },  // Casa 7
    { escalaX: 1,    escalaY: 1,    angulo: Math.PI },       // Casa 8
    { escalaX: 1,    escalaY: -1,   angulo: 0 }              // Casa 9
];



document.addEventListener("keydown", function(event){

    console.log("Tecla pressionada: " , Number(event.key));


   if (event.key >= '0' && event.key <= '9') {
        const numeroCasa = Number(event.key);
        draw(numeroCasa);
    }
    else {
        console.log("Pressione uma tecla de 0 a 9 para desenhar uma casa.");
    }

   
});

function draw(numeroCasa){
const canvas = document.getElementById("meuCanvas");
const ctx = canvas.getContext("2d");
ctx.clearRect(0, 0, canvas.width, canvas.height);
const casa = casas[numeroCasa];


const largura = 100
const altura = 100
const alturaTelhado = 100
const hTotal = altura + alturaTelhado
const topoCasa = (canvas.height - hTotal) / 2;
//casaY: onde começa a parede.
//alturaTelhado: altura do telhado.
//Subtraímos porque, no Canvas, quanto menor o Y, mais alto é o ponto.

const casaX = (canvas.width - largura) / 2;
const casaY = topoCasa + alturaTelhado;

const chaoCasa = casaY + altura;
//casaY: ponto inicial da parede (parte de cima).
//altura: altura total da parede.
//Somando os dois, encontramos o chão da casa.



const centroY = (topoCasa + chaoCasa) / 2;

const centroX = casaX + largura / 2;



ctx.save();

ctx.translate(centroX, centroY);

ctx.rotate(casa.angulo);

ctx.scale(casa.escalaX, casa.escalaY);

ctx.translate(-centroX, -centroY);

desenharCasa(ctx, casaX, casaY, largura, altura, alturaTelhado);

ctx.restore();
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


draw(0);
