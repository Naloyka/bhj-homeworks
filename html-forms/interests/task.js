const checkedGroups = Array.from(document.querySelectorAll(".interest__check"))

for (let item of checkedGroups) {
    let parentCheck = item.closest('.interest')
    const allInterest = Array.from(parentCheck.querySelectorAll('.interest__check'));

    if (item.closest(".interests_active") === null) {
        item.addEventListener("change", () => {
            if (item.checked === true) {
                allInterest.forEach(el => {
                    el.checked = true
                })
            } else {
                allInterest.forEach(el => {
                    el.checked = false
                })             
            }
        })
    }
}