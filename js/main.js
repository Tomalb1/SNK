const hamburger = document.querySelector(".menuHamburguesa");
const navMenu = document.querySelector(".listaHamburguesa");
const noScroll = document.getElementById("noScroll")
const blur = document.getElementById("noShow")


hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    noScroll.classList.toggle("noScroll")
    blur.classList.toggle("mostrar")

})

document.querySelectorAll(".linkHamb").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))





