const fontSizeLink = Array.from(document.querySelectorAll(".font-size"))
const book = document.querySelector(".book__content")



fontSizeLink.forEach((item) => {
    item.addEventListener('click', (event) => {
        const activeLink = fontSizeLink.find(item => item.className.includes("font-size_active"))
        event.preventDefault()
        activeLink.classList.remove("font-size_active")
        item.classList.add("font-size_active")

      
        if (item.className.includes('font-size_small')) {
            book.classList.remove("book_fs-big")
            book.classList.add("book_fs-small")
        } else if (item.className.includes('font-size_big')) {
            book.classList.remove("book_fs-small")
            book.classList.add("book_fs-big")
        } else {
            book.className = book
        }
    })
})