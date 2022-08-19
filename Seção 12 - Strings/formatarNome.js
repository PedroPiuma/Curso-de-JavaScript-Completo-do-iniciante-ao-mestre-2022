const nameFormatter = name => {
    const names = name.split(' ')
    const firstName = names.shift()
    const result = `${names.length !== 0 ? names.join(' ') + ', ' : ''}${firstName}`
    return result
}

console.log(nameFormatter('Luís'))
console.log(nameFormatter('Luís Afonso'))
console.log(nameFormatter('Luís Afonso Piúma'))
