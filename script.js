function drawX() {
    let canvasElement = document.getElementById("draw-canvas");
    let context = canvasElement.getContext("2d");
    context.beginPath();
    context.moveTo(0, 0);
    context.lineTo(300, 150);
    context.moveTo(300, 0);
    context.lineTo(0, 150);
    context.stroke();
}

function drawCircle() {
    let canvasElement = document.getElementById("draw-canvas");
    let context = canvasElement.getContext("2d");
    context.beginPath();
    context.arc(150, 76, 40, 0, 2 * Math.PI);
    context.stroke();
}

function drawGradient() {
    let canvasElement = document.getElementById("draw-canvas");
    let context = canvasElement.getContext("2d");
    let gradient = context.createLinearGradient(100, 0, 300, 0);
    context.beginPath();
    gradient.addColorStop(0, "green");
    gradient.addColorStop(1, "blue");

    context.fillStyle = gradient;
    context.fillRect(10, 10, 280, 130);
}

function resetCanvas() {
    let canvasElement = document.getElementById("draw-canvas");
    let context = canvasElement.getContext("2d");
    context.clearRect(0, 0, 300, 150);
}

function setBackgroundColor() {
    let element = document.getElementById("select-background");
    let value = element.options[element.selectedIndex].value;
    document.getElementById("design-box").style.backgroundColor = value;
}

function setTextColor() {
    let element = document.getElementById("select-text-color");
    let value = element.options[element.selectedIndex].value;
    document.getElementById("design-box").style.color = value;
}

function setTextSize() {
    let element = document.getElementById("select-text-size");
    let value = element.options[element.selectedIndex].value;
    document.getElementById("design-box").style.fontSize = value;
}

function setFontFamily() {
    let element = document.getElementById("select-text-font");
    let value = element.options[element.selectedIndex].value;
    document.getElementById("design-box").style.fontFamily = value;
}