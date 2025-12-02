const paragraph = document.getElementById("sampleText");

let defaultFontSize = 18;
let currentFontSize = defaultFontSize;

function changeBackgroundColor() {
    paragraph.style.backgroundColor = "#fde68a";
}

function increaseFontSize() {
    currentFontSize += 2;
    paragraph.style.fontSize = currentFontSize + "px";
}

function centerText() {
    paragraph.style.textAlign = "center";
}

function resetStyle() {
    paragraph.style.backgroundColor = "#ffffff";
    paragraph.style.textAlign = "left";
    currentFontSize = defaultFontSize;
    paragraph.style.fontSize = currentFontSize + "px";
}
