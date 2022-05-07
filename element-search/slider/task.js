const prev = document.querySelector(".slider__arrow_prev")
const next = document.querySelector(".slider__arrow_next")

const slider = Array.from(document.getElementsByClassName("slider__item"))
let idxActive;

next.onclick = () => {
    idxActive = slider.findIndex(item => item.className.includes("slider__item_active"))
    slider[idxActive].classList.remove("slider__item_active")
    idxActive++
    if (idxActive === slider.length - 1) {
        idxActive = 0
    }
    slider[idxActive].classList.add("slider__item_active")
}

prev.onclick = () => {
    idxActive = slider.findIndex(item => item.className.includes("slider__item_active"))
    slider[idxActive].classList.remove("slider__item_active")
    idxActive--
    if (idxActive === -1) {
        idxActive = slider.length - 1
    }
    slider[idxActive].classList.add("slider__item_active")
}


/*next.onclick = () => {
    for (let i = 0; i < slider.length; i++) {

        if (slider[i].className.includes("slider__item_active")) {
            slider[i].classList.remove("slider__item_active")

            if (i === (slider.length - 1)) {
                i = 0
                slider[i].classList.add("slider__item_active")
            } else {
                i++
                slider[i].classList.add("slider__item_active")
            }
        }
    }
}

prev.onclick = () => {
    for (let i = slider.length - 1; i >= 0; i--) {

        if (slider[i].className.includes("slider__item_active")) {
            slider[i].classList.remove("slider__item_active")

            if (i === 0) {
                i = slider.length - 1;
                slider[i].classList.add("slider__item_active")
            } else {
                i--
                slider[i].classList.add("slider__item_active")
            }
        }
    }
}*/

