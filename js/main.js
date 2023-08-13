const btn = document.querySelector(".burger");
const disScroll = document.querySelector("body");
const navActive = document.querySelector(".header__nav");
const overlay = document.querySelector(".nav-overlay");
btn.onclick = function() {
  btn.classList.toggle("not-active");
  btn.classList.toggle("active");
  navActive.classList.toggle("header__nav--active");
  overlay.classList.toggle("nav-overlay--active");
  disScroll.classList.toggle("dis-scroll");
  
}

document.addEventListener("DOMContentLoaded", function() {
  const fadeIns = document.querySelectorAll(".title");
  const subtitleEls = document.querySelectorAll(".subtitle");
  const subtitleEls2 = document.querySelectorAll(".subtitle-2");
  const descEls = document.querySelectorAll(".desc");
  const linkEls = document.querySelectorAll(".link");
  const walllImg = document.querySelectorAll(".wall__img");
  const modellImg = document.querySelectorAll(".model__img");
  const bookingImg = document.querySelectorAll(".booking__img");
  const quote = document.querySelectorAll(".techno__quote");

  function handleFadeIn(entries, observer) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("r-to-l");
        observer.unobserve(entry.target);
      }
    });
  }
  function handleFadeInImg(entries, observer) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("img-ani");
        observer.unobserve(entry.target);
      }
    });
  }
  function handleFadeInQuote(entries, observer) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("quote-ani");
        observer.unobserve(entry.target);
      }
    });
  }

  var observerOptions = {
    root: null,
    rootMargin: "0px 0px -15% 0px",
    threshold: 0
  };

  var fadeInObserver = new IntersectionObserver(handleFadeIn, observerOptions);
  var fadeInObserverImg = new IntersectionObserver(handleFadeInImg, observerOptions);
  var fadeInObserverQuote = new IntersectionObserver(handleFadeInQuote, observerOptions);

  fadeIns.forEach((fadeIn) => {
    fadeInObserver.observe(fadeIn);
  });
  subtitleEls.forEach((el) => {
    fadeInObserver.observe(el);
  })
  descEls.forEach((el) => {
    fadeInObserver.observe(el);
  })
  linkEls.forEach((el) => {
    fadeInObserver.observe(el);
    
  })
  subtitleEls2.forEach((el) => {
    fadeInObserver.observe(el);
  })
  walllImg.forEach((el) => {
    fadeInObserverImg.observe(el);
  })
  modellImg.forEach((el) => {
    fadeInObserverImg.observe(el);
  })
  bookingImg.forEach((el) => {
    fadeInObserverImg.observe(el);
  })
  quote.forEach((el) => {
    fadeInObserverQuote.observe(el);
  })
});