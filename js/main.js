const sections = document.querySelectorAll("section");
const animationDuration = 1.8;
const animationProperties = {
  opacity: 0,
  ease: "expo.in",
  duration: 1.8,
};

gsap
  .timeline()
  .from(".computer", {
    y: 300,
    rotation: 100,
    opacity: 0,
    ease: "elastic.out(1, 0.3)",
    duration: 1.5,
    transformOrigin: "bottom",
  })
  .to(".computer", {
    y: 0,
    rotation: 0,
    opacity: 1,
    ease: "elastic.out(1, 0.3)",
    duration: 1.5,
    transformOrigin: "bottom",
  })
  .from(
    ".particles-circles-box",
    {
      y: 80,
      ease: "elastic.out(1, 0.3)",
      duration: 1,
    },
    "-=2.6"
  )
  .from(
    ".mdi-search-container",
    {
      y: 100,
      opacity: 0,
      ease: "expo.out",
      duration: 1.4,
    },
    "-=2.6"
  )
  .from(
    ".search-item-box",
    {
      scaleX: 0,
      opacity: 0,
      ease: "expo.out",
      duration: 1.2,
    },
    "-=2"
  )
  .from(
    ".mdi-ui-elements-box",
    {
      y: 100,
      opacity: 0,
      ease: "expo.out",
      duration: 1.2,
      stagger: 0.2,
    },
    "-=2"
  )

  .from(
    ".mdi-women",
    {
      x: -200,
      opacity: 0,
      ease: "expo.out",
      duration: 1,
    },
    "-=.7"
  )
  .from(
    ".mdi-men",
    {
      x: 200,
      opacity: 0,
      ease: "expo.out",
      duration: 1,
    },
    "-=.7"
  )
  .from(
    ".circle-iteration-box",
    {
      y: 100,
      opacity: 0,
      ease: "expo.out",
      duration: 1.2,
      stagger: 0.5,
    },
    "-=2.3"
  )
  .from(
    ".mdi-tree",
    {
      x: 80,
      opacity: 0,
      ease: "expo.out",
      duration: 1.2,
    },
    "-=.8"
  );

/*gsap
  .timeline({
    scrollTrigger: {
      trigger: ".home-section",
      pint: true,

      start: "top top", // when the top of the trigger hits the top of the viewport
      //end: "+=600",
      endTrigger: "#subtitle",
      end: "bottom 40%+=20%",
      ease: "power2",

      scrub: 1,
      reverse: true,
    },
  })

  .to(".computer", {
    y: 300,
    opacity: 0,
    ease: "expo.out",
    duration: 1.8,
    stagger: 1,
  })

  .to(
    ".mdi-search-box",
    {
      scaleX: 0,
      stagger: 2,
      ...animationProperties,
    },
    "-=3.3"
  )
  .to(
    ".mdi-search-box-icon",
    {
      x: -200,
      stagger: 3,
      ...animationProperties,
    },
    "-=3.3"
  )
  .to(
    ".mdi-ui-elements",
    {
      x: 200,
      scale: 0,
      stagger: 0.7,
      ...animationProperties,
    },
    "-=5"
  )
  .to(
    ".mdi-ui-elements-decoration",
    {
      stagger: 0.7,
      scaleX: 0,
      ...animationProperties,
    },
    "-=6.5"
  );*/

const tl = gsap.timeline();
const tl2 = gsap.timeline();
const tl3 = gsap.timeline();
const tl4 = gsap.timeline();
const tl5 = gsap.timeline();
const tl6 = gsap.timeline();

tl.from(".mdi-women-arm", {
  y: -4,
  rotation: 10,
  ease: "none",
  duration: 1.5,
}).to(".mdi-women-arm", {
  y: 0,
  rotation: -12,
  ease: "none",
  duration: 1.5,
});
tl.from(".search-item", {
  scaleX: 0,
  ease: "expo.out",
  duration: 1.8,
})
  .to(".search-item", {
    scaleX: 1,
    ease: "expo.out",
    duration: 1.8,
  })

  .yoyo(true)
  .repeat(-1)
  .timeScale(1.3)
  .play(0.3)
  .delay(3);
tl2
  .from(".mdi-women-arm-left", {
    y: 0,
    rotation: 0,
    ease: "ease",
    duration: 1.8,
  })
  .to(".mdi-women-arm-left", {
    y: 4,
    rotation: 8,
    ease: "ease",
    duration: 1.8,
  })
  .yoyo(true)
  .repeat(-1)
  .timeScale(1)
  .play(0.3);

tl3
  .from(".mdi-women-computer", {
    y: 0,
    rotation: 0,
    ease: "ease",
    duration: 1.8,
  })
  .to(".mdi-women-computer", {
    y: 12,
    rotation: 15,
    ease: "ease",
    duration: 1.8,
  })
  .yoyo(true)
  .repeat(-1)
  .timeScale(1)
  .play(0.3);

tl4
  .from(".mdi-women-head", {
    rotation: 7,
    ease: "none",
    duration: 1.5,
    transformOrigin: "bottom",
  })
  .to(".mdi-women-head", {
    rotation: -7,
    ease: "none",
    duration: 1.5,
    transformOrigin: "bottom",
  })

  .from(".mdi-women-message", {
    scale: 0,
    ease: "elastic.out(1, 0.3)",
    duration: 1.5,
    transformOrigin: "bottom ",
  })
  .to(".mdi-women-message", {
    scale: 1,
    ease: "elastic.out(1, 0.3)",
    duration: 1.5,
    transformOrigin: "bottom ",
  })
  .yoyo(true)
  .repeat(-1)
  .timeScale(1.5)
  .play(0.3);

tl6
  .from(".tree-branchs", {
    x: -8,
    rotation: -14,
    scaleX: 0.8,
    ease: "none",
    duration: 2,
    transformOrigin: "bottom",
  })
  .to(".tree-branchs", {
    x: 8,
    rotation: 14,
    scaleX: 1,
    ease: "none",
    duration: 2,
    transformOrigin: "bottom",
  })
  .yoyo(true)
  .repeat(-1);

//MEN ANIMATION
const menAnimation = gsap.timeline();
const menAnimationIcon = gsap.timeline();
const menAnimationSearch = gsap.timeline();
const menAnimationSearchIcon = gsap.timeline();
const circleIteration = gsap.timeline();
const uiElements = gsap.timeline();
menAnimation
  .from(".mdi-men-arms", {
    rotation: 5,
    ease: "elastic",
    duration: 1.5,
    transformOrigin: "right",
  })
  .to(".mdi-men-arms", {
    rotation: -5,
    ease: "ease",
    duration: 1.5,
    transformOrigin: "right",
  })
  .yoyo(true)
  .repeat(-1)
  .timeScale(1.5)
  .play(0.3);

menAnimationIcon

  .from(".mdi-men-search-icon", {
    rotation: 7,
    ease: "elastic",
    duration: 1.5,
    transformOrigin: "bottom",
  })
  .to(".mdi-men-search-icon", {
    rotation: -7,
    ease: "ease",
    duration: 1.5,
    transformOrigin: "bottom",
    stagger: 1,
  })

  .yoyo(true)
  .repeat(-1)
  .timeScale(1.5)
  .play(0.3);

//sSEARCH BOX
menAnimationSearch
  .from(".mdi-search-box", {
    scaleX: 1,
    ease: "expo.in",
    duration: 1.2,
  })
  .to(".mdi-search-box", {
    scaleX: 0.5,
    ease: "expo.in",
    duration: 1.2,
  })

  .yoyo(true)
  .repeat(-1)
  .delay(3);
menAnimationSearchIcon
  .from(".mdi-search-box-loop", {
    x: 0,
    opacity: 1,
    ease: "expo.in",
    duration: 1.2,
  })
  .to(".mdi-search-box-loop", {
    x: -210,
    opacity: 0,
    ease: "expo.in",
    duration: 1.2,
  })
  .yoyo(true)
  .repeat(-1)
  .delay(3);

circleIteration
  .from(".circle-iteration", {
    y: 0,
    scale: 1,
    opacity: 1,
    ease: "ease.in",
    duration: 2,
    stagger: 2,
  })
  .to(".circle-iteration", {
    y: 30,
    opacity: 0,
    ease: "ease",
    duration: 2,
    stagger: 2,
  })
  .yoyo(true)
  .repeat(-1)
  .timeScale(3.5)
  .play(0.3);
uiElements
  .from(".mdi-ui-elements", {
    scale: 1,
    opacity: 1,
    ease: "expo.out",
    duration: 1.5,
    stagger: 1,
    transformOrigin: "bottom",
  })
  .to(".mdi-ui-elements", {
    scale: 0.8,
    opacity: 0.5,
    ease: "expo.out",
    duration: 1.5,
    stagger: 1,
    transformOrigin: "bottom",
  })
  .yoyo(true)
  .repeat(-1)
  .timeScale(1.5)
  .play(0.3)
  .delay(2);

//PARTUCULES ANIMATION

gsap
  .timeline()
  .to(".particles", {
    x: 150,
    y: 150,
    opacity: 0,
    duration: 1.8,
    ease: "ease",
    yoyo: true,
    repeat: -1,
    stagger: 1,
  })
  .to(".particles-circles", {
    y: 150,
    opacity: 0,
    duration: 1.8,
    ease: "ease",
    yoyo: true,
    repeat: -1,
    stagger: 1,
  });

/* 
    .from(".mdi-men-search-reflector", {
    x: -5,
    y: -5,
    ease: "ease",
    duration: 0.5,
  })
  .to(".mdi-men-search-reflector", {
    x: 12,
    y: 6,
    ease: "ease",
    duration: 0.5,
  })
  
  */
/* tl.from(".mdi-ui-elements-info", {
  stagger: { amount: 0.5 },
  scale: 0,
  opacity: 0,
  ease: "expo.in",
  duration: 1.8,
})
  .to(".mdi-ui-elements-info", {
    stagger: { amount: 0.5 },
    scale: 1,
    opacity: 1,
    ease: "expo.in",
    duration: 1.8,
  })
  .yoyo(true)
  .repeat(-1)
  .timeScale(2)
  .play(0.5); */

/* .to(
    ".check",
    {
      y: 200,
      opacity: 0,
      ease: "expo.out",
      duration: 1,
      stagger: 2,
    },
  ); */

/*const path = project.querySelectorAll(".show-line")
  const info = project.querySelector(".extructure-info-content");
  const pointIndicator = project.querySelectorAll('.pointer-indicator')
  const extraInfo = project.querySelector('.extra-info')
  

 //pathPrepare(path);
  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: project,
      start: "top center",
      ease: "power2",
      toggleActions: "play none none reverse"
    }
  })

  .to(path, 0.9, {
    strokeDashoffset: 0,
    ease:Expo.easeOut,
    stagger: 1
  },"-=2")
  .from(pointIndicator, {
   scale:0,x:info.id == 'axon-content' || info.id == 'dentritas-content' ? 10 : -350 , opacity: 0,stagger:2,duration:.8,
  },"-=1")
  .from(info, {
     x: info.classList.contains('translate-right') ? -200 : 200,
     opacity: 0,
     duration: .8,
   }) 
   .from(extraInfo, {
    x: info.classList.contains('translate-right') ? -200 : 200,
    opacity: 0,
    duration: .8,
  }) 
 */
