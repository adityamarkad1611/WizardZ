let t1=gsap.timeline();

t1.from("nav h1 , nav h4 , nav button" ,{
    y:-10,
    delay:0.5,
    stagger:0.1,
    duration:1,
    opacity:0

})

let t2=gsap.timeline();

t2.from("#center-part1 h1 , #center-part1 p", {
    x:-100,
    delay:0.5,
    stagger:0.1,
    duration:1,
    opacity:0
})

gsap.from("#center-part1 button" ,{
    opacity:0,
    delay:1
    }
)

gsap.from("#center-part2" ,{
    opacity:0,
    x:100,
    delay:1,
    duration:1.5
    }
)

gsap.from("#bottom" , {
    y:50,
    opacity:0,
    delay:1,
    stagger:0.5
})



var sct = gsap.timeline({
    scrollTrigger: {
        trigger: "#section2",
        scoller:"body",
        start: "-20% 50%",
        end: "20% 50%",
        scrub: 1,
        
    }
});

sct.from("#services h1" ,{
    x:-100,
    opacity:0,
    delay:1,
    duration:2
    
})
sct.from("#services p" ,{
    opacity:0,
    delay:1
})

var sct2 = gsap.timeline({
    scrollTrigger: {
        trigger: "#container",
        scoller:"body",
        start: "-20% 50%",
        end: "50% 50%",
        delay:1,
        duration:2,
        scrub: 3,
        stagger:5
    }
});

sct.from("#elem:nth-child(1)" ,{
    x:-600,
    opacity:0
},"a")
sct.from("#elem:nth-child(2)" ,{
    x:600,
    opacity:0
})
sct.from("#elem:nth-child(3)" ,{
    x:-600,
    opacity:0
})
sct.from("#elem:nth-child(4)" ,{
    x:600,
    opacity:0
})
