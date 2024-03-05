// var idade = 16;
// if (login == LoginUser && idade == senhaUser) console.log(`não é obrigatorio`);
// console.log(`não vota`);

// function idadeDEVotacao (Podevotar,NaoPodeVotar,votoobrigatorio,votoNaoObrigatorio) {if idade}
// var idade = 16;
// function votar(idade) {
//     if (idade >= 16) console.log(`pode votar`);
//   if (idade < 16) console.log(`não pode vota`);
//   else

//   console.log(`vota`);
// }
// votar("idade");

function votar(idade) {
  idade >= 16
    ? console.log("Com sua Idade Você ja pode votar")
    : console.log("Você nao tem idade para Votar");
}
votar(13);

function votacao(idade) {
  switch (true) {
    case idade < 16:
      console.log(`voce não pode votar `);
      break;

    case idade >= 16 && idade < 18:
      console.log(`voce pode votar, mas não é obrigatorio `);
      break;

    default:
      console.log(`você pode votar`);
      break;
  }
}
votacao(18);
