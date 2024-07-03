document.addEventListener('scroll', function() {
    const image = document.querySelector('.scroll-image');
    const scrollPosition = window.scrollY;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;

    // Calcula el porcentaje del scroll
    const scrollPercent = scrollPosition / maxScroll;

    // Inicialmente no se rota
    let rotateY = 0;

    // Si se ha desplazado más del 50%, rota 180 grados
    if (scrollPercent > 0.5) {
        rotateY = 180;
    }

    // Calcula la nueva posición de la imagen
    let translateX, translateY;

    if (scrollPercent <= 0.5) {
        // De 0% a 50%, la imagen se mueve hacia la izquierda y hacia abajo
        translateX = -scrollPercent * 900; // De 0% a -100%
        translateY = scrollPercent * 400;  // De 0% a 100%
    } else {
        // De 50% a 100%, la imagen se mueve hacia la derecha y hacia abajo
        translateX = (scrollPercent - 3) * 200; // De 0% a 100%
        translateY = scrollPercent * 400;         // De 0% a 100%
    }

    // Ajusta la transformación de la imagen
    image.style.transform = `translate(${translateX}%, ${translateY}%) rotateY(${rotateY}deg)`;
});
