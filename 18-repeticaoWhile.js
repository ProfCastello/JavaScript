let contador = 0;

while (contador < 5) {
  console.log(contador);
  contador++;
}

//Estourando o limite do cartão - versão while

var limite = 500;
var fatura = 0;

while (fatura <= limite) {
  let gasto = Math.random() * 100; // Math.random() cria valor aleatório entre 0 e 1
  fatura += gasto;
  console.log(
    `Gastei R$ ${gasto.toFixed(2)} ------- Fatura: R$ ${fatura.toFixed(2)}`
  );
  // toFixed(2) alterar o valor mostrado para o usuário em
  // duas casas depois da virgula.
  fatura > limite && console.log(`Estourou o limite do cartão`);
  //&& faz somente um IF, sem else.
}

//Estourando o limite do cartão - versão do while
console.log(`----------------------------------------`);
var limite = 500;
var fatura = 0;

do {
  let gasto = Math.random() * 100;
  fatura += gasto;
  console.log(
    `Gastei R$ ${gasto.toFixed(2)} ------- Fatura: R$ ${fatura.toFixed(2)}`
  );

  fatura > limite &&
    console.log(`Estourou o limite do cartão em R$ ${fatura.toFixed(2)}`);
} while (fatura <= limite);
