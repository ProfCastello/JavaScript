//funçao retorno de idade
function idade(anoNascimento) {
  return 2024 - anoNascimento;
}
var nome = "Gustavo";
console.log(`Olá, eu sou ${nome} e tenho ${idade(1988)} anos de idade!`);

// Crie uma função que receba a quantidade de combus-
// tivel de um carro e retorne quantos Kms ele pode
// viajar com esse combustível. Considere que o
// veiculo faz uma média de 12 Kms/L.

function mediaCombustivel(combustivel, kml) {
  return combustivel * kml;
}

console.log(`Carro 1: 20L -> Percorre ${mediaCombustivel(20, 12)}kms.`);
console.log(`Carro 2: 8L -> Percorre ${mediaCombustivel(8, 12)}kms.`);
console.log(`Carro 3: 2L -> Percorre ${mediaCombustivel(2, 12)}kms.`);
