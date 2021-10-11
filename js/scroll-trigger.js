const sections = document.querySelectorAll(".section");
const animationProperties = {
  opacity: 0,
  ease: "expo.out",
  duration: 1.8,
};

//HOME-SECTION

const section = document.querySelector(".home-section");
const sectionTitle = section.querySelector(".section-title");
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".home-section",
      start: "top top",
      end: "bottom bottom",
      ease: "power3",
      scrub: 1,
      reverse: true,
    },
  })

  .to(".main-title", {
    y: -120,
    opacity: 0,
    ease: "expo.out",
    duration: 1.8,
  })
  .from(sectionTitle, {
    y: 300,
    opacity: 0,
    ease: "expo.out",
    duration: 1.8,
  })
  .from(".computer", {
    y: 300,
    opacity: 0,
    ease: "expo.out",
    duration: 3,
  })
  .from(
    ".particles-circles-box",
    {
      y: 80,
      opacity: 0,
      ease: "elastic.out(1, 0.3)",
      duration: 1,
    },
    "-=2.6"
  );

//SEARCH-SECTION
const secondSection = document.querySelector(".about-section");
const secondSectionTitle = secondSection.querySelector(".section-title");
gsap
  .timeline({
    scrollTrigger: {
      trigger: secondSection,
      start: "top center",
      end: "bottom bottom",
      ease: "power3",
      scrub: 1,
      reverse: true,
    },
  })

  .to("body", {
    backgroundColor: "rgb(198, 238, 248)",
    ease: "none",
    opacity: 1,
    duration: 3,
    delay: 4,
  })
  .from(secondSectionTitle, {
    y: 300,
    opacity: 0,
    ease: "expo.out",
    duration: 1.8,
  })
  .from(
    ".mdi-search-box",
    {
      scaleX: 0,
      ...animationProperties,
    },
    "-=2"
  )
  .from(
    ".mdi-search-box-icon",
    {
      x: -200,
      ...animationProperties,
    },
    "-=2"
  )
  .from(
    ".mdi-ui-elements-decoration",
    {
      scaleX: 0,
      ...animationProperties,
    },
    "-=1"
  )
  .from(
    ".mdi-ui-elements",
    {
      x: 200,
      scale: 0,
      stagger: 0.7,
      ...animationProperties,
    },
    "-=5"
  );

//SEARCH-SECTION
const thirdSection = document.querySelector(".emb-section");
const thirdSectionTitle = thirdSection.querySelector(".section-title");
gsap
  .timeline({
    scrollTrigger: {
      trigger: thirdSection,
      start: "top center",
      end: "bottom bottom",
      ease: "power3",
      scrub: 1,
      reverse: true,
    },
  })
  .from(thirdSectionTitle, {
    y: 300,
    opacity: 0,
    ease: "expo.out",
    duration: 1.8,
  })
  .from(
    ".mdi-women",
    {
      x: -200,
      opacity: 0,
      ease: "expo.out",
      duration: 1,
    },
    "-=.7"
  );

//SEARCH-SECTION
const fourSection = document.querySelector(".company-section");
const fourSectionTitle = fourSection.querySelector(".section-title");
gsap
  .timeline({
    scrollTrigger: {
      trigger: fourSection,
      start: "top center",
      end: "bottom bottom",
      ease: "power3",
      scrub: 1,
      reverse: true,
    },
  })
  .from(fourSectionTitle, {
    y: 300,
    opacity: 0,
    ease: "expo.out",
    duration: 1.8,
  })
  .from(
    ".mdi-men",
    {
      x: 200,
      opacity: 0,
      ease: "expo.out",
      duration: 1,
    },
    "-=.7"
  );

//SEARCH-SECTION
const fiveSection = document.querySelector(".end-section");
const fiveSectionTitle = fiveSection.querySelector(".section-title");
gsap
  .timeline({
    scrollTrigger: {
      trigger: fiveSection,
      start: "top center",
      end: "bottom bottom",
      ease: "power3",
      scrub: 1,
      reverse: true,
    },
  })
  .from(fiveSectionTitle, {
    y: 300,
    opacity: 0,
    ease: "expo.out",
    duration: 1.8,
  })
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

//ANIMATION LOOP
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

gsap
  .timeline()
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
