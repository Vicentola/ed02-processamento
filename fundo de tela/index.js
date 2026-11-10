const canvas = document.getElementById('meuCanvas');
const ctx = canvas.getContext('2d');


function desenharTriangulo(x,y, tamanho, cor) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + (tamanho / 2), y - tamanho);
    ctx.lineTo(x + tamanho, y);
    ctx.closePath();
    ctx.fillStyle = cor;
    ctx.fill();
    ctx.stroke();
}



function sortearTriangulo() {

    const tamanho = Math.random() * 50 + 100;

    const minX = 0;
    const maxX = canvas.width - tamanho;
    const x = minX + Math.random() * (maxX - minX);

    const minY = tamanho;
    const maxY = canvas.height;
    const y = minY + Math.random() * (maxY - minY);

    const letters = '0123456789ABCDEF';
    let cor = '#';

    for (let i = 0; i < 6; i++) {
        cor += letters[Math.floor(Math.random() * 16)];
    }

    desenharTriangulo(x, y, tamanho, cor);
}


setInterval(sortearTriangulo, 500);



