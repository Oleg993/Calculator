const inputA = document.querySelector('.js-input-a');
const inputB = document.querySelector('.js-input-b');
const selectOperation = document.querySelector('.js-select-operation');
const btnResultNode = document.querySelector('.js-btn-result');
const outputBlock = document.querySelector('.js-output');
const btnReset = document.querySelector('.js-btn-reset');
outputBlock.innerHTML = 0;

btnResultNode.addEventListener('click', function () {
  const a = Number(inputA.value);
  const b = Number(inputB.value);
  const operation = selectOperation.value;
  const result = calculate({ a, b, operation });
  outputBlock.innerHTML = result;
});

btnReset.addEventListener('click', () => {
  inputB.value = null;
  inputA.value = null;
  outputBlock.innerHTML = 0;
});
