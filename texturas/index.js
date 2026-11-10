const canvas = document.querySelector("#meuCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function ajustarCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

ajustarCanvas();

window.addEventListener("resize", ajustarCanvas);


const imagens = [
    "imagens/quadrado.jpg",
    "imagens/bola.jpg",
    "imagens/retangulo.jpg"
];

let x = 100;
for (const [i, imagem] of imagens.entries()) {

    const img = new Image();

    img.onload = function() {
        ctx.drawImage(img, 100 + i * 200, 100, 150, 150);
    };

    img.src = imagem;

}

const desenharCirculoComTextura = (ctx, x, y, raio, imagem) => {
ctx.save();
ctx.beginPath();
ctx.arc(x, y, raio, 0, Math.PI * 2);
ctx.clip();
ctx.drawImage(imagem, x - raio, y - raio, raio * 2, raio * 2);
ctx.restore();  


};

const newImage = new Image();
newImage.onload = function() {
    desenharCirculoComTextura(ctx, 400, 400, 100, newImage);
};
newImage.src = "imagens/bola.jpg";
