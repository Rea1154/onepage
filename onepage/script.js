"strict";

const aboutSec = document.querySelector(".section-about");
const teamSec = document.querySelector(".section-team");
const servicesSec = document.querySelector(".section-services");
const contactSec = document.querySelector(".section-contact");
const navLink = document.querySelectorAll(".nav-link");
const btnTop = document.querySelector(".btn-arrow");

navLink.forEach(function (link, index) {
  link.addEventListener("click", function (e) {
    if ((link, index === 1)) {
      const aboutCoords = aboutSec.getBoundingClientRect();
      window.scrollTo({
        left: aboutCoords.left + window.pageXOffset,
        top: aboutCoords.top + window.pageYOffset,
        behavior: "smooth",
      });
      console.log(aboutCoords);
    } else if ((link, index === 2)) {
      const teamCoords = teamSec.getBoundingClientRect();
      window.scrollTo({
        left: teamCoords.left + window.pageXOffset,
        top: teamCoords.top + window.pageYOffset,
        behavior: "smooth",
      });
    } else if ((link, index === 3)) {
      const servicesCoords = servicesSec.getBoundingClientRect();
      window.scrollTo({
        left: servicesCoords.left + window.pageXOffset,
        top: servicesCoords.top + window.pageYOffset,
        behavior: "smooth",
      });
    } else if ((link, index === 4)) {
      const contactCoords = contactSec.getBoundingClientRect();
      window.scrollTo({
        left: contactCoords.left + window.pageXOffset,
        top: contactCoords.top + window.pageYOffset,
        behavior: "smooth",
      });
    }
  });
});

const aboutCoords = aboutSec.getBoundingClientRect();
window.addEventListener("scroll", function () {
  if (window.scrollY > aboutCoords.top) btnTop.style.display = "block";
  else btnTop.style.display = "none";
});

btnTop.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});
