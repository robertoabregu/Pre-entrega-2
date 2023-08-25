// const myCarouselElement = document.querySelector('#carouselExampleFade1')

// const carousel = new bootstrap.Carousel(myCarouselElement, {
//     interval: 2000,
//     touch: false
// })

// const myCarouselElement2 = document.querySelector('#carouselExampleFade2')

// const carousel2 = new bootstrap.Carousel(myCarouselElement2, {
//     interval: 2000,
//     touch: false
// })

// window.addEventListener('resize', function () {
//     const screenWidth = window.innerWidth || document.documentElement.clientWidth;

//     // Si el ancho de la pantalla es menor que 990px, desactiva el intervalo en el primer carrusel
//     // y habilita la capacidad táctil en el segundo carrusel
//     if (screenWidth < 990) {
//         carousel.pause();
//         carousel2.touch = true;
//     } else {
//         // Si el ancho de la pantalla es mayor o igual a 990px, activa el intervalo en el primer carrusel
//         // y deshabilita la capacidad táctil en el segundo carrusel
//         carousel.cycle();
//         carousel2.touch = false;
//     }
// });

// // Llama al evento resize para configurar inicialmente los carruseles según el ancho de la pantalla
// window.dispatchEvent(new Event('resize'));




const myCarouselElement1 = document.querySelector('#carouselExampleFade1');
const myCarouselElement2 = document.querySelector('#carouselExampleFade2');

const carousel1 = new bootstrap.Carousel(myCarouselElement1, {
    interval: 3000,
    touch: false
});

const carousel2 = new bootstrap.Carousel(myCarouselElement2, {
    interval: 3000,
    touch: false
});

// Función para sincronizar los carruseles cuando cambia el tamaño de la pantalla
function syncCarousels () {
    const screenWidth = window.innerWidth || document.documentElement.clientWidth;

    if (screenWidth < 990) {
        carousel1.pause();
        carousel2.cycle();
    } else {
        carousel1.cycle();
        carousel2.pause();
    }
}

// Agregar un evento para detectar cambios en el tamaño de la pantalla
window.addEventListener('resize', syncCarousels);

// Llama a la función para configurar inicialmente los carruseles según el ancho de la pantalla
syncCarousels();
