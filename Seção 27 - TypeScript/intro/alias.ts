function add2(x: number, y?: number) {
  if (y === undefined) {
    return null;
  }
  return x + y;
}

type testeAlias = number | string | boolean;

const teste2 = add2(10);

let teste3: number | string | boolean;
teste3 = 10;
teste3 = "teste3";
teste3 = true;

type User = {
  nome: string;
  idade?: number;
};

const luis: User = {
  nome: "Luís",
};
const maria: User = {
  nome: "maria",
  idade: 30,
};

type Sizes = "12px" | "18px" | "24px";
const small: Sizes = "12px";
const normal: Sizes = "18px";
