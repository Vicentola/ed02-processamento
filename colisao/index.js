
const bolas = [
    {x: 50,  y: 50,  vx:  2, vy:  3, raio: 15, cor: "orange"},
    {x: 100, y: 80,  vx: -3, vy:  2, raio: 20, cor: "red"},
    {x: 180, y: 120, vx:  4, vy: -2, raio: 18, cor: "blue"},
    {x: 250, y: 60,  vx: -2, vy: -3, raio: 12, cor: "green"},
    {x: 320, y: 180, vx:  3, vy:  4, raio: 22, cor: "purple"}
];

function moveBolas() {

    const canvas = document.getElementById("meuCanvas");
    const ctx = canvas.getContext("2d");

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 1. MOVIMENTAR E VERIFICAR PAREDES
    for (const bola of bolas) {

        bola.x += bola.vx;
        bola.y += bola.vy;

        if (bola.x + bola.raio > canvas.width) {
            bola.vx *= -1;
            bola.x = canvas.width - bola.raio;
        }

        if (bola.x - bola.raio < 0) {
            bola.vx *= -1;
            bola.x = bola.raio;
        }

        if (bola.y + bola.raio > canvas.height) {
            bola.vy *= -1;
            bola.y = canvas.height - bola.raio;
        }

        if (bola.y - bola.raio < 0) {
            bola.vy *= -1;
            bola.y = bola.raio;
        }
    }

    // 2. VERIFICAR COLISÕES ENTRE BOLAS
    for (const [i, bola] of bolas.entries()) {

        for (let j = i + 1; j < bolas.length; j++) {

            const outraBola = bolas[j];

            const distancia = Math.hypot(
                bola.x - outraBola.x,
                bola.y - outraBola.y
            );

            if (distancia < bola.raio + outraBola.raio) {

                bola.vx *= -1;
                bola.vy *= -1;

                outraBola.vx *= -1;
                outraBola.vy *= -1;
            }
        }
    }

    // 3. DESENHAR TODAS AS BOLAS
    for (const bola of bolas) {

        ctx.beginPath();
        ctx.arc(bola.x, bola.y, bola.raio, 0, Math.PI * 2);

        ctx.fillStyle = bola.cor;
        ctx.fill();
    }

    requestAnimationFrame(moveBolas);
}

moveBolas();
