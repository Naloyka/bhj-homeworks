const modalMain = document.getElementById('modal_main');
const modalSuccess = document.getElementById('modal_success');
const showSuccess = document.querySelector(".show-success")
const modalClose1 = document.getElementsByClassName("modal__close_times")[0]
const modalClose2 = document.getElementsByClassName("modal__close_times")[1]
const btnSuccess = document.querySelector(".btn_success")

modalMain.classList.add('modal_active');

showSuccess.onclick = function () {
    modalMain.classList.remove('modal_active')
    modalSuccess.classList.add('modal_active');
}

modalClose1.onclick = function () {
    modalMain.classList.remove('modal_active')
}

modalClose2.onclick = function () {
    modalSuccess.classList.remove('modal_active');
}

btnSuccess.onclick = function () {
   modalSuccess.classList.remove('modal_active')
   modalMain.classList.remove('modal_active')
}

