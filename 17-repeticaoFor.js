//Laço de repetição FOR
//escrever para o usuário 1000x "Prestar mais atenção nas aulas!"

// //mostrando números pares
// for (let i = 0; i <= 1000; i += 2) {
//   console.log(i);
// }

// //mostrando números impares
// for (let i = 1; i <= 1000; i += 2) {
//   console.log(i);
// }

// //mostrando números impares com IF
// for (let i = 0; i <= 1000; i++) {
//   if (i % 2 != 0) {
//     console.log(i);
//   }
// }
// //Escreva todos os números de 1 a 20 com FOR
// for (let n = 1; n <= 20; n++) {
//   console.log(n);
// }
// //Escreva todos os números PARES entre 1 e 20 com FOR
// for (let n = 2; n <= 20; n += 2) {
//   console.log(n);
// }

// for (let n = 1; n <= 20; n++) {
//   if (n % 2 == 0) console.log(n);
// }

//Dado um vetor com números 5,6,8,14,0,9,7,2.
//Calcule e exiba a somatória de seus elementos utilizando
//FOR

// VAR = cria variável global
// CONST = cria constante, não muda
// LET = cria variável funcional dentro de um grupo de código
// tudo que está dentro de chaves é um grupo de cógido.

// const numeros = [5, 6, 8, 14, 0, 9, 7, 2];
// var somar = 0;

// for (let i = 0; i < numeros.length; i++) {
//   somar += numeros[i];
// }
// console.log(`A soma dos elementos do array é: ${somar}`);

// Dado um vetor com números 5,6,8,14,0,9,7,2.
// Multiplique todos os seus elementos por 3 utilizando o loop FOR
// Em seguida, mostre o novo vetor.

// let num = [5, 6, 8, 14, 0, 9, 7, 2];
// console.table(num);
// for (let i = 0; i < num.length; i++) {
//   num[i] *= 3;
// }

// console.table(num);

// Dada a matriz 2x3, escrever para o usuário todos os seus elementos
// com as respectivas posições da matriz
// [8,4,1]
// [3,7,8]

var matriz = [
  [8, 4, 1],
  [3, 7, 8],
];

console.table(matriz);

for (let linha = 0; linha < matriz.length; linha++) {
  for (let coluna = 0; coluna < matriz[0].length; coluna++) {
    console.log(`Matriz[${linha},${coluna}] = ${matriz[linha][coluna]}`);
  }
}

// Dada a matriz abaixo, faça um programa em JS que imprima os elementos
// da sua diagonal principal.
// 3,5,8
// 1,9,2
// 7,1,4

let matrizBaixo = [
  [3, 5, 8],
  [1, 9, 2],
  [7, 1, 4],
];

for (let mB = 0; mB < matrizBaixo.length; mB++) {
  console.log(matrizBaixo[mB][mB]);
}

for (let contador = 0; contador < 5; contador++) {
console.log(contador);
}
