function add(x: number, y: number): number {
  return x + y;
}

const multiply = (x: number, y: number) => {
  return x * y;
};

const subtract: (x: number, y: number) => number = (x, y) => x - y;
let teste = subtract(3, 1);

type Users = {
  name: string;
  id: number;
};

type Admin = {
  isAdmin: true;
  level: "teacher" | "coordenator" | "manager";
};

type UserAdmin = Users & Admin;

let jose: UserAdmin = {
  name: "Luis",
  isAdmin: true,
  id: 0,
  level: "coordenator",
};

type IsAdmin = (user: Users) => boolean;

const isAdmin: IsAdmin = (user) => !!(user as UserAdmin).isAdmin;
console.log(isAdmin(jose)); // true

let maria: Users = {
  name: "maria",
  id: 1,
};

export default 2;
