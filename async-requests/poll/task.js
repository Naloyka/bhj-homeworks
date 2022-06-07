const pollTitle = document.getElementById("poll__title")
const pollAnswers = document.getElementById("poll__answers")

let xhr = new XMLHttpRequest()

xhr.open("GET", 'https://netology-slow-rest.herokuapp.com/poll.php')
xhr.send()

console.log(xhr)

xhr.addEventListener("readystatechange", () => {
    if (xhr.readyState === xhr.DONE) {

        let response = JSON.parse(xhr.responseText).data
        let arrAnswers = response.answers
        pollTitle.insertAdjacentText('afterbegin', response.title)
    
        for (let item of arrAnswers) {
            let html = `<button class="poll__answer">
            ${item}
          </button>`
            pollAnswers.insertAdjacentHTML('afterbegin', html)
        }
    }
})