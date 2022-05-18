const rotator = Array.from(document.querySelectorAll('.rotator__case'))

setInterval(() => {
    let activeElement = rotator.findIndex(item => item.className.includes("rotator__case_active"))
    rotator[activeElement].classList.remove("rotator__case_active")
    activeElement++
    rotator[activeElement].classList.add("rotator__case_active")
    if (activeElement === (rotator.length - 1)) {
        activeElement = 0;
        rotator[activeElement].classList.add("rotator__case_active")
    }
}, 1000)

