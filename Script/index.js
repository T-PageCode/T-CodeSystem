document.addEventListener("contextmenu",(e) => {
    e.preventDefault();
})
const aboutId = document.getElementById("about");
const aboutOk = document.getElementById("about-ok");
function about() {
    aboutId.style.visibility = "visible";
    aboutId.style.opacity = "1";
    aboutId.style.transform = "translate(-50%,-50%) scale(1)";
}
aboutOk.onclick = () => {
    aboutId.style.opacity = "0";
    aboutId.style.transform = "translate(-50%,-50%) scale(0.8)";
    setTimeout(() => {
        aboutId.style.visibility = "hidden";
    },500)
}