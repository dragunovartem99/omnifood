// Actual date in footer
const currentYear = new Date().getFullYear();

const currentYearEl = document.querySelector("#current-year");
currentYearEl.textContent = currentYear;

// Mobile Navigation
const mobileNavEl = document.querySelector(".header__burger");
const headerEl = document.querySelector(".header");

mobileNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("enable-mobile-nav");
});
