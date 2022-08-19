window.onload = () => {
    const dateTxt = document.querySelector('#date')
    const count = document.querySelector('#count')
    const date = dateTxt.innerHTML

    const saveDateD = date.split(' ').shift().split('/')
    const saveDateH = parseInt(date.split(' ').pop())
    const aimDate = new Date(Number(saveDateD[2]), Number(saveDateD[1] - 1), Number(saveDateD[0]), saveDateH)

    const setTimer = () => {
        const dateNow = new Date()
        const timeCounting = aimDate - dateNow
        const oneDay = 24 * 60 * 60 * 1000
        const day = timeCounting / oneDay
        const hour = (day - parseInt(day)) * 60
        const min = (hour - parseInt(hour)) * 60
        const sec = (min - parseInt(min)) * 60

        count.innerHTML = `Faltam ${parseInt(day)} dia(s), ${parseInt(hour)} hora(s), ${parseInt(min)} minuto(s) e ${(sec)} segundo(s).`
    }
    setInterval(setTimer, 1000)
}
