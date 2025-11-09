const topBarOpenBtn = document.querySelector('#nav-btn-2');
const topBar = document.querySelector(".top-bar");
const topBarCloseBtn = document.querySelector('.top-bar > button');
topBarOpenBtn.addEventListener('click',()=>{
  topBar.style.top = "0";
  topBar.style.opacity = "1";
})
topBarCloseBtn.addEventListener('click',()=>{
  topBar.style.top = "-70vh";
  topBar.style.opacity = "0";
})
window.addEventListener("scroll",()=>{
  var navBar = document.querySelector("nav");
  if(window.scrollY > 2) {
    navBar.style.background = "white"
    navBar.style.color = "black"
    document.querySelector("#nav-btn-2").style.color = "black"
  }
  else {
    navBar.style.background = "transparent"
    navBar.style.color = "white"
    document.querySelector("#nav-btn-2").style.color = "white"
  }
})

const top_Bar = document.querySelector(".top-bar");
const navLinks = document.querySelectorAll(".top-bar ul li a");
function closeTopBar() {
  setTimeout(() => {
    topBar.style.top = "-70vh";
    topBar.style.opacity = "0";
  }, 300); 
}
navLinks.forEach(link => {
  link.addEventListener("click", closeTopBar);
});
