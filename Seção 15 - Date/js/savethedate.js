window.onload = () => {
    const dateTxt = document.querySelector('#date')
    const count = document.querySelector('#count')
    const date = dateTxt.innerHTML
    const [dd, mm, yyyy] = date.split(' ').shift().split('/')
    const [h, m] = date.split(' ').pop().split('H')
    const aimDate = new Date(yyyy, mm - 1, dd, h, m)
    const oneDay = 24 * 60 * 60 * 1000
    const oneHour = oneDay / 24
    const oneMin = oneHour / 60
    const oneSec = oneMin / 60

    const setTimer = () => {
        const dateNow = new Date()
        let timeCounting = aimDate - dateNow
        const day = parseInt(timeCounting / oneDay)
        timeCounting -= oneDay * day
        const hour = parseInt(timeCounting / oneHour)
        timeCounting -= hour * oneHour
        const min = parseInt(timeCounting / oneMin)
        timeCounting -= min * oneMin
        const sec = parseInt(timeCounting / oneSec)
        count.innerHTML = `Faltam ${parseInt(day)} dia(s), ${parseInt(hour)} hora(s), ${parseInt(min)} minuto(s) e ${(sec)} segundo(s).`
    }
    setInterval(setTimer, 1000)
}
