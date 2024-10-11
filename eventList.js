const btn = document.querySelector(".button-show-more");
const brandList = document.querySelector(".brand");
const img = document.querySelector(".rotate-image");
btn.addEventListener("click", function (event) {
  brandList.classList.toggle("brand-open");
  img.classList.toggle("rotated");

  if (btn.textContent === "Показать всё") {
    btn.textContent = "Скрыть";
  } else {
    btn.textContent = "Показать всё";
  }
});
