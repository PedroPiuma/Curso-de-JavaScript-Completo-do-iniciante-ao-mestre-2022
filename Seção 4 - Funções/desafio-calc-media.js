// 1    '

const calcularMedia = (...rest) => {
    if (!rest.length || rest.find(e => typeof e !== 'number')) return console.log(0)
    const result = (rest.reduce((acc, elem) => acc + elem) / rest.length).toFixed(2)
    return console.log(result)
}

calcularMedia(1, '2', 32, 3, 4, 5, 5)
calcularMedia(1, 2)
calcularMedia()

