const btnOpen = document.querySelector(".btn-open");
const btnClose = document.querySelector(".btn-close");
const navContainer = document.querySelector("item-nav");

btnOpen.addEventListener("click", () => {
  btnClose.classList.remove("hidden");
  //   btnClose.classList.add("visible");
  btnOpen.classList.add("hidden");
});

btnClose.addEventListener("click", () => {
  btnOpen.classList.remove("hidden");
  btnClose.classList.add("hidden");
});
