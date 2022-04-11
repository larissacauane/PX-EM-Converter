const em = document.querySelector(".em").value;

document.querySelector("body").addEventListener("keypress", function () {
  const basePixel = Number(document.querySelector("#base-pixel").value);
  const pixel = Number(document.querySelector("#pixel").value);
  const calcEM = pixel / basePixel;
  document.querySelector(".em").textContent = calcEM;
});
