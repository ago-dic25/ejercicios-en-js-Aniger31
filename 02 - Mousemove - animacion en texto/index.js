let hero = document.querySelector('.hero');
let texto = hero.querySelector('h1');

hero.addEventListener('mousemove', function(e) {
    let { offsetWidth: width, offsetHeight: height } = hero;
    let { offsetX: x, offsetY: y } = e;

    let xWidht = x - (width/2);
    let yHeight = y - (height/2)

    // Invertir la dirección de la sombra
    texto.style.textShadow = `
        ${-xWidht}px ${-yHeight}px 10px rgba(56, 92, 211, 0.6)
    `;
});
