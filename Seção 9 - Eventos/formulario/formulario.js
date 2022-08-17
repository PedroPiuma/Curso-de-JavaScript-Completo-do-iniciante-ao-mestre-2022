window.onload = () => {
    const txtTitulo = document.querySelector('#txtTitulo')
    const txtDescricao = document.querySelector('#txtDescricao')
    const contador = document.querySelector('#contador span')
    const chkAceito = document.querySelector('#chkAceito')
    const btn = document.querySelector('#btn')

    btn.disabled = true
    chkAceito.addEventListener('click', () => btn.disabled = !chkAceito.checked)

    const counter = () => contador.innerHTML = txtDescricao.maxLength - txtDescricao.value.length

    txtDescricao.addEventListener('keyup', counter)

}