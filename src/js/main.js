const programImages = document.querySelectorAll(".atelier-section .col-4");
const programOptions = {
  root: null,
  threshold: 0.2,
};

const programObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("appear");
      observer.unobserve(entry.target);
    }
  });
}, programOptions);

programImages.forEach((image) => {
  programObserver.observe(image);
});

const expoImages = document.querySelectorAll(".exposition-section .col-4");
const expoOptions = {
  root: null,
  threshold: 0.2,
};

const expoObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("appear");
      observer.unobserve(entry.target);
    }
  });
}, expoOptions);

expoImages.forEach((image) => {
  expoObserver.observe(image);
});

window.addEventListener("scroll", function () {
  var header = document.querySelector(".header");
  var video = document.querySelector(".header-video");
  var nav = document.querySelector(".nav");

  var threshold = header.offsetHeight;

  if (window.pageYOffset >= threshold) {
    video.classList.add("hide-video");
    nav.style.opacity = "0";
  } else {
    video.classList.remove("hide-video");
    nav.style.opacity = "1";
  }
});

document.getElementById("lang-toggle").addEventListener("click", function (e) {
  e.preventDefault();
  $(this).parent().toggleClass("is-open");
});
