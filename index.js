function ajustarPuntos() {
    const puntos = document.querySelectorAll('.navigation-widget .dot');
    const secciones = document.querySelectorAll('.section');

    secciones.forEach((seccion, index) => {
        const punto = puntos[index];
        const distancia = Math.abs(window.scrollY - seccion.offsetTop);
        const alturaSeccion = window.innerHeight; // Altura aproximada de cada sección

        // Escala el punto en función de la distancia
        let escala = 1 - (distancia / alturaSeccion);
        escala = Math.min(Math.max(escala, 0.5), 1.5); // Limita la escala entre 0.5 y 1.5

        punto.style.transform = `scale(${escala})`;
    });
}

// Evento de scroll
document.addEventListener("scroll", ajustarPuntos);


document.querySelectorAll('.navigation-widget .dot').forEach((punto, index) => {
    punto.addEventListener('click', () => {
        const seccion = document.querySelectorAll('.section')[index];
        window.scrollTo({
            top: seccion.offsetTop,
            behavior: 'smooth'
        });
    });
});

ajustarPuntos();
