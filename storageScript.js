window.onload = () => {
    let currentColorLocal = localStorage.getItem("backgroundColor");
    let currentColorSession = sessionStorage.getItem("backgroundColor");
    document.getElementById("view-box-local").style.backgroundColor = currentColorLocal;
    document.getElementById("view-box-session").style.backgroundColor = currentColorSession;

}

function setBackgroundColorLocal() {
    let element = document.getElementById("select-background-local").value;
    console.log(element);
    populateLocalStorage(element);
    setStyle();
}

function populateLocalStorage(value) {
    localStorage.setItem("backgroundColor", value);
    setStyleLocal();
}

function setStyleLocal() {
    let currentColor = localStorage.getItem("backgroundColor");
    document.getElementById("view-box-local").style.backgroundColor = currentColor;
}



function setBackgroundColorSession() {
    let element = document.getElementById("select-background-session").value;
    console.log(element);
    populateSessionStorage(element);
    setStyleSession();
}

function populateSessionStorage(value) {
    sessionStorage.setItem("backgroundColor", value);
    setStyleSession();
}

function setStyleSession() {
    let currentColor = sessionStorage.getItem("backgroundColor");
    document.getElementById("view-box-session").style.backgroundColor = currentColor;
}