window.onload = () => {
    const paragraphs = [...document.querySelectorAll('.paragraph p')]
    const longParagraphs = paragraphs.filter(el => el.innerHTML.length >= 60)

    longParagraphs.forEach(el => {
        const parentElement = el.parentElement
        const btn = parentElement.querySelector('.btn')
        parentElement.classList.add('long')
        btn.classList.add('visible')

        btn.addEventListener('click', () => parentElement.classList.value.includes('long') ? parentElement.classList.remove('long') : parentElement.classList.add('long'))

    })

}
