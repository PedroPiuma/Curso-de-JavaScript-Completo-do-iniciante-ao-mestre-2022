window.onload = () => {
    const body = document.querySelector('body')

    window.addEventListener('scroll', (event) => {
        console.log(scrollY)
        if (scrollY >= 200) body.classList.add('fx')
        else body.classList.remove('fx')
    })

}
