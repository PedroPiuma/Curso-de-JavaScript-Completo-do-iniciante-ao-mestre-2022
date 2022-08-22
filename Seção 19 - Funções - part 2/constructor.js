// class Cachorro {
//     constructor(name) {
//         this.name = name
//         console.log(this)
//     }
// }

function Cachorro(name) {
    this.name = name
    console.log(this)
}

const rex = new Cachorro('rex')
const toto = new Cachorro('totó')

console.log(rex)
