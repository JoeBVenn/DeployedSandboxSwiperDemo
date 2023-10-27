
gsap.from(".image-item, .card", {
    duration: 2,
    y: 20,
    ease: "elastic"
});

gsap.from(".circle", {
    duration: 2,
    opacity: 0,
    // y: 20,
    y: () => Math.random() * 100 - 100,
    stagger: 0.15,
    ease: "elastic"
});