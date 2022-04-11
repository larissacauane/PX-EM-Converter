document.querySelector(".btn").addEventListener("click", function () {
  const px = document.querySelector("#pixel").value;
  const basePX = document.querySelector("#base-pixel").value;
  let em = px / basePX;

  if (!px && !basePX) {
    document.querySelector(".erro").style.display = "block";
  } else {
    document.querySelector("#em").textContent = em;
    document.querySelector(".erro").style.display = "none";
  }
});
