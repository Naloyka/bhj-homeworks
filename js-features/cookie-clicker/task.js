const cookie = document.getElementById("cookie")

cookie.onclick = function () {
    let clickCount = document.getElementById("clicker__counter")
    let count = parseInt(clickCount.textContent);
    count++;
    clickCount.textContent = count;

    if (count % 2 === 0) {
        cookie.width = "230"
    } else {
        cookie.width = "200"
    }
}