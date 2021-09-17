let sendMsgBtn = document.querySelector(".contact-btn");
let btnClose = document.querySelector(".btn-close");
let modal = document.querySelector(".modal");

sendMsgBtn.addEventListener("click", openModal);
btnClose.addEventListener("click", closeModal);
modal.addEventListener("click", function (e) {
  if (e.target === modal) {
    closeModal();
  }
});

function openModal() {
  modal.classList.add("show");
  modal.classList.remove("hide");
}
function closeModal() {
  modal.classList.add("hide");
  modal.classList.remove("show");
}
console.log(sendMsgBtn);

//mobile menu

let mobileMenu = document.querySelector(".nav-mobile-menu");
let mainMenu = document.querySelector(".navigation");
let body = document.querySelector("body");

mobileMenu.addEventListener("click", function () {
  mobileMenu.classList.toggle("active-menu");
  if (mobileMenu.classList.contains("active-menu")) {
    mainMenu.classList.add("active-menu");
    body.classList.add("hidden");
  } else {
    mainMenu.classList.remove("active-menu");
    body.classList.remove("hidden");
  }
});
