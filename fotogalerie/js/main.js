"use strict";

$(document).ready(() => {

    var myPhotoGallerySwiper = Object();
    var myPhotoGalleryPreviewSwiper = Object();

    // ================================================================
    var initializePhotogallerySwiperJS = () => {

        myPhotoGalleryPreviewSwiper = new Swiper(".myPhotoGalleryPreviewSwiper", {
            loop: true,
            spaceBetween: 10,
            slidesPerView: 1,
            allowTouchMove: false,
            freeMode: true,
            watchSlidesProgress: false,
            loop: true
        });
        myPhotoGallerySwiper = new Swiper(".myPhotoGallerySwiper", {
            loop: true,
            spaceBetween: 10,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            thumbs: {
                swiper: myPhotoGalleryPreviewSwiper,
            },
        });
    }
    initializePhotogallerySwiperJS();

    // ================================================================
    var openLightboxByClickingImage = () => {

        // Modal Window
        const lightbox = document.getElementById("lightbox");

        // get all image-cards
        const allImageCards = document.querySelectorAll('.gallery-image-card');

        allImageCards.forEach((imageCard, idx) => {
            imageCard.addEventListener('click', () => {
                lightbox.style.display = 'flex';
            });
        });
    }
    openLightboxByClickingImage();

    // ================================================================
    var closeLightboxByClickingX = () => {

        // x-Button:
        const xButton = document.getElementById('lightbox-preview-close');
        // Modal Window
        const lightbox = document.getElementById("lightbox");

        // Füge Eventlistener hinzu:
        xButton.addEventListener('click', () => {

            // close Window
            lightbox.style.display = 'none';
        });
    }
    closeLightboxByClickingX();

});
