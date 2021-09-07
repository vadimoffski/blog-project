let sendMsgBtn = document.querySelector('.contact-btn');
let btnClose = document.querySelector('.btn-close');
let modal = document.querySelector(".modal");

sendMsgBtn.addEventListener('click', openModal);
btnClose.addEventListener('click', closeModal);
modal.addEventListener("click", function(e){
    if (e.target === modal){
      closeModal();
    }
  });

function openModal(){
    modal.classList.add('show');
    modal.classList.remove('hide');
  }
  function closeModal(){
    modal.classList.add('hide');
    modal.classList.remove('show');
  }
console.log(sendMsgBtn);
