document.addEventListener("contextmenu",(e) => {
    e.preventDefault();
})
const aboutId = document.getElementById("about");
const aboutOk = document.getElementById("about-ok");
const infoNoSys = document.getElementById("info-no-sys");
function about() {
    aboutId.style.visibility = "visible";
    aboutId.style.opacity = "1";
    aboutId.style.transform = "translate(-50%,-50%) scale(1)";
}
function info_no_sys() {
    infoNoSys.style.right = "-190px";
    setTimeout(() => {
        infoNoSys.style.right = "-570px";
    },7000)
}
aboutOk.onclick = () => {
    aboutId.style.opacity = "0";
    aboutId.style.transform = "translate(-50%,-50%) scale(0.8)";
    setTimeout(() => {
        aboutId.style.visibility = "hidden";
    },500)
}