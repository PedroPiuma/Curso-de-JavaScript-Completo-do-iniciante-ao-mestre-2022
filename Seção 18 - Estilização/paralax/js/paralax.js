window.onload = () => {

    const dataParalaxContainer = [...document.querySelectorAll('[data-paralax]')]

    const isGettingOut = container => {
        // console.log(container)
        // console.log(container.getBoundingClientRect())
        return container.getBoundingClientRect().top <= 0
    }

    const getNewPostion = el => {
        // Captura a velocidade setada no atribudo data-p-velocity ou seta como default .5
        const v = parseFloat(el.getAttribute('data-p-velocity')) || .5
        // Retorna o valor scrollado * a velocidade multiplicado por -1 para o número ficar positivo
        return el.getBoundingClientRect().top * v * -1
    }

    const scrollEvent = () => {

        dataParalaxContainer.forEach(e => {
            // console.log(e)
            // console.log(getComputedStyle(e))
            let originalPositionY = getComputedStyle(e).backgroundPositionY
            let originalPositionX = getComputedStyle(e).backgroundPositionX
            // console.log(originalPositionY, originalPositionX)

            if (isGettingOut(e)) {
                console.log('está saindo da tela')
                // Se estiver saindo da tela seta uma nova posição para o backgroundPositionY 
                e.style.backgroundPosition = `${originalPositionX} ${getNewPostion(e)}px`
            } else e.style.backgroundPosition = `${originalPositionX} 0px`
        })
    }

    window.addEventListener('scroll', scrollEvent)

}
