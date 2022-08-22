class Animal {
    constructor(tipo) {
        if (tipo) this.tipo = tipo
    }

    obterTipo() {
        return this.tipo
    }

}

// Não funcionou a herança
// Animal.prototype.tipo = 'Desconhecido'

let animal = new Animal('anfíbio')
let sapo = new Animal()
console.log(animal)
console.log(sapo)


class Gato extends Animal {
    constructor(nome) {
        super('Mamífero')
        this.nome = nome
    }
}

const atena = new Gato('Atena')
console.log(atena)
