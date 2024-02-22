//ex.01
var nome = "Gustavo";
var nasc = 1988;

console.log(nome, "nasceu em " + nasc);

var idade = 2024 - nasc;
console.log(nome, "tem", idade, "anos");

//------------------------------------
//ex.02
var c = 12;
var l = 6;
var area = c * l;
console.log("Área =", area + "cm²");

//------------------------------------
//ex.03
var altura = 5;
var volume = altura * area;
console.log("O volume é " + volume + "cm³");

//------------------------------------
//ex.04
var a = 2;
var b = 3;
var c = -1;
var delta = b ** 2 - 4 * a * c;
console.log(delta);

//------------------------------------
//ex.05
var compra = 450;
var desconto = 3 / 100; //    0.03
var valDesc = compra * desconto;
console.log(
  "Compra de R$" + compra + " - Desconto: R$" + valDesc + " | Total = R$",
  compra - valDesc
);

//------------------------------------
//ex.06
var tempo = 3.5;
var velocidade = 95;
var dist = tempo * velocidade;
console.log("Distancia percorrida é de " + dist + "km");
