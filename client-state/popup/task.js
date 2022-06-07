const subscribeModal = document.getElementById("subscribe-modal")
const modalClose = document.querySelector(".modal__close")


if (!document.cookie.includes("shown=true")) {
    window.addEventListener("load", () => {
        subscribeModal.classList.add("modal_active")
    })
}

modalClose.addEventListener("click", () => {
    subscribeModal.classList.remove("modal_active")
    document.cookie = "shown=true"
    console.log(document.cookie)
})

if (document.cookie.includes("shown=true")) {
    subscribeModal.classList.remove("modal_active")
}


function listCoockie() {
    document.cookie.split("; ")
    console.log(document.cookie)
}


console.log(document.cookie)