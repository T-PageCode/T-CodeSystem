document.addEventListener("contextmenu",(e) => {
    e.preventDefault();
})
const loginButton = document.getElementById("login-button");
const loadDiv = document.getElementById("load-div");
const loadBar = document.getElementById("load")
loginButton.onclick = () => {
    loginButton.style.opacity = "0";
    setTimeout(() => {
        loginButton.style.visibility = "hidden";
        loadDiv.style.visibility = "visible";
        loadDiv.style.opacity = "1";
        loadBar.classList.add("animate");
        setTimeout(() => {
            location.href="./Desktop.html";
        },6000)
    },500)
}