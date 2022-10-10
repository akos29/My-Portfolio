const btnOpen = document.querySelector(".btn-open");
const btnClose = document.querySelector(".btn-close");

btnOpen.addEventListener("click", () => {
  btnOpen.classList.toggle("visible");
  btnClose.classList.toggle("visible");
});

btnClose.addEventListener("click", () => {
  btnOpen.classList.toggle("visible");
  btnClose.classList.toggle("visible");
});
