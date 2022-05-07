const btn = document.querySelector(".dropdown__value")
const dropdownList = document.querySelector(".dropdown__list")

btn.addEventListener('click',clickItems);
dropdownList.addEventListener('click', textList)
function clickItems() {
    dropdownList.classList.toggle('dropdown__list_active')   
}

function textList(event)  {
    event.preventDefault();
    btn.textContent = event.target.textContent
    clickItems()
}