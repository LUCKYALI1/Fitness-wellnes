
const btn = document.getElementById("navbar-toggle");
const menu = document.querySelector(".side-menu");
const navLinks = document.querySelectorAll(".sidelink");

btn.addEventListener("click", toggleMenu);

function toggleMenu() {
    if (menu.style.display === "none" || menu.style.display === "") {
        menu.style.display = "block";
        // menu.style.opacity = 1;
    } else {
        menu.style.display = "none";
    }
}
// Add event listener to each navlink to hide the menu when clicked
navLinks.forEach(link => {
    link.addEventListener("click" , ()=> {
        menu.style.display = "none";
    });
});
function sidemenu2(){
var tl = gsap.timeline()
    tl.to("#sidemenu",{
        right:"0",
        delay:0.2,
        opacity:1,
        duration:0.5,
        ease:"expo.out"
    })
    tl.to(".logo",{
        opacity:1,
        delay:0.1,
        ease:"expo.out",
    })
    tl.to(".page1heading",{
        opacity:1,
        delay:0.2,
        stagger:0.8,
    })
  
   
}
sidemenu2()
var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });