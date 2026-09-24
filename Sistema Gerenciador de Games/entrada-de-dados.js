const prompt = require('prompt-sync')();

console.log("---------- Cadastro de Novo Recruta ----------");
let novoNome = prompt("Digite o nome do jogador: ");

let novaPontuação = Number(prompt("Digite a pontuação deste jogador: "));

console.log("O novo jogador é: ", novoNome);
console.log("Sucesso! Jogador " + novoNome + " cadastrado com " + novaPontuação + " pontos.");