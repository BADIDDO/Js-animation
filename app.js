let img1 = document.querySelector(".stars1")
let img2 = document.querySelector(".moon2")
let img3 = document.querySelector(".mountains3")
let img4 = document.querySelector(".mountains4")
let img5 = document.querySelector(".river5")
let img6 = document.querySelector(".boat6")
let img7 = document.querySelector(".mountains7")
let title = document.querySelector(".main-title")

window.onscroll = () => {
    let value = scrollY ;
img1.style.left = value + "px" ;
img2.style.top = value * 3 + "px" ;
img3.style.top = value * 1.5 + "px" ;
img4.style.top = value * 1.2 + "px" ;
img5.style.top = value + "px" ;
img6.style.left = value * 3 + "px" ;
title.style.fontSize = value + "px" ;
if (scrollY >= 80) {
    title.style.fontSize = 80 + "px" ;
    title.style.position ="fixed" ;
if (scrollY >= 499) {
    title.style.display ="none" ;
    img2.style.display = "none" ;
} else {
    title.style.display ="block" ;
    img2.style.display = "block" ;
}
}
}