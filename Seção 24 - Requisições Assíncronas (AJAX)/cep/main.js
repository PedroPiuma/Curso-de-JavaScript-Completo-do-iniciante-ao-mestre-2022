window.onload = () => {

    const inputCEP = document.querySelector('#inputCEP')
    const inputLogradouro = document.querySelector('#inputLogradouro')
    const inputNumero = document.querySelector('#inputNumero')
    const inputBairro = document.querySelector('#inputBairro')
    const inputCidade = document.querySelector('#inputCidade')
    const inputEstado = document.querySelector('#inputEstado')


    const setData = (data) => {
        const { bairro, complemento, localidade, logradouro, uf } = data
        inputLogradouro.value = logradouro
        inputNumero.value = complemento
        inputBairro.value = bairro
        inputCidade.value = localidade
        inputEstado.value = uf
    }

    const chkCEP = event => {
        const request = async () => {
            try {
                const response = await fetch(`https://viacep.com.br/ws/${event.target.value}/json/`)
                const responseText = await response.text()
                const data = JSON.parse(responseText)
                console.log(data)
                setData(data)
                return data
            } catch (error) {
                console.log(error.message)
                alert('Parâmetros de busca inválidos')
            } finally {
                event.target.disabled = false
            }
        }

        if (event.target.value.length === 8) {
            event.target.disabled = true
            request()
        }


    }
    inputCEP.addEventListener('keyup', chkCEP)
}

