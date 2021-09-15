let searchBtn = document.getElementById("search-btn");
let searchBar = document.querySelector(".search-bar--container");
let searchInput = document.querySelector("#search-bar");
let loginBtn = document.getElementById("login-btn");
let formClose = document.getElementById("form-close");
let formLogin = document.querySelector(".login-form--container");
let menuBarBtn = document.getElementById("menu-bar");
let navbar = document.querySelector(".navbar");
let videoBtns = document.querySelectorAll(".vid-btn");
let videoSrc = document.querySelector("#video-slider");

window.onscroll = () => {
  searchBtn.classList.remove("fa-times");
  searchBar.classList.remove("active");
  formLogin.classList.remove("active");
  menuBarBtn.classList.remove("fa-times");
  navbar.classList.remove("active");
};

// click into search icon
searchBtn.addEventListener("click", () => {
  searchBtn.classList.toggle("fa-times");
  searchBar.classList.toggle("active");
});

// click into user icon
loginBtn.addEventListener("click", () => {
  formLogin.classList.add("active");
});

// click into form close icon
formClose.addEventListener("click", () => {
  formLogin.classList.remove("active");
});

//click into menubar
menuBarBtn.addEventListener("click", () => {
  menuBarBtn.classList.toggle("fa-times");
  navbar.classList.toggle("active");
});

// click control video
videoBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    videoBtns.forEach((_btn) => {
      _btn.classList.remove("active");
    });
    btn.classList.add("active");
    let src = btn.getAttribute("data-src");
    videoSrc.src = src;
  });
});
