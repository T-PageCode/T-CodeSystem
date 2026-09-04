let hideTimer = null;
let launchpadTime = null;
let programTimeout = null;
let mouseTimeout = null;
const transitionDisabled = localStorage.getItem("transition") === "false";
const mouse = document.getElementById("mouse");
const menu = document.getElementById("menu");
const githubLink = document.getElementById("github-link")
const launchpad = document.getElementById("launchpad");
const launchpadBtn = document.getElementById("launchpad-btn");
const browser = document.getElementById("browser");
const launchpadProgram = document.querySelectorAll(".launchpad-program");
function loadTheme() {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
        document.body.classList.add("dark");
    }
    else {
        document.body.classList.remove("dark");
    }
}
loadTheme();
function hiddenMenu() {
    menu.style.opacity = "0";
    menu.style.transform = "translate(-50%,-50%) scale(0.8)";
    hideTimer = setTimeout(() => {
        menu.style.visibility = "hidden";
    },500)
}
function checkShowMouse() {
    clearTimeout(mouseTimeout);
    if (localStorage.getItem("showMouse") === "true") {
        mouse.style.visibility = "visible";
        mouse.style.opacity = "1";
        mouse.style.transform = "translate(-50%,-50%) scale(1)";
    }
    else {
        mouse.style.opacity = "0";
        mouse.style.transform = "translate(-50%,-50%) scale(0)";
        mouseTimeout = setTimeout(() => {
            mouse.style.visibility = "hidden";
        },500)
    }
}
checkShowMouse();
function checkTransition() {
    const elements = document.querySelectorAll("*");
    if (localStorage.getItem("transition") === "false") {
        elements.forEach(e => e.style.transition = "none");
    }
    else {
        elements.forEach(e => e.style.transition = "");
    }
}
checkTransition();
function showOrHiddenMouse() {
    clearTimeout(mouseTimeout);
    if (mouse.style.opacity === "0" || mouse.style.visibility === "hidden") {
        mouse.style.visibility = "visible";
        mouse.style.opacity = "1";
        mouse.style.transform = "translate(-50%,-50%) scale(1)";
        localStorage.setItem("showMouse","true");
    }
    else {
        mouse.style.opacity = "0";
        mouse.style.transform = "translate(-50%,-50%) scale(0)";
        mouseTimeout = setTimeout(() => {
            mouse.style.visibility = "hidden";
        },500)
        localStorage.setItem("showMouse","false");
    }
}
function shutdown() {
    document.body.style.opacity = "0";
    setTimeout(() => {
        window.location.href = "./Shutdown.html";
    },1000);
}
function restart() {
    document.body.style.opacity = "0";
    setTimeout(() => {
        window.location.href = "./Restart.html";
    },1000);
}
function hiddenLaunchpad() {
    launchpad.style.opacity = "0";
    launchpad.style.transform = "translate(-50%,-50%) scale(0.8)";
    launchpadTime = setTimeout(() => {
        launchpad.style.visibility = "hidden";
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
function startProgram(programName) {
    let programID = document.getElementById(programName);
    clearTimeout(programTimeout);
    programID.style.visibility = "visible";
    programID.style.opacity = "1";
    programID.style.transform = "translate(-50%,-50%) scale(1)";
    hiddenLaunchpad();
}
let isDragging = null;
function makeDraggable(targetElement) {
    isDragging = false;
    let startX, startY, startLeft, startTop;
    targetElement.addEventListener("mousedown", (e) => {
        if (e.button !== 0) return; 
        e.preventDefault();
        targetElement.style.transition = "none";
        startX = e.clientX;
        startY = e.clientY;
        startLeft = targetElement.offsetLeft;
        startTop = targetElement.offsetTop;
        isDragging = true;
    });
    document.addEventListener("mousemove", (e) => {
        if (!isDragging) return;
        let diffX = e.clientX - startX;
        let diffY = e.clientY - startY;
        targetElement.style.left = (startLeft + diffX) + "px";
        targetElement.style.top = (startTop + diffY) + "px";
    });
    document.addEventListener("mouseup", () => {
        if (localStorage.getItem("transition") === "false") {
            targetElement.style.transition = "none";
        }
        else {
            targetElement.style.transition = "";
        }
        isDragging = false;
    });
}
const allWindows = document.querySelectorAll('.window');
allWindows.forEach((win) => {
    makeDraggable(win);
});
function closeWindow(windowId) {
    clearTimeout(programTimeout);
    let documentWinId = document.getElementById(windowId);
    documentWinId.style.opacity = "0";
    documentWinId.style.transform = "translate(-50%,-50%) scale(0.8)";
    programTimeout = setTimeout(() => {
        documentWinId.style.visibility = "hidden";
    },500)
}
function maxWindow(windowId) {
    let win = document.getElementById(windowId);
    if (win.classList.contains("max")) {
        win.classList.remove("max")
    }
    else {
        win.classList.add("max")
    }
}
function toggleDarkMode() {
    document.body.classList.toggle("dark");
    if (document.body.classList.contains("dark")) {
        localStorage.setItem("theme","dark");
    }
    else {
        localStorage.setItem("theme","light");
    }
}
function toggleFullScreen() {
    if (document.fullscreenElement) {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
    else {
        const elements = document.documentElement;
        if (elements.requestFullscreen) {
            elements.requestFullscreen();
        }
    }
}
function toggleNoTransition() {
    const elements = document.querySelectorAll("*");
    if (transitionDisabled) {
        elements.forEach(e => e.style.transition = "");
        localStorage.setItem("transition","true");
    }
    else {
        elements.forEach(e => e.style.transition = "none");
        localStorage.setItem("transition","false");
    }
}
const timeMain = document.getElementById("time-main");
const timeDate = document.getElementById("time-date");
function getTime() {
    const dateData = new Date();
    let year = dateData.getFullYear();
    let month = dateData.getMonth() + 1;
    let day = dateData.getDate();
    let hour = dateData.getHours();
    let minute = dateData.getMinutes();
    let second = dateData.getSeconds();
    hour = hour.toString().padStart(2,"0");
    minute = minute.toString().padStart(2,"0");
    second = second.toString().padStart(2,"0");
    timeMain.innerText = `${year}年${month}月${day}日`;
    timeDate.innerText = `${hour}:${minute}:${second}`;
};
getTime();
setInterval(getTime,1000);