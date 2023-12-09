$('.owl-carousel').owlCarousel({
    // autoplayHoverPause: true,
    // loop: true,

    // autoplay: true,
    // autoplayTimeout: 2000,
    // stagePadding: 18,

    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        768: {
            items: 3
        },
        1024: {
            items: 4
        }
    }
})