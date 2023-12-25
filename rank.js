// _________________________________________________________________________________________________________
//                                          Rankeando Jogador
// _________________________________________________________________________________________________________

let jogador = "Faker";

function calcularHistorico(vitoria, derrota) {
    let acumulador = vitoria - derrota;
    return acumulador;
}

let resultado = calcularHistorico(70, 20);

function defineElo() {

    if (resultado <= 10) { console.log(`Parabéns! ${jogador}, você se manteve no rank Ferro.`) }

    else if (resultado <= 20) { console.log(`Parabéns! ${jogador}, você conquistou o rank Bronze.`) }

    else if (resultado <= 50) { console.log(`Parabéns! ${jogador}, você conquistou o rank Prata.`) }

    else if (resultado <= 80) { console.log(`Parabéns! ${jogador}, você conquistou o rank Ouro.`) }

    else if (resultado <= 90) { console.log(`Parabéns! ${jogador}, você conquistou o rank Diamente.`) }

    else if (resultado <= 100) { console.log(`Parabéns! ${jogador}, você conquistou o rank Lendário.`) }

    else if (resultado <= 101) { console.log(`Parabéns! ${jogador}, você conquistou o rank Imortal.`) }
}

console.log(defineElo())