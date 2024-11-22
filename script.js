gsap.registerPlugin(ScrollTrigger);
function timeline1() {
    tl.from("nav h1,nav h4, nav button", {
        y: -50,
        opacity: 0,
        duration: 0.5,
        delay: 0.1,
        stagger: 0.1
    })

    tl.from(".center1 h1, .center1 p", {
        x: -100,
        opacity: 0,
        duration: 0.4,
        stagger: 0.2
    })

    tl.from(".center1 button", {
        opacity: 0,
        duration: 0.4
    })

    tl.from(".center2", {
        opacity: 0,
        duration: 0.8,
        x: 80,
    }, "-=1")


    tl.from(".section1last img", {
        opacity: 0,
        y: 50,
        duration: 0.2,
        stagger: 0.1
    })
}
var tl = gsap.timeline();
timeline1()

var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".section2",
        scroller: "body",
        start: "top 90%",
        scrub: 2,
        end: "+=1000",
    }
})

tl2.from(".services h1", {
    y: 100,
    opacity: 0,
    duration: 1
}, "services")

tl2.from(".services p", {
    y: -100,
    opacity: 0,
    duration: .5
}, "services")

tl2.from(".element.line1", {
    x: -100,
    opacity: 0,
    duration: 1
}, "anim")


tl2.from(".element.line2", {
    x: 100,
    opacity: 0,
    duration: 1
}, "anim")


tl2.from(".element.line3", {
    x: -100,
    opacity: 0,
    duration: 1,
}, "anim+=1")


tl2.from(".element.line4", {
    x: 100,
    opacity: 0,
    duration: 1,
}, "anim+=1")

var tl7 = gsap.timeline({
    scrollTrigger: {
        trigger: ".section2last",
        scroller: "body",
        start: "top 75%",
        scrub: 2,
        end: "top 25%",
    }
})

tl7.from(".part1", {
    x: -100,
    opacity: 0,
    duration: 1,
}, "section2last")

tl7.from(".part2", {
    x: 100,
    opacity: 0,
    duration: 1,
}, "section2last")

var tl5 = gsap.timeline({
    scrollTrigger: {
        trigger: ".section3middle",
        scroller: "body",
        start: "top 100%",
        scrub: 1,
        end: "top 25%",
    }
})

tl5.from(".section3child", {
    y: -100,
    opacity: 0,
    duration: 1,
}, "section2last")


var tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: ".footerparent",
        scroller: "body",
        start: "top 90%",
        scrub: 2,
        end: "+=1000",
    }
})


tl3.from(".footer h1, .footer span, .footer button, .footer h2", {
    opacity: 0,
    duration: 1,
    y: -100
})


let str = document.querySelector('.biglogo h1');
let text_ = str.textContent;
let textarray = text_.split("");

var cluster = ""
textarray.forEach(element => {
    cluster += `<span class = "a">${element}</span>`
});

str.innerHTML = cluster

var tl4 = gsap.timeline({
    scrollTrigger: {
        trigger: ".footerparent",
        scroller: "body",
        start: "bottom 60%",
        end: "+=1000",
    }
}, "+=1")

tl3.from(".biglogo .a", {
    opacity: 0,
    duration: 4,
    y: -100,
    stagger: 0.3,
    ease: "power2.out"
}, "-=2")