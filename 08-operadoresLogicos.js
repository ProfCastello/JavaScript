//Operadores Lógicos
var manha = true;
var sono = true;

console.log("---------------------------");
console.log("Manhã:", manha, "| Estou com sono?", sono);

console.log("Está de manhã E estou com sono?(&&):", manha && sono); //comparando se é de manhã E estou com sono
console.log("Está de manhã OU estou com sono?(||):", manha || sono);//comparando se é de manhã OU estou com sono

sono = false
console.log("---------------------------");
console.log("Manhã:", manha, "| Estou com sono?", sono);
console.log("Está de manhã E estou com sono?(&&):", manha && sono); //comparando se é de manhã E estou com sono
console.log("Está de manhã OU estou com sono?(||):", manha || sono);//comparando se é de manhã OU estou com sono

manha = false
console.log("---------------------------");
console.log("Manhã:", manha, "| Estou com sono?", sono);
console.log("Está de manhã E estou com sono?(&&):", manha && sono); //comparando se é de manhã E estou com sono
console.log("Está de manhã OU estou com sono?(||):", manha || sono);//comparando se é de manhã OU estou com sono
