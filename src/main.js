import gsap from "gsap";

gsap.from("#recipe-container", {
  opacity: 0,
  y: -50,
  duration: 1,
  ease: "power2.out"
});

