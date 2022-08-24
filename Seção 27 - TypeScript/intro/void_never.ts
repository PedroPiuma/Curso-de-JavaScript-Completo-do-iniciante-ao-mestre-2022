function showFeedback(message: string, type: string): void {
  alert(type.toUpperCase() + ": +" + message);
  //   return 10
}

const feedback = showFeedback("Ola", "info");

function showError(message: string): never {
  throw new Error("função marcada com never nunca retorna nada");
}

const error = showError("mensagem de erro");
