var scene = document.getElementById("scene");
var parallaxInstance = new Parallax(scene);

AOS.init();

new Typed("#typed", {
  strings: ["An Innovative ", "Solutions Agency"],
  typeSpeed: 100,
  delaySpeed: 100,
  loop: true,
});

new Typed("#typed1", {
  strings: ["Quality Digital Services", "You Really Need!"],
  typeSpeed: 100,
  delaySpeed: 100,
  loop: true,
});
