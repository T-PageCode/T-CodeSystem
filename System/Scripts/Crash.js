document.addEventListener("contextmenu",(e) => {
    e.preventDefault();
})
let warning = document.getElementById("warning");
let ok = document.getElementById("ok");
let sys1 = document.getElementById("sys1");
let sys2 = document.getElementById("sys2");
let loadBar = document.getElementById("load-bar");
let restart = document.getElementById("restart");
setTimeout(() => {
    sys1.style.opacity = "0";
    warning.style.opacity = "0";
    loadBar.style.opacity = "0";
    setTimeout(() => {
        sys2.style.opacity = "1";
        ok.style.opacity = "1";
        restart.style.top = "calc(50% + 90px)";
    },250)
},4000)