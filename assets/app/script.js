document.addEventListener("DOMContentLoaded", function () {
  var splide = new Splide(".splide", {
    rewind: true,
    type: "fade",
    speed: 300,
    autoplay: true,
    intervel: 1000,
    pauseOnHover: false,
    arrows: false,
    pagination: false,
  });
  splide.mount();
});
