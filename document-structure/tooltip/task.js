const hasTooltip = Array.from(document.querySelectorAll(".has-tooltip"))
const tooltip = document.createElement("div")
tooltip.classList.add("tooltip")

for (let item of hasTooltip) {
    item.addEventListener("click", (event) => {
        let position = item.getBoundingClientRect()

        event.preventDefault()
        item.insertAdjacentElement("afterend", tooltip)
        let attr = item.getAttribute("title")
        tooltip.textContent = attr
        tooltip.classList.toggle("tooltip_active")

        tooltip.style.top = position.bottom + 'px';
        tooltip.style.left = position.left + 'px';
    })
}

