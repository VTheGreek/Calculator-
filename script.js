const buttons = document.querySelectorAll(".btn");
const display = document.getElementById("display");
function handleButtonClick(evnt) {
  if (evnt.target.value === "AC") {
    display.value = "";
  } else if (evnt.target.value === "<-" || evnt.target.value === "C") {
    display.value = display.value.slice(0, -1);
} else if (evnt.target.value === "=") {
    display.value = eval(display.value);
} else {
display.value += evnt.target.value;
}

}
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", handleButtonClick);
}

function handleKeyboardClick(evnt1) {
  evnt1.preventDefault();
  const allowedKeys = "0123456789+-=*/%."
  if (evnt1.key === "Delete") {
    display.value = "";
    return;
  } else if (evnt1.key === "Backspace") {
    display.value = display.value.slice(0, -1);
    return;
  } else if (evnt1.key === "Enter") {
    display.value = eval(display.value);
    return;
  } else if (!allowedKeys.includes(evnt1.key)){
    return; 
  } 
    display.value += evnt1.key;
}
document.addEventListener("keydown", handleKeyboardClick);