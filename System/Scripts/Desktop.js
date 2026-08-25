let hideTimer = null;
const mouse = document.getElementById("mouse");
const menu = document.getElementById("menu");
const githubLink = document.getElementById("github-link")
const launchpad = document.getElementById("launchpad");
const launchpadBtn = document.getElementById("launchpad-btn");
function hiddenMenu() {
    menu.style.opacity = "0";
    menu.style.transform = "translate(-50%,-50%) scale(0.8)";
    setTimeout(() => {
        menu.style.visibility = "hidden";
    },500)
}
githubLink.onclick = () => {
    window.open("https://github.com/T-PageCode/T-CodeSystem", "_blank");
    hiddenMenu();
}
document.addEventListener("contextmenu",(e) => {
    clearTimeout(hideTimer);
    e.preventDefault();
    let menuX = e.clientX;
    let menuY = e.clientY;
    menu.style.top = menuY + "px";
    menu.style.left = menuX + "px";
    menu.style.visibility = "visible";
    menu.style.opacity = "1";
    menu.style.transform = "translate(-50%,-50%) scale(1)";
})
document.addEventListener("click",(e) => {
    if (e.target.closest("#menu")) {
        return;
    }
    menu.style.transform = "translate(-50%,-50%) scale(0.8)";
    menu.style.opacity = "0";
    hideTimer = setTimeout(() => {
        menu.style.visibility = "hidden";
    },500)
})
document.addEventListener("mousemove",(e) => {
    let x = e.clientX + "px";
    let y = e.clientY + "px";
    mouse.style.left = x;
    mouse.style.top = y;
})
document.addEventListener("mousedown",() => {
    mouse.style.transform = "translate(-50%,-50%) scale(0.7)";
})
document.addEventListener("mouseup",() => {
    mouse.style.transform = "translate(-50%,-50%) scale(1)";
})
let launchpadTime = null;
launchpadBtn.onclick = () => {
    clearTimeout(launchpadTime)
    if (launchpad.style.opacity === "1" || launchpad.style.transform === "translate(-50%,-50%) scale(1)") {
        launchpad.style.opacity = "0";
        launchpad.style.transform = "translate(-50%,-50%) scale(0.8)";
        launchpadTime = setTimeout(() => {
            launchpad.style.visibility = "hidden";
        },500)
    }
    else {
        launchpad.style.visibility = "visible";
        launchpad.style.opacity = "1";
        launchpad.style.transform = "translate(-50%,-50%) scale(1)";
    }
}