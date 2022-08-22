// Desafio conta bancária
// 2. Criar duas classes que herdam de ContaBancaria
// - ContaCorrente
//     - limite
//     - sacar(valor)
//   - ContaPoupanca
//     - aniversario
//     - sacar(valor)

class ContaBancaria {
    constructor(nome, numero) {
        if (this.constructor === ContaBancaria) {
            throw new Error('ContaBancaria é uma classe abstrata')
        }

        this.nome = nome
        this.numero = numero
        this.saldo = 0
    }

    depositar(valor) {
        if (typeof valor === 'number') return this.saldo += valor
        else throw Error('Valor não é um número válido')
    }
    sacar(valor) {
        if (typeof valor === 'number' && valor <= this.saldo) return this.saldo -= valor
        else throw new Error('Procedimento de saque inviável')
    }
}

class ContaCorrente extends ContaBancaria {
    constructor(nome, numero, limite) {
        super(nome, numero)
        this.limite = limite || 500
    }
}

class ContaPoupanca extends ContaBancaria {
    constructor(nome, numero) {
        super(nome, numero)
        this.aniversario = Date.now()
    }
}

const cc1 = new ContaCorrente('Luís', 123456)
// cc1.sacar(150)
cc1.depositar(1500)
cc1.sacar(150)
console.log(cc1)

console.log('--------------')

const cp1 = new ContaPoupanca('Luís', 123456)
// cp1.sacar(150)
cp1.depositar(1500)
cp1.sacar(150)
console.log(cp1)
