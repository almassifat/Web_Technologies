const inputText = document.getElementById("inputText");
const analyzeBtn = document.getElementById("analyzeBtn");
const resultBox = document.getElementById("resultBox");

analyzeBtn.addEventListener("click", function () {
    const text = inputText.value;
    const trimmed = text.trim();

    if (trimmed === "") {
        alert("Please enter some text to analyze.");
        resultBox.innerHTML = "";
        return;
    }

    const charCount = text.length;

    const rawWords = trimmed.split(" ");
    const words = rawWords.filter(function (word) {
        return word !== "";
    });
    const wordCount = words.length;

    const reversedText = text.split("").reverse().join("");

    resultBox.innerHTML =
        "<p><strong>Total Characters:</strong> " + charCount + "</p>" +
        "<p><strong>Total Words:</strong> " + wordCount + "</p>" +
        "<p><strong>Reversed Text:</strong></p>" +
        "<p>" + reversedText + "</p>";
});
