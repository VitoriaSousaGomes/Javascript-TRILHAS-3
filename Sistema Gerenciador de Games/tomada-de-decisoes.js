const prompt = require('prompt-sync')();

let nome = prompt("Nome do jogador: ");
let pontuação = Number(prompt("Pontuação: "));
let pontuaçãoMinima = 1000;

console.log("Analizando perfil...");

if(pontuação >= pontuaçãoMinima) {
    console.log("APROVADO!! " + nome + " tem nível para a equipe principal.");
} else {
    let pontosFaltantes = pontuaçãoMinima - pontuação;
    console.log("REPROVADO! faltam " + pontosFaltantes + " pontos para entrar no time.");
}