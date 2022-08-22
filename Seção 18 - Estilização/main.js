window.onload = () => {
    const navLink = [...document.querySelectorAll('nav a')]
    const [link1, link2, link3] = navLink

    const setActive = scrollValue => {
        if (scrollValue < 1000) {
            link1.classList.add('actived')
            link2.classList.remove('actived')
            link3.classList.remove('actived')
        } else if (scrollValue < 2500) {
            link1.classList.remove('actived')
            link2.classList.add('actived')
            link3.classList.remove('actived')
        } else {
            link1.classList.remove('actived')
            link2.classList.remove('actived')
            link3.classList.add('actived')
        }
    }

    window.addEventListener('scroll', () => setActive(window.scrollY))
}
