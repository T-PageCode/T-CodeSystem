let hideTimer = null;
let launchpadTime = null;
let programTimeout = null;
let mouseTimeout = null;
const mouse = document.getElementById("mouse");
const menu = document.getElementById("menu");
const githubLink = document.getElementById("github-link")
const launchpad = document.getElementById("launchpad");
const launchpadBtn = document.getElementById("launchpad-btn");
const browser = document.getElementById("browser");
const launchpadProgram = document.querySelectorAll(".launchpad-program");
const login = document.getElementById("login");
const loginButton = document.getElementById("login-button");
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
    e.preventDefault();
    if (e.target.closest("#login")) {
        return;
    }
    clearTimeout(hideTimer);
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
    clearTimeout(hideTimer);
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
let windowToolControl = null;
function windowTool(windowElement) {
    windowToolControl = false;
    let startX,startY,startLeft,startTop;
    windowElement.addEventListener("mousedown", (e) => {
        if (e.button !== 0){
            return;
        }
        if (e.target.closest(".window-close") || e.target.closest(".window-max")) {
            return;
        }
        e.preventDefault();
        windowElement.style.transition = "none";
        startX = e.clientX;
        startY = e.clientY;
        startLeft = windowElement.offsetLeft;
        startTop = windowElement.offsetTop;
        windowToolControl = true;
    });
    document.addEventListener("mousemove", (e) => {
        if (windowToolControl === false) {
            return;
        }
        let diffX = e.clientX - startX;
        let diffY = e.clientY - startY;
        windowElement.style.left = (startLeft + diffX) + "px";
        windowElement.style.top = (startTop + diffY) + "px";
    });
    document.addEventListener("mouseup", () => {
        if (localStorage.getItem("transition") === "false") {
            windowElement.style.transition = "none";
        }
        else {
            windowElement.style.transition = "";
        }
        windowToolControl = false;
    });
}
const windows = document.querySelectorAll('.window');
windows.forEach((windowsForEach) => {
    windowTool(windowsForEach);
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
    let transitionDisabled = localStorage.getItem("transition") === "false";
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
loginButton.addEventListener("click",() => {
    login.style.opacity = "0";
    login.style.transform = "translate(-50%,-50%) scale(0.7)";
    setTimeout(() => {
        login.style.visibility = "hidden";
    },500)
})
function showLogin() {
    login.style.visibility = "visible";
    login.style.opacity = "1";
    login.style.transform = "translate(-50%,-50%) scale(1)";
    hiddenLaunchpad();
}
const timeMain = document.getElementById("time-main");
const timeDate = document.getElementById("time-date");
const loginTime = document.getElementById("login-time");
const loginDate = document.getElementById("login-date");
function getTime() {
    const dateData = new Date();
    let year = dateData.getFullYear();
    let month = dateData.getMonth() + 1;
    let date = dateData.getDate();
    let day = dateData.getDay();
    let hour = dateData.getHours();
    let minute = dateData.getMinutes();
    let second = dateData.getSeconds();
    hour = hour.toString().padStart(2,"0");
    minute = minute.toString().padStart(2,"0");
    second = second.toString().padStart(2,"0");
    const dayConvert = ["日", "一", "二", "三", "四", "五", "六"];
    timeMain.innerText = `${year}年${month}月${date}日`;
    timeDate.innerText = `${hour}:${minute}:${second}`;
    loginTime.innerText = `${hour}:${minute}`;
    loginDate.innerText = `星期${dayConvert[day]} · ${month}月${date}日`
};
getTime();
setInterval(getTime,1000);