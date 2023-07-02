let counterValue = 0;

const valueRef = document.querySelector("#value");
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');

decrementBtn.addEventListener("click", () => {
  counterValue -= 1;
  valueRef.textContent = counterValue;
});

incrementBtn.addEventListener("click", () => {
  counterValue += 1;
  valueRef.textContent = counterValue;
});
