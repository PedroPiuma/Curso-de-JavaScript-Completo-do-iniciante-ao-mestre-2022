function getset() {
    let _quantidade = 0
    let _contador = 0

    this.produto = {
        get quantidade() {
            console.log(`Quantidade foi consultada ${++_contador} vez${_contador > 1 ? 'es' : ''}`)
            return _quantidade
        },
        set quantidade(valor) {
            if (valor > 0) {
                _quantidade = valor
            }
        }
    }
}
getset()

produto.quantidade = 20
console.log(produto.quantidade)
produto.quantidade = 22
console.log(produto.quantidade)
produto.quantidade = 23
console.log(produto.quantidade)
