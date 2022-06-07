const form = document.getElementById("signin__form")
const btn = document.querySelector(".btn")
const control = Array.from(document.querySelectorAll(".control"))
const signin = document.querySelector(".signin")
const welcome = document.querySelector(".welcome")
const userId = document.getElementById("user_id")

btn.addEventListener("click", (e) => {
    e.preventDefault()

    let formData = new FormData(form);
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "https://netology-slow-rest.herokuapp.com/auth.php")
    xhr.send(formData)

    xhr.addEventListener("readystatechange", () => {
        if (xhr.readyState === xhr.DONE) {
                localStorage.setItem("id", control[0].value)
                localStorage.setItem("password", control[1].value)
                localStorage.getItem("id")
                let response = JSON.parse(xhr.responseText)

               if(!response.success) {
                   alert("Неверныйлогин/пароль")
                   localStorage.clear()
                   control[0].value = ""
                   control[1].value = ""
               } else {
                   signin.classList.remove("signin_active")
                welcome.classList.add("welcome_active")
                userId.textContent = localStorage.getItem("id")
               }
        }
    })
})

if(localStorage.getItem("id")) {
    signin.classList.remove("signin_active")
                welcome.classList.add("welcome_active")
                userId.textContent = localStorage.getItem("id")

}