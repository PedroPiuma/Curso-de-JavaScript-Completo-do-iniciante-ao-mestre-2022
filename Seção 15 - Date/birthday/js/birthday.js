window.onload = () => {
    let thisYear = new Date().getFullYear()
    console.log(thisYear)
    const checkBirthday = e => {
        const container = document.getElementById("quantoFalta")
        const arr = e.target.value.split("-")
        if (arr.length > 2) container.innerHTML = `<p>Falta(m) ${quantoFaltaPara(arr)} dias para o seu aniversario</p>`
        else container.textContent = "  "
    }

    document.getElementById("txtnascimento").addEventListener("change", checkBirthday)
    const quantoFaltaPara = arr => {
        const [yyyy, mm, dd] = arr
        const aimDate = new Date(thisYear, mm - 1, dd)
        const dateNow = new Date()
        const oneDay = 24 * 60 * 60 * 1000
        let timeCounting = aimDate.getTime() - dateNow.getTime()
        const day = timeCounting / oneDay
        const result = Math.ceil(day)
        if (result < 0) {
            thisYear++
            return quantoFaltaPara(arr)
        } else return result
    }

}
