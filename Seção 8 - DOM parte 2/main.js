window.onload = () => {
    const novaLi = document.createElement('li')
    novaLi.innerText = 'item 2'
    const ulAlvo = document.querySelector('.alvo ul')
    ulAlvo.appendChild(novaLi)

    const item3Original = document.querySelector('.original ul li:nth-child(3')

    const item1Alvo = document.querySelector('.alvo ul li:nth-child(1)')

    ulAlvo.replaceChild(item3Original, item1Alvo)

    const item3Alvo = document.querySelector('.alvo ul li')
    item3Alvo.innerText = 'item 0'

    const ulOriginal = document.querySelector('.original ul')

    item3Alvo.innerHTML = ulOriginal.innerHTML

    const item2Alvo = document.querySelector('.alvo ul li li:nth-child(2)')
    item2Alvo.remove()

    ulOriginal.querySelectorAll('li').forEach(e => e.remove())

}