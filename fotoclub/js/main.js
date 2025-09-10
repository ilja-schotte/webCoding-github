"use strict";


$(document).ready(() => {

    /* 
        ========================== Navigation ==========================
        ================================================================
    */
    function addClickEventsToMenuItems() {

        /*
        Hinzufügen eines ScrollTo Eventlistener für jeden Eintrag im Menü
        um bei 'click' zur entsprechenden Section zu scrollen.
        */

        const navMenuItems = document.querySelectorAll('.navMenuItem');
        const main = document.querySelectorAll('main');

        navMenuItems.forEach((navMenuItem, idx) => {
            navMenuItem.addEventListener('click', () => {
                gsap.to(main, {
                    duration: 1,
                    scrollTo: `#${navMenuItem.dataset.sectionname}`
                });
            });
        });
    }
    addClickEventsToMenuItems();

    // ================================================================
    function mobileNavigationSlide() {

        /*
        Beim Klicken auf das Burger-Navigation-Symbol soll das Nivationsmenü
        sichtbar werden.
        */

        const burgerNavigationButton = document.querySelector('#burgerNavigationButton');
        const navigationLinksContainer = document.querySelector('.nav-links');
        const navigationLinks = document.querySelectorAll('.nav-links li');

        /* Navigation-bar Toggle */
        burgerNavigationButton.addEventListener('click', () => {
            navigationLinksContainer.classList.toggle('nav-links-active');

            console.log(navigationLinksContainer.classList);

            /* Animate links */
            navigationLinks.forEach((item, idx) => {
                if (item.style.animation) {
                    item.style.animation = '';
                }
                else {
                    item.style.animation = `nav-links-appearance 0.5s ease forwards ${idx / 7 + 0.3}s`;
                }

            });

            burgerNavigationButton.classList.toggle('burger-line-toggle');

        });


        /*
        Wenn ein Klick auf "main" erfolgt und das mobile Navigationsmenü angezeigt wird, soll es verschwinden.
        */

        const main_container = document.querySelector('main');

        main_container.addEventListener('click', () => {

            if (Array.from(navigationLinksContainer.classList).includes("nav-links-active")) {

                //console.log(' "burger-line-toggle" is in list');
                //console.log(burgerNavigationButton.classList);
                burgerNavigationButton.classList.toggle('burger-line-toggle');
                navigationLinksContainer.classList.toggle('nav-links-active');

                navigationLinks.forEach((item, idx) => {
                    if (item.style.animation) {
                        item.style.animation = '';
                    }
                });
            }
        });
    }
    mobileNavigationSlide();

    // ================================================================
    function showCurrentSectionInNavigationBar() {

        const sections = document.querySelectorAll('section')
        const navPointerContainer = document.querySelector('#nav-pointer-container');

        const options = {
            //rootMargin: "30% 0% 0% 0%",
            threshold: '0.5'
        };

        let sectionsObserver = new IntersectionObserver(navCheck, options);

        function navCheck(entries) {
            entries.forEach(entry => {
                const currentSectionId = entry.target.id;
                const activeAnchor = document.querySelector(`[data-sectionname=${currentSectionId}]`)

                if (entry.isIntersecting) {
                    activeAnchor.querySelector('.navMenuItem-pointer').style.animation = `navMenuItem-pointer-appear 0.5s ease forwards`;
                }
                else {
                    activeAnchor.querySelector('.navMenuItem-pointer').style.animation = `navMenuItem-pointer-disappear 0.5s ease forwards`;
                }

            });
        }

        sections.forEach(section => {
            sectionsObserver.observe(section)

        });

    }
    showCurrentSectionInNavigationBar();

    // ================================================================
    function changeStyleOfNavigationBar() {

        /*
        Wenn die landing-section verlassen wird, soll sich der Stil
        der Navigationbar ändern.
        */

        const header = document.querySelector('#logo-text');
        const landing = document.querySelector('#landing');
        const navMenuItems = document.querySelectorAll('.navMenuItem');
        const navBurgerLines = document.querySelectorAll('.burger div');



        const landingSectionOptions = {
            rootMargin: "-100px 0px 0px 0px"
        };


        const landingSectionObserver = new IntersectionObserver(function (
            entries,
            landingSectionObserver
        ) {

            entries.forEach(entry => {
                if (entry.isIntersecting) {

                    /* ======== Logo und Nav-Einträge ========= */
                    header.classList.remove('dark-mode-color');
                    navMenuItems.forEach(navMenuItem => {
                        navMenuItem.classList.remove('dark-mode-color');
                    });
                    /*==========================================*/
                    /* ======= Linien des Burger-Menüs =========*/
                    navBurgerLines.forEach((line) => {
                        line.classList.remove('dark-mode-background');
                    });
                    /*==========================================*/
                }
                else {
                    /* ======== Logo und Nav-Einträge ========= */
                    header.classList.add('dark-mode-color');
                    navMenuItems.forEach(navMenuItem => {
                        navMenuItem.classList.add('dark-mode-color');
                    });
                    /*==========================================*/
                    /* ======= Linien des Burger-Menüs =========*/
                    navBurgerLines.forEach((line) => {
                        line.classList.add('dark-mode-background');
                    });
                    /*==========================================*/
                }
            });
        }, landingSectionOptions);
        landingSectionObserver.observe(landing);
    }
    changeStyleOfNavigationBar();






    /* 
        ============================ Über uns ==========================
        ================================================================
    */

    function initializeAboutAnimations() {

        /*
        Hintergrundanimationen in der Sektion "about"
        */
        let t1 = gsap.timeline({
            scrollTrigger: {
                trigger: '#about',
                start: "top 80%",
                scroller: "main"
            },
        });

        let t2 = gsap.timeline({
            scrollTrigger: {
                trigger: '#about',
                start: "top 80%",
                scroller: "main"
            },
        });

        t1.from('#about_darkbox', { x: -100, y: -100, opacity: 0, duration: 0.8 });
        t2.from('#about_whitebox', { x: 100, y: 100, opacity: 0, duration: 0.8 })
            .from('#about_whitebox_content_box_image', { y: 20, opacity: 0, duration: 0.3 })
            .from('#about_whitebox_content_box_text', { y: 20, opacity: 0, duration: 0.3 })
            .from('#about_whitebox_content_box_swiper', { y: 20, opacity: 0, duration: 0.3 });
    }
    initializeAboutAnimations();

    // ================================================================
    function initializeAboutSwiperJS() {
        var swiper = new Swiper(".myAboutSwiper", {
            direction: 'horizontal',
            centeredSlides: false,
            autoHeight: false,
            loop: true,
            slidesPerView: 2,
            speed: 900,
            grid: {
                rows: 2,
            },
            spaceBetween: 30,
            navigation: {
                nextEl: ".swiper-button-next, .swiper-button-next-about-members",
                prevEl: ".swiper-button-prev, .swiper-button-prev-about-members",
            },
            breakpoints: {
                800: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                    grid: {
                        rows: 2,
                    }
                },
                1000: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                    grid: {
                        rows: 2
                    }
                },
                1500: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                    grid: {
                        rows: 2
                    }
                },
                2000: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                    grid: {
                        rows: 2
                    }
                }
            }
        });
    }
    initializeAboutSwiperJS();

    // ================================================================
    function initializeGalleryAlbumSwiperJS() {
        /*
            Initialisiert den Swiper für die zur Verfügung stehenden Alben.
        */
        var albumSwiper = new Swiper(".myAlbumSwiper", {
            slidesPerView: 1,
            centeredSlides: false,
            spaceBetween: 10,
            loop: true,
            speed: 900,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            breakpoints: {
                "@0.00": {
                    slidesPerView: 1,
                    spaceBetween: 10,
                },
                "@0.50": {
                    slidesPerView: 2,
                    spaceBetween: 10,
                },
                "@0.75": {
                    slidesPerView: 2,
                    spaceBetween: 10,
                },
                "@1.00": {
                    slidesPerView: 3,
                    spaceBetween: 10,
                },
                "@1.25": {
                    slidesPerView: 4,
                    spaceBetween: 10,
                },
                "@1.50": {
                    slidesPerView: 5,
                    spaceBetween: 10,
                },
                "@1.75": {
                    slidesPerView: 6,
                    spaceBetween: 10,
                },
                "@2.00": {
                    slidesPerView: 6,
                    spaceBetween: 10,
                },
                "@2.25": {
                    slidesPerView: 7,
                    spaceBetween: 10,
                },
            }
        });
    }
    initializeGalleryAlbumSwiperJS();



    /* 
        ============================ Galerie ==========================
        ================================================================
    */

    function initializeGalleryAnimations() {

        /*
        Hintergrundanimationen in der Sektion "about"
        */
        let t1 = gsap.timeline({
            scrollTrigger: {
                trigger: '#gallery',
                start: "top 80%",
                scroller: "main"
            },
        });

        let t2 = gsap.timeline({
            scrollTrigger: {
                trigger: '#gallery',
                start: "top 80%",
                scroller: "main"
            },
        });

        t1.from('#gallery_darkbox', { x: -100, y: -100, opacity: 0, duration: 0.8 });
        t2.from('#gallery_whitebox', { x: 100, y: 100, opacity: 0, duration: 0.8 });
        /*.from('#about_whitebox_content_box_image', { y: 20, opacity: 0, duration: 0.3 })
        .from('#about_whitebox_content_box_text', { y: 20, opacity: 0, duration: 0.3 })
        .from('#about_whitebox_content_box_swiper', { y: 20, opacity: 0, duration: 0.3 });*/
    }
    initializeGalleryAnimations();


});