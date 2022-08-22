function criarCachorro(name) {
    let posicao = 0
    return {
        name,
        latir() {
            console.log(this.name, 'está latindo')
        },
        andar(distancia) {
            posicao += distancia
            console.log(this.name, "andou", distancia, ' m')
        },
        // Get permite chamar a função como uma propriedade sem () 
        get pegaPosicao() {
            console.log(`A posição atual de ${this.name} é ${posicao}`)
            return posicao
        }
    }
}

const rex = criarCachorro("Rex")
rex.andar(10)
rex.andar(5)
// Get permite chamar a função como uma propriedade sem () 
console.log(rex.pegaPosicao)

const toto = criarCachorro('Totó')
toto.andar(20)
toto.andar(-3)
console.log(toto.pegaPosicao)

const criarCachorro2 = name => ({
    name,
    latir() {
        console.log(this.name, 'está latindo')
    },
    andar(n) { },
    comer() { }
})

