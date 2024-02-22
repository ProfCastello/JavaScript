var nome = "Pedro Araujo";
var banco = "iti";
var numero = 23988252808;
var saldo = 1500;

console.log(
  "O Cliente",
  nome,
  "do banco",
  banco,
  "Com a conta número",
  numero,
  "esta com o saldo de R$",
  saldo
);
console.log("");

console.log("");
console.log(
  "pagamento Pix feito para Doceria Renata com sucesso! seu saldo atual e de R$",
  (saldo -= 30)
);
console.log("");
console.log(
  "pagamento Pix Feito para Word Cell com sucesso! seu saldo atual e de R$"
);
console.log(saldo -=70);
console.log("");
console.log(
  "pagamento Pix Feito para MCdonalds com sucesso! seu saldo atual e de R$"
);
console.log(saldo -=100);
console.log("");

console.log(
  "voce recebeu um Pix do Usuario Oswaldo de R$100 seu saldo atual e de R$"
);
console.log((saldo += 100));
console.log("------------------");
console.log(
  "voce recebeu um Pix da Usuaria Karina leite de R$100 seu saldo atual e de R$"
);
console.log((saldo += 100));
