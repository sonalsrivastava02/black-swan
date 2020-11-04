let titles = document.querySelectorAll(".animate");

for (let i = 0; i < titles.length; i++) {
  let element = titles[i];

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: element,
      toggleActions: "play reset play",
      scrub: false
    }
  });

  tl.from(element, {
    opacity: 0,
    y: 180,
    duration: 3
  });
}
