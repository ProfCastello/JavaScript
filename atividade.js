//01-Criar array
var frutas = ["Banana", "Maçã", "Pera", "Uva", "Morango"];
console.table(frutas);

//02-adicionar Tangerina
frutas.push("Tangerina");
console.table(frutas);

//03-Adicionar Goiaba no inicio]
frutas.unshift("Goiaba");
console.table(frutas);

//04-Mostrar indice 5
console.log(frutas[5]);

//05-Excluir Uva
// frutas.splice(4, 1);

var position = frutas.indexOf("Uva");
console.log(position);
frutas.splice(position, 1);
console.table(frutas);

//Cópia de array
var copia = frutas.slice(2, 5);
console.table(copia);

//crie e imprima 5 elementos numericos

var number = [5, 4, 3, 2, 1];
console.table(number);

//imprimir o 3 elemento
console.log(number[2]);

//copia do vetor
var copiaNumber = number.slice();
console.table(copiaNumber);

//dobro do original
copiaNumber[0] = number[0] * 2;
copiaNumber[1] = number[1] * 2;
copiaNumber[2] = number[2] * 2;
copiaNumber[3] = number[3] * 2;
copiaNumber[4] = number[4] * 2;
console.table(copiaNumber);

console.log("------------------------");
//crie uma matriz 3x3
var matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.table(matriz);

//Exibir ao usuário valores das diagonais (4)
console.log(matriz[0][0], matriz[1][1], matriz[2][2]);
console.log(matriz[0][2], matriz[1][1], matriz[2][0]);
console.log(matriz[2][0], matriz[1][1], matriz[0][2]);
console.log(matriz[2][2], matriz[1][1], matriz[0][0]);

// Crie um sistema de cadastro de usuário contendo uma única variável,
// onde os itens abaixo fiquem na respectiva ordem:
// Nome
// Idade
// Cor Favorita
// Fruta Favorita
// Endereço
// Nome do Pet

// Exiba ao usuário os seguintes itens:

// Olá "Fulano"! Seja bem-vindo ao nosso sistema.
// Você mora no endereço "Endereço", e tem um pet chamado "pet".
// Sua idade é "idade" e gosta muito da fruta "fruta".
// Sua cor favorita é "Cor Favorita".
var user = ["Gustavo", 35, "Vermelho", "Maçã", "Rua da minha casa", "Loki"];

console.log(`Olá ${user[0]}! Seja bem-vindo ao nosso sistema.`);
console.log(`Você mora no endereço: ${user[4]}, e tem um pet chamado ${user[5]}.`);
console.log(`Sua idade é ${user[1]} e gosta muito da fruta ${user[3]}.`);
console.log(`Sua cor favorita é ${user[2]}.`);
