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

  // Calculate the threshold to hide the video based on the header's height
  var threshold = header.offsetHeight;

  // Check if the scroll position has reached the threshold
  if (window.pageYOffset >= threshold) {
    video.classList.add("hide-video");
  } else {
    video.classList.remove("hide-video");
  }
});
