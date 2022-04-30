const timer = setInterval(function () {
    let currentMeaning = document.getElementById("timer");
    let textMeaning = currentMeaning.textContent;
    let count = parseInt(textMeaning)
    
    count--;
    currentMeaning.textContent = count;

    if (count === 0) {
        clearInterval(timer)
        alert("Вы победили в конкурсе")
    }   
}, 1000)

