const inputInches = document.querySelector("#inches") as HTMLInputElement;
const inputCentim = document.querySelector("#centimeter") as HTMLInputElement;

const convertCentim = () =>
  (inputCentim.value = String(Number(inputInches.value) * 2.54));
const convertIn = () =>
  (inputInches.value = String(Number(inputCentim.value) / 2.54));

// inputInches?.addEventListener("change", convertCentim);
// inputInches?.addEventListener("keyup", convertCentim);
// inputCentim?.addEventListener("change", convertIn);
// inputCentim?.addEventListener("keyup", convertIn);
inputInches?.addEventListener("input", convertCentim);
inputCentim?.addEventListener("input", convertIn);
