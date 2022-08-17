window.onload = () => {
    const name = prompt('Qual seu nome?')
    const welcome = document.querySelector('.top-bar p')
    welcome.innerHTML += name
}