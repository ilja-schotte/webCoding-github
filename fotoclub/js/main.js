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
function changeStyleOfNavigationBar() {

    /*
    Wenn die landing-section verlassen wird, soll sich der Stil
    der Navigationbar ändern.
    */

    const header = document.querySelector('#logo-text');
    const landing = document.querySelector('#landing');
    const navMenuItems = document.querySelectorAll('.navMenuItem');
    const landingSectionOptions = {};
    const landingSectionObserver = new IntersectionObserver(function (
        entries,
        landingSectionObserver
    ) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                header.classList.remove('dark-mode');
                navMenuItems.forEach(navMenuItem => {
                    navMenuItem.classList.remove('dark-mode');
                });
            }
            else {
                header.classList.add('dark-mode');
                navMenuItems.forEach(navMenuItem => {
                    navMenuItem.classList.add('dark-mode');
                });
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
            start: "500",
            scroller: "main"
        },
    });

    let t2 = gsap.timeline({
        scrollTrigger: {
            trigger: '#about',
            start: "500",
            scroller: "main"
        },
    });

    t1.from('#about_darkbox', { x: -100, y: -100, opacity: 0, duration: 0.8 });
    t2.from('#about_whitebox', { x: 100, y: 100, opacity: 0, duration: 0.8 })
      .from('#about_content_box_left', {y: 20, opacity: 0, duration: 0.3})
      .from('#about_content_box_center', {y: 20, opacity: 0, duration: 0.3})
      .from('#about_content_box_right', {y: 20, opacity: 0, duration: 0.3})
}
initializeAboutAnimations();

// ================================================================
function initializeAboutSwiperJS() {
    var swiper = new Swiper(".mySwiper", {
        direction: 'horizontal',
        slidesPerView: 2,
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
    });
}
initializeAboutSwiperJS();