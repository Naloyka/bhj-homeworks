let deadHole = document.getElementById("dead")
let notDeadhole = document.getElementById("lost")

for (let i = 1; i < 10; i++) {
    let activeHole = document.getElementById("hole" + i)

    activeHole.onclick = () => {
        if (activeHole.className.includes('hole_has-mole')) {
            let victory = deadHole.textContent
            victory++
            deadHole.textContent = victory

            if (victory === 10) {
                alert("Вы выиграли")
                location.reload()
            }

        } else {
            let defeat = notDeadhole.textContent
            defeat++
            notDeadhole.textContent = defeat

            if (defeat === 5) {
                alert("Вы проиграли")
                location.reload()
            }
        }
    }
}