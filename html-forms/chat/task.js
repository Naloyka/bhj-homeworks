const chatWidgetSide = document.querySelector(".chat-widget__side")
const chatWidget = document.querySelector(".chat-widget")
const chatWidgetInput = document.querySelector(".chat-widget__input")
const chatWidgetMessages = document.querySelector(".chat-widget__messages")

const messagesRobot = [
    "К сожалению, все операторы заняты. Напишите нам позже",
    "Нам некогда с Вами разговаривать. Напишите нам позже",
    "Представьтесь, пожалуйста",
    "До свидания!",
    "Вы еще не купили ни одного товара, чтобы так с нами разговаривать",
    "Мы ничего Вам не предоставим"
];

chatWidgetSide.addEventListener("click", () => {
    chatWidget.classList.add("chat-widget_active")
})

chatWidgetInput.addEventListener("keydown", (e) => {
    let randomMessage = Math.ceil(Math.random() * messagesRobot.length) - 1
    let time = new Date;
    if (time.getHours < 10) {
        time.getHours = "0" + time.getHours
    }
    if (time.getMinutes < 10) {
        time.getMinutes = "0" + time.getMinutes
    }
    let nowDate = time.getHours() + " : " + time.getMinutes()

    if (e.key === "Enter") {
        if (chatWidgetInput.value) {

            chatWidgetMessages.innerHTML += `<div class="message message_client">
            <div class="message__time">${nowDate}</div>
            <div class="message__text">${chatWidgetInput.value}</div></div>`

            setTimeout(() => {
                chatWidgetMessages.innerHTML += `<div class="message">
                <div class="message__time">${nowDate}</div>
                <div class="message__text">${messagesRobot[randomMessage]}</div></div>`
            }, 700)

            chatWidgetInput.value = ""
        }
    }
})