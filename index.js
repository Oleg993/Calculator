const inputA = document.querySelector('.inputA');
const inputB = document.querySelector('.inputB');
const selectOperation = document.querySelector('.selectOperation');
const buttonRes = document.querySelector('.buttonRes');
const outputP = document.querySelector('.outputP');

buttonRes.addEventListener('click', function () {
  const a = Number(inputA.value);
  const b = Number(inputB.value);
  const operation = selectOperation.value;

  const result = calculate({
    a,
    b,
    operation,
  });
  outputP.innerHTML = result;
});
