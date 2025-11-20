let isResultDisplayed = false;
 
function appendChar(char) {
    let display = document.getElementById('display');
 
    if (isResultDisplayed) {
        return;
    }
 
    display.value += char;
}
 
function appendOperator(operator) {
    let display = document.getElementById('display');
    let lastChar = display.value.slice(-1);
 
    if (display.value === '') {
        return;
    }
 
    if ("+-*/".includes(lastChar)) {
        return;
    }
 
    display.value += operator;
   // isResultDisplayed = false;
}
 
function clearDisplay() {
    document.getElementById('display').value = '';
   isResultDisplayed = false;
}
 
function backspace() {
    let display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}
 
function calculate() {
    let display = document.getElementById('display');
 
    if (display.value === '' || "+-*/.".includes(display.value.slice(-1))) {
        return;
    }
 
    display.value = eval(display.value);
     isResultDisplayed = true;
}