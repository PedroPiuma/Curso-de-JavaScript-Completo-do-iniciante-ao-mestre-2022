// Desafio conta bancária
// 3. criar classe Cliente e compor as classes concretas
//   - nome
//   - documento

class Cliente {
    constructor(nome, documento) {
        this.nome = nome
        this.documento = documento
    }
}

class ContaBancaria {
    constructor(cliente, numero) {
        if (this.constructor === ContaBancaria) throw new Error('ContaBancaria é uma classe abstrata')
        this.cliente = cliente
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
    constructor(cliente, numero, limite) {
        super(cliente, numero)
        this.limite = limite || 500
    }
}

class ContaPoupanca extends ContaBancaria {
    constructor(cliente, numero) {
        super(cliente, numero)
        this.aniversario = Date.now()
    }
}

const cliente1 = new Cliente('Luís', 04747447520)
const cc1 = new ContaCorrente((cliente1), 123456)
// cc1.sacar(150)
cc1.depositar(1500)
cc1.sacar(150)
console.log(cc1)

console.log('--------------')

const cp1 = new ContaPoupanca(cliente1, 123456)
// cp1.sacar(150)
cp1.depositar(1500)
cp1.sacar(150)
console.log(cp1)
