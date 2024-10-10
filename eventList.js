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

  console.log("click");
});

function toggleFourthItem() {
  const fourthItem = document.querySelector(
    ".brand__type .swiper-slide:nth-child(4)",
  );
  const mediaQuery = window.matchMedia(
    "(min-width: 768px) and (max-width: 1119px)",
  );

  if (mediaQuery.matches) {
    fourthItem.style.display = "none";
  } else {
    fourthItem.style.display = "";
  }
}

toggleFourthItem();

window.addEventListener("resize", toggleFourthItem);
