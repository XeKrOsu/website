document.querySelectorAll('.carousel').forEach(carousel => {
    const items = carousel.querySelector('.carousel-inner');
    const prevButton = carousel.querySelector('.prev');
    const nextButton = carousel.querySelector('.next');
    let index = 0;

    function updateCarousel() {
        const width = carousel.clientWidth;
        items.style.transform = `translateX(${-index * width}px)`;
    }

    prevButton.addEventListener('click', () => {
        index = (index > 0) ? index - 1 : items.children.length - 1;
        updateCarousel();
    });

    nextButton.addEventListener('click', () => {
        index = (index < items.children.length - 1) ? index + 1 : 0;
        updateCarousel();
    });

    window.addEventListener('resize', updateCarousel);
});
