const loader = document.getElementById("loader")
const items = document.getElementById('items')
const itemCode = document.querySelector(".item__code")

let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/')
xhr.send()


xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE) {
        loader.classList.remove("loader_active")


        let response = JSON.parse(xhr.responseText).response.Valute
        console.log(response)
        for (let valute in response) {

            let charCode = response[valute].CharCode;
            let value = response[valute].Value


            let html = `<div class="item">
                <div class="item__code">${charCode}</div>
                <div class="item__value">${value}</div>
                <div class="item__currency">руб.</div>
            <\div>`
            items.insertAdjacentHTML('afterBegin', html)
        }
    }
}
)