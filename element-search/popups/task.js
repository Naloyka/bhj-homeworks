const modalMain = document.getElementById('modal_main');
const modalSuccess = document.getElementById('modal_success');
const showSuccess = document.querySelector(".show-success")
const modalClose = Array.from(document.querySelectorAll(".modal__close"))
const btnSuccess = document.querySelector(".btn_success")


modalMain.classList.add('modal_active');

showSuccess.onclick = function () {
    modalMain.classList.remove('modal_active')
    modalSuccess.classList.add('modal_active');
}

for (let i = 0; i < modalClose.length; i++) {
    modalClose[i].onclick = function () {
        if (modalMain.className.includes('modal_active')) {
            modalMain.classList.remove('modal_active')
            modalSuccess.classList.add('modal_active')
        } else {
            modalSuccess.classList.remove('modal_active')
        }

    }
}

modalClose.onclick = function (element) {
    modalMain.classList.remove('modal_active')
    modalSuccess.classList.remove('modal_active');
}

btnSuccess.onclick = function () {
    modalSuccess.classList.remove('modal_active')
    modalMain.classList.remove('modal_active')
}

