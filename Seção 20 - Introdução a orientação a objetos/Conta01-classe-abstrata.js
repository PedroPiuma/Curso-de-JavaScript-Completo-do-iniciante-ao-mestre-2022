// Desafio conta bancária
// 1. Criar conta abstrata ContaBancária
//     - Cliente
//     - número
//     - saldo
//     - depositar
//     - sacar

class ContaBancaria {
    constructor(nome, numero) {
        if (this.constructor === ContaBancaria) {
            throw new Error('ContaBancaria é uma classe abstrata')
        }

        this.nome = nome
        this.numero = numero
        this.saldo = 0
    }

    static depositar(valor) {
        if (typeof valor === 'number') return this.saldo += valor
        else throw Error('Valor não é um número válido')
    }
    static sacar(valor) {
        if (typeof valor === 'number' && this.saldo - valor >= 0) return this.saldo -= valor
        else throw new Error('Procedimento de saque inviável')
    }
}

// Não se utiliza classes abstratas para criar objetos
// const luis = new ContaBancaria('Luís', 123456)
// console.log(luis)
// // luis.sacar(150)
// luis.depositar(1500)
// console.log(luis)
// luis.sacar(150)
// console.log(luis)


