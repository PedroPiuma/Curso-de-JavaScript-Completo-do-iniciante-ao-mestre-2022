// document
//   .getElementById("teste")
//   ?.addEventListener("click", (e) => console.log(e));

const teste = document.getElementById("teste") as HTMLButtonElement;

teste.addEventListener("click", (e) => console.log(e));

export { teste };
