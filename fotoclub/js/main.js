"use strict";

let t1 = gsap.timeline({
    scrollTrigger: {
        trigger: 'main',
        start: "500",
        scroller: "main"
    },
});

let t2 = gsap.timeline({
    scrollTrigger: {
        trigger: 'main',
        start: "500",
        scroller: "main"
    },
});

t1.from('#about_darkbox',{ x: 100, y: 100, opacity:0, duration:1})
t2.from('#about_whitebox',{ x: -100, y: -100, opacity:0, duration:1})

