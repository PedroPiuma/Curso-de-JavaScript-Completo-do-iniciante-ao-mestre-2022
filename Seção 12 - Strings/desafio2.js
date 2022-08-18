window.onload = () => {
    const paragraphs = [...document.querySelectorAll('.paragraph p')]
    const longParagraphs = paragraphs.filter(el => el.innerHTML.length >= 60)
    longParagraphs.forEach(el => {
        const parentElement = el.parentElement
        parentElement.classList.add('long')
        const btn = parentElement.querySelector('button')
        btn.classList.add('btnLong')
        console.log(btn)
        btn.addEventListener('click', () => parentElement.classList.remove('long'))
    })



}