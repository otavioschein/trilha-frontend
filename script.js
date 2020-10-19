function drawX() {
    let canvasElement = document.getElementById("draw-canvas");
    let context = canvasElement.getContext("2d");
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

    gradient.addColorStop(0, "transparent");
    gradient.addColorStop(1, "blue");

    context.fillStyle = gradient;
    context.fillRect(10, 10, 280, 130);
}

function resetCanvas() {
    let canvasElement = document.getElementById("draw-canvas");
    let context = canvasElement.getContext("2d");
    context.clearRect(0, 0, 300, 150);
}