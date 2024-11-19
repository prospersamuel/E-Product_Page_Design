let productImg = document.getElementById("product-img");
let color1 = document.querySelector(".color-1");
let color2 = document.querySelector(".color-2");
let color3 = document.querySelector(".color-3");


color2.addEventListener("click", function changeToGreen(){
    productImg.src = `img/green.png`
    color1.classList.remove("active")
})

color1.addEventListener("click", function changeToYellow(){
    productImg.src = `img/yellow.png`
})

color3.addEventListener("click", function changeToWhite(){
    productImg.src = `img/white.png`
})
