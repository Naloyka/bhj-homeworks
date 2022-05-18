const reveal = Array.from(document.querySelectorAll(".reveal"))

const visible = () => {
    reveal.forEach(item => {
        const { top, bottom } = item.getBoundingClientRect()
        if (top < 0) {
            item.classList.add("reveal_active")
        } else if (bottom < window.innerHeight) {
            item.classList.add("reveal_active")
        } else {
            item.classList.remove("reveal_active")
        }
    })
}

window.addEventListener('scroll', visible)




