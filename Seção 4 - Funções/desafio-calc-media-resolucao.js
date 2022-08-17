// Desafio aula 64

(function () {
    function calcularMedia() {
        let total = 0
        let qtd = arguments.length
        for (let i = 0; i < qtd; i++) {
            if (typeof arguments[i] !== 'number') {
                throw Error('Only numbers')
            }
            total += arguments[i]
        }
        return total / qtd || 0
    }


    // console.log(calcularMedia(1, '2', 32, 3, 4, 5, 5))
    console.log(calcularMedia(1, 2))
    console.log(calcularMedia())
})()


