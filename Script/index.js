document.addEventListener("contextmenu",(e) => {
    e.preventDefault();
})
const aboutId = document.getElementById("about");
function about() {
    aboutId.style.visibility = "visible";
    aboutId.style.opacity = "1";
}