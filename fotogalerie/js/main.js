"use strict";





// ================================================================
function initializePhotogallerySwiperJS() {

    var swiper = new Swiper(".myPhotoGalleryPreviewSwiper", {
        loop: true,
        spaceBetween: 10,
        slidesPerView: 8,
        freeMode: true,
        watchSlidesProgress: true,
    });
    var swiper2 = new Swiper(".myPhotoGallerySwiper", {
        loop: true,
        spaceBetween: 10,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        thumbs: {
            swiper: swiper,
        },
    });

}
initializePhotogallerySwiperJS();


// ================================================================
function closeGalleryLightbox(){

    const lightbox = document.getElementById('lightbox');

    

}
closeGalleryLightbox();
