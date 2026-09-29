const prompt = require("prompt-sync")();

let time = [];
let continuar = true;

while (continuar === true) {
    let opcao = prompt("Digite sua opção: 1 (Cadastrar), 2 (Deletar) ou 3 (Sair): ");
    if (opcao === "1") {
        let nomeJogador = prompt("Digite o nome do jogador: ");

        time. push(nomeJogador);
        console.log("Jogador " + nomeJogador + " foi cadastrado com sucesso!");
        console.log("O seu time atual é: ", time);
        console.log("-------------------------------------------------");
    } else if (opcao === "2") {
        if (time.length === 0) {
            console.log("Nenhum jogador cadastrado.")
            continue;
        }

        let nomeDeletado = prompt("Digite o nome a ser deletado: ");
        let index = time.indexOf(nomeDeletado);

        if (index === -1) {
            console.log("Jogador não encontrado.");
            continue;
        }

        time.splice(index, 1);
        console.log("O seu time atual é: ", time);
        console.log("-------------------------------------------------");

    } else if (opcao === "3") {
        continuar = false;
    } else {
        console.log("Opção invalida, digite outra opção... ");
    }

    
}