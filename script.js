const menuBtn = document.querySelector(".menuBtn");
const navInSmallScreen = document.querySelector(".navInSmallScreen");
const closeNavBtn = document.querySelector(".closeNavBtn");
menuBtn.addEventListener("click", () => navInSmallScreen.style.right = "0")
closeNavBtn.addEventListener("click", () => navInSmallScreen.style.right = "-100" + "%")