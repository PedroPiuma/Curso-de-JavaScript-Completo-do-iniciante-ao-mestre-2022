window.onload = () => {

    // Captura todos elementos que tiverem o atributo abaixo
    let elements = [...document.querySelectorAll('[data-addclass-on-scroll]')]

    const isElementIntoView = el => {
        // O método Element.getBoundingClientRect() retorna o tamanho de um elemento e sua posição relativa ao viewport.
        let rect = el.getBoundingClientRect()
        // Retorna true se o elemento estiver no viewport

        // innerHeight = Altura (em pixels) da janela de visualização do navegador, incluindo, se renderizado, a barra de rolagem horizontal

        // return (Se o top do elemento for <= 0, saiu da pagina && O bottom do elemento estiver acima da linha de baixo do viewport, sendo >= 0) 
        // || (Top do elemento está abaixo do top, sendo >= 0 && Bottom do elemento está para fora do viewport, sendo <= innerHeight)
        return (rect.top <= 0 && rect.bottom >= 0) || (rect.top >= 0 && rect.bottom <= innerHeight)
    }

    const addClassOnScroll = event => {

        if (elements.length === 0) window.removeEventListener('scroll', addClassOnScroll)

        elements.forEach(el => {
            if (isElementIntoView(el)) {
                let delay = parseInt(el.getAttribute('data-addclass-on-scroll-delay')) || 0
                setTimeout(() => {
                    let _class = el.getAttribute('data-addclass-on-scroll')
                    el.classList.add(_class)
                    el.removeAttribute('data-addclass-on-scroll')
                    el.removeAttribute('data-addclass-on-scroll-delay')
                    elements = [...document.querySelectorAll('[data-addclass-on-scroll]')]
                }, delay)
            }
        })
    }

    window.addEventListener('scroll', addClassOnScroll)
    addClassOnScroll()
}
