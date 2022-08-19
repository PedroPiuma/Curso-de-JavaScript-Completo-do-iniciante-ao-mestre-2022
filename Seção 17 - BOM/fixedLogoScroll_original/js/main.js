window.onload = () => {
    const body = document.querySelector('body')

    window.addEventListener('scroll', (event) => {
        console.log(scrollY)
        if (pageXOffset >= 200) body.classList.add('fx')
    })

}
