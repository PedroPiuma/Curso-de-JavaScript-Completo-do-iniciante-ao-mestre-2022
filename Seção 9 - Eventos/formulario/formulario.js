window.onload = () => {
    const txtTitulo = document.querySelector('#txtTitulo')
    const txtDescricao = document.querySelector('#txtDescricao')
    const contador = document.querySelector('#contador span')
    const chkAceito = document.querySelector('#chkAceito')
    const btn = document.querySelector('#btn')
    const feedbackMessage = document.querySelector('#feedbackMessage')
    const closeFeedbackMessage = document.querySelector('#feedbackMessage button')

    btn.disabled = true
    chkAceito.addEventListener('click', () => btn.disabled = !chkAceito.checked)

    const counter = () => contador.innerHTML = txtDescricao.maxLength - txtDescricao.value.length
    txtDescricao.addEventListener('keyup', counter)

    const submit = event => {
        if (txtTitulo.value.length >= 3) alert('Formulário enviado')
        else {
            event.preventDefault()
            feedbackMessage.classList.add('show')
            console.log(closeFeedbackMessage)
            closeFeedbackMessage.addEventListener('click', () => feedbackMessage.classList.remove('show'))
        }
    }
    btn.addEventListener('click', event => submit(event))

}