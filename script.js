const buttons = document.querySelectorAll(".btn");
const display = document.getElementById("display");
function handleButtonClick(evnt) {
  if (evnt.target.value === "AC") {
    display.value = "";
  } else if (evnt.target.value === "C") {
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