let hideTimer = null;
const mouse = document.getElementById("mouse");
const menu = document.getElementById("menu");
const githubLink = document.getElementById("github-link")
const launchpad = document.getElementById("launchpad");
const launchpadBtn = document.getElementById("launchpad-btn");
const browser = document.getElementById("browser");
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
document.addEventListener("click",(e) => {
    if (e.target.closest("#launchpad") || e.target.closest("#launchpad-btn")) {
        return;
    }
    launchpad.style.opacity = "0";
    launchpad.style.transform = "translate(-50%,-50%) scale(0.8)";
    launchpadTime = setTimeout(() => {
        launchpad.style.visibility = "hidden";
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
document.querySelectorAll("img").forEach((img) => {
    img.draggable = false;
});
function makeDraggable(targetElement) {
    let isDragging = false;
    let startX, startY, startLeft, startTop;
    targetElement.addEventListener("mousedown", (e) => {
        if (e.button !== 0) return; 
        e.preventDefault();
        targetElement.style.transition = "none";
        startX = e.clientX;
        startY = e.clientY;
        let rect = targetElement.getBoundingClientRect();
        targetElement.style.left = rect.left + "px";
        targetElement.style.top = rect.top + "px";
        targetElement.style.transform = "none";
        isDragging = true;
        startLeft = targetElement.offsetLeft;
        startTop = targetElement.offsetTop;
    });
    document.addEventListener("mousemove", (e) => {
        if (!isDragging) return;
        let diffX = e.clientX - startX;
        let diffY = e.clientY - startY;
        targetElement.style.left = (startLeft + diffX) + "px";
        targetElement.style.top = (startTop + diffY) + "px";
    });
    document.addEventListener("mouseup", () => {
        isDragging = false;
    });
}
const allWindows = document.querySelectorAll('.window');
allWindows.forEach((win) => {
    makeDraggable(win);
});
function startProgram(programName) {
    let programID = document.getElementById(programName);
    programID.style.visibility = "visible";
    programID.style.opacity = "1";
    programID.style.transform = "translate(-50%,-50%) scale(1)";
}