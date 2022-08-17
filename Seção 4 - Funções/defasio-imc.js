// Desafio aula 66

// const imc = (peso, altura) => {
//     if (typeof peso !== 'number' || typeof altura !== 'number') return 'Falha nos valores'
//     const result = (peso / altura ** 2).toFixed(1)
//     return Number(result)
// }

// // console.log(imc(81, 1.76))
// // console.log(imc(81, '1.76'))
// // console.log(imc())

const imcClass = imc => {
    if (typeof imc !== 'number') return 'Parâmetro inválido'
    if (imc < 17) return 'Muito abaixo do peso'
    else if (imc < 18.5) return 'Abaixo do peso'
    else if (imc < 25) return 'Peso normal'
    else if (imc < 30) return 'Acima do peso'
    else if (imc < 35) return 'Obesidade grau I'
    else if (imc <= 40) return 'Obesidade grau II'
    else if (imc > 40) return 'Obesidade grau III'
}

// console.log(imcClass(16.8))
// console.log(imcClass(imc(81, 1.76)))

const imc = (peso, altura) => {
    if (typeof peso !== 'number' || typeof altura !== 'number') return 'Falha nos valores'
    const result = (peso / altura ** 2).toFixed(1)
    return imcClass(Number(result))
}

console.log(imc(81, 1.76))
