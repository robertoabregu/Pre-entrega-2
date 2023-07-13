document.addEventListener('DOMContentLoaded', function () {
    var carousel = document.getElementById('carouselAutoplaying');
    var tiempoReproduccion = 5000;
    var carouselInstance = new bootstrap.Carousel(carousel, {
        interval: tiempoReproduccion
    });
});
