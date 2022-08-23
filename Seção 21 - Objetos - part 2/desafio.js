
let usuarios = []
class Pessoa {
    get usuarios() { return usuarios }
    get usuario() { return usuarios[usuarios.length - 1] }
    // Se o indexOf não encontrar index do elemento passado por parâmetro ele retorna -1
    set usuario(usuario) { usuarios.indexOf(usuario) < 0 ? usuarios.push(usuario) : '' }
}

const pessoa = new Pessoa
pessoa.usuario = 'Luís'
pessoa.usuario = 'José'
pessoa.usuario = 'Alfredo'
pessoa.usuario = 'Breno'
pessoa.usuario = 'Breno'
pessoa.usuario = 'Breno'
console.log(pessoa.usuario)
console.log(pessoa.usuarios)
