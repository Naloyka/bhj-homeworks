let textArea = document.getElementById("editor")


textArea.addEventListener("input", () => {
    localStorage.setItem("text", textArea.value)

})

textArea.value = localStorage.getItem("text")
