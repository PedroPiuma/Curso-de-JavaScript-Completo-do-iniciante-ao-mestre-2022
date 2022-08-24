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
