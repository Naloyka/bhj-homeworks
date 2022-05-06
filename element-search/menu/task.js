const link = document.getElementsByClassName("menu__link")

for (let i = 0; i < link.length; i++) {

    link[i].onclick = () => {
        let menuSub = link[i].closest(".menu__item").querySelector('.menu_sub')
        if (menuSub !== null) {
            menuSub.classList.toggle("menu_active")
            return false
        }
    }
}
