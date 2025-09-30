const menu = document.querySelector(".menu")
const close = document.querySelector(".close")
const list = document.querySelector(".nav__list")

menu.addEventListener("click", () => {
    list.style.transform = "scaleX(1)"
    menu.style.visibility = "hidden"
})

close.addEventListener("click", () => {
    list.style.transform = "scaleX(0)"
    menu.style.visibility = "visible"
})
