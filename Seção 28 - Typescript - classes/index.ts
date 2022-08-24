class Animal {
  constructor(protected readonly categoria: string) {}

  mostraCategoria(): void {
    console.log(`A categoria é: ${this.categoria}`);
  }
}
class Gato extends Animal {
  nome: string;
  constructor(nome: string) {
    super("mamifero");
    this.nome = nome;
  }

  mostrarDetalhes(): void {
    console.log(this.nome, this.categoria);
    console.log(this);
  }
}

class Cachorro extends Animal {
  constructor(private _nome: string) {
    super("mamifero");
  }

  get nome() {
    console.log("get chamado");
    return this._nome;
  }

  set nome(n: string) {
    console.log("set chamado");
    this._nome = n;
  }

  mostrarDetalhes(): void {
    console.log(this._nome, this.categoria);
    console.log(this);
  }
}

const animal = new Animal("mamífero");
console.log(animal);
animal.mostraCategoria();

const mingal = new Gato("mingal");
console.log(mingal);

const toto = new Cachorro("toto");
toto.mostrarDetalhes();
toto.mostraCategoria();

class Cliente {
  readonly listaAnimais: Animal[] = [];

  adicionarAnimais(...animais: Animal[]): void {
    console.log("animais");
    console.log(...animais);
    this.listaAnimais.push(...animais);
  }
}

const daniel = new Cliente();
daniel.adicionarAnimais(toto, mingal);
console.log(daniel);
