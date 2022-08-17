const sum = (...rest) => rest.find(e => typeof e !== 'number') ? 'Parâmetro inválido' : rest.reduce((acc, el) => acc + el)
const average = (...rest) => rest.find(e => typeof e !== 'number') ? 'Parâmetro inválido' : rest.reduce((acc, el) => acc + el) / rest.length

console.log(sum(1, 5, 12, 4))
console.log(average(1, 5, 12, 4))
