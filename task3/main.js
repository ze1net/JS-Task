// Get references to the input, buttons, and the span element
const input = document.getElementById("input");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const value = document.getElementById("value");
const result = document.getElementById("result");

// Add event listeners to the buttons
btn1.addEventListener("click", () => {
  value.textContent = Number(value.textContent) + 1;
  result.textContent = Number(value.textContent) + Number(input.value);
});

btn2.addEventListener("click", () => {
  value.textContent = Number(value.textContent) + 2;
  result.textContent = Number(value.textContent) + Number(input.value);
});

btn3.addEventListener("click", () => {
  value.textContent = Number(value.textContent) + 3;
  result.textContent = Number(value.textContent) + Number(input.value);
});