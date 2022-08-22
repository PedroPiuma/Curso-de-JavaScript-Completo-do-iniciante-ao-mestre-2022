class Pessoa {
    constructor(arr) {
        this.arr = [...arr]
    }

    get usuarios() {
        return arr
    }

    get usuario() {
        return arr[arr.length]
    }
}

const pessoa1 = new Pessoa(['Luís', 'João', 'José'])
console.log(pessoa1)
console.log(pessoa1.usuarios)
