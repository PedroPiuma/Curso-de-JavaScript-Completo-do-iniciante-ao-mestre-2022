// Desafio conta bancária
// /4. Agora surgiu a necessidade de Cliente ser Pessoa Física ou Juridica.
// Pessoa Física tem documento CPF e Juridica tem documento CNPJ

class Cliente {
    constructor(nome, documento, tipoDocumento) {
        if (this.constructor === Cliente) return new Error('Cliente é uma classe abstrata')
        this.nome = nome
        this.documento = documento
        this.tipoDocumento = tipoDocumento
    }
}

class PessoaFisica extends Cliente {
    constructor(nome, documento) {
        super(nome, documento, 'CPF')
        this.cpf = documento
    }
}

class PessoaJuridica extends Cliente {
    constructor(nome, documento) {
        super(nome, documento, 'CNPJ')
        this.cnpj = documento
    }
}

class ContaBancaria {
    constructor(cliente, numero) {
        if (this.constructor === ContaBancaria) throw new Error('ContaBancaria é uma classe abstrata')
        this.cliente = cliente
        this.numero = numero
        this.saldo = 0
    }

    get dadosCliente() { return `${this.cliente.nome}, ${this.cliente.tipoDocumento}: ${this.cliente.documento}` }

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

class Transferir {
    static execute(contaOrigem, contaDestino, valor) {
        if (!contaOrigem instanceof ContaBancaria || !contaDestino instanceof ContaBancaria) {
            throw new Error('Contas precisam herdar de ContaBancaria')
        }
        try {
            contaOrigem.sacar(valor)
            contaDestino.depositar(valor)
        } catch (error) {
            console.log(error.message)
        }
    }
}

const pf1 = new PessoaFisica('Luís', '001.014.554-14')
const pf2 = new PessoaFisica('Maria', '214.844.477-55')
const pj1 = new PessoaJuridica('José', '471.558.871-47')
const pj2 = new PessoaJuridica('Cleber', '787.714.744-50')
const cc1 = new ContaCorrente(pf1, 123)
const cc2 = new ContaCorrente(pf2, 231)
const cp1 = new ContaPoupanca(pf1, 345)
const cp3 = new ContaPoupanca(pj1, 345)
const cp2 = new ContaPoupanca(pj2, 233)

// console.log(cc1)
// console.log(cp1)
// console.log(cc1.dadosCliente)

cc1.depositar(1000)

Transferir.execute(cc1, cp1, 500)

console.log(cc1)
console.log(cp1)
