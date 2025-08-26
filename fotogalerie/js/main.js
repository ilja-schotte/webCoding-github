"use strict";

$(document).ready(() => {

    /* Swiper für die Darstellung der Bilder */
    //var myPhotoGalleryPreviewSwiper = Object();

    /* Swiper für die Vorschaubilder */
    //var myPhotoGalleryPreviewThumbsSwiper = Object();


    // ================================================================
    var initializePhotogallerySwiperJS = () => {

        var myPhotoGalleryPreviewThumbsSwiper = new Swiper(".myPreviewThumbsSwiper", {
            slidesPerView: 2,
            spaceBetween: 10,
            loop: true,
            freeMode: false,
            centeredSlides: false,
            breakpoints: {
                // when wondow width is >= 400px
                400: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                },
                // when wondow width is >= 800px
                800: {
                    slidesPerView: 4,
                    spaceBetween: 10,
                },
                1024: {
                    slidesPerView: 5,
                    spaceBetween: 10,
                },
            },
            /*on: {
                click(event) {
                    console.log('event.target', this.clickedIndex);
                    myPhotoGalleryPreviewThumbsSwiper.slideTo(this.clickedIndex);
                },
            }*/
        });
        var myPhotoGalleryPreviewSwiper = new Swiper(".myPreviewSwiper", {
            spaceBetween: 10,
            slidesPerView: 1,
            loop: true,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            thumbs: {
                swiper: myPhotoGalleryPreviewThumbsSwiper,
            },
        });
    }
    initializePhotogallerySwiperJS();




    // ================================================================
    var openLightboxByClickingImage = () => {

        // get swiper
        const myPreviewSwiper = document.querySelector('.myPreviewSwiper').swiper;

        // Modal Window
        const lightbox = document.getElementById("lightbox");

        // get all image-cards
        const allImageCards = document.querySelectorAll('.gallery-image-card');

        allImageCards.forEach((imageCard, idx) => {
            imageCard.addEventListener('click', (e) => {

                lightbox.style.display = 'flex';
                myPreviewSwiper.slideToLoop(parseInt(e.target.parentElement.dataset.imageindex), 1);
                myPreviewSwiper.update();
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
