"use strict";






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
    Beim Klicke auf das Burger-Navigation-Symbol soll das Nivationsmenü
    sichtbar werden.
    */

    const burgerNavigationButton = document.querySelector('#burgerNavigationButton');
    const navigationLinksContainer = document.querySelector('.nav-links');
    const navigationLinks = document.querySelectorAll('.nav-links li');

    /* Navigation-bar Toggle */
    burgerNavigationButton.addEventListener('click', () => {
        navigationLinksContainer.classList.toggle('nav-links-active');

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


}
mobileNavigationSlide();

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
    var swiper = new Swiper(".mySwiper", {
        direction: 'horizontal',
        centeredSlides: false,
        loop: true,
        slidesPerView: 2,
        speed: 900,
        grid: {
            rows: 2,
        },
        spaceBetween: 30,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
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