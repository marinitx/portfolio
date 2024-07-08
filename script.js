document.addEventListener('scroll', function() {
    const image = document.querySelector('.scroll-image');
    const scrollPosition = window.scrollY;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const hiddenImage = document.querySelector('.hidden-image');
    
    // Calcula el porcentaje del scroll
    const scrollPercent = scrollPosition / maxScroll;
   // const revealPoint = 400; // Punto donde la imagen aparece
   // const hidePoint = 1200; // Punto donde la imagen desaparece

    //MOVIMIENTO PEZ

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

    //MOVIMIENTO RANA

  //  if (scrollPosition > revealPoint && scrollPosition < hidePoint) {
  //      hiddenImage.style.left = '0px'; // Ajusta este valor según sea necesario
  //  } else {
  //      hiddenImage.style.left = '-100%'; // Mantener la imagen fuera del viewport
  //  }

    // Ajusta la transformación de la imagen
    image.style.transform = `translate(${translateX}%, ${translateY}%) rotateY(${rotateY}deg)`;
});