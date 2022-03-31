document.body.innerHTML += "<div id=\"GM\"></div>";
GM.style.backgroundColor = "pink";

addDiv("https://totallyscience.co/assets/games/cubedodge.html", "Cubefield");
addDiv("https://scratch.mit.edu/projects/389464290/embed/", "Getting over it");
addDiv("https://www.google.com/webhp?igu=1", "Google");


document.addEventListener("keydown", (e)=>{
    if (e.key == "ä") {
        GM.requestFullscreen();
    }
})

setInterval(()=>{
    if (document.fullscreen) {
        GM.style.display = "block";
    } else {
        GM.style.display = "none";
    }
}, 200);

function addDiv(url, text) {
    GM.innerHTML += "<div style=\"background-color:white\" onclick=\"handleClick(this)\"><iframe src=\"" + url + "\"></iframe><div>" + text + "</div></div>";
}

function handleClick(a) {
    a.children[0].requestFullscreen();
}
