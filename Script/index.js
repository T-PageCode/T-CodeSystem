document.addEventListener("contextmenu",(e) => {
    e.preventDefault();
})
const aboutId = document.getElementById("about");
function about() {
    aboutId.style.visibility = "visible";
    aboutId.style.opacity = "1";
    aboutId.style.transform = "translate(-50%,-50%) rotate(0deg)";
}