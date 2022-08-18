const telefone = '91234-2345'
const telefone2 = '1234-2345'

const mascaraTelefone = telefone => {
    const separados = telefone.split('-')
    const primeiro = separados[0].slice(0, 1)
    const ultimos = separados[1].slice(2)
    const mascara = primeiro.padEnd(separados[0].length, '*') + '-' + ultimos.padStart(separados[1].length, '*')
    return console.log(mascara)
}

mascaraTelefone(telefone)
mascaraTelefone(telefone2)
