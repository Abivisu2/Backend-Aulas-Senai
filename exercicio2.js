//2)- Crie uma função que retorna um objeto com a posição dos corredores de acordo com a ordem de entrada do Array, deve adicionar a posição, a medalha, (ouro, prata, bronze, sem medalha) e o nome do corredor no objeto. Esses são os corredores ["jose", "Marcos", "Maria", "Bruno", "Heitor", "Joaquina"]

const nomeCorredores = ["jose", "Marcos", "Maria", "Bruno", "Heitor", "Joaquina"];

const corredores = nomeCorredores.map((nomeCorredores, index) => {
    return entregaMedalha(nomeCorredores, index + 1);
})

console.log("Corredores", corredores);

function entregaMedalha(nomeCorredor, posicao) {

    let medalha;

    switch (posicao) {
        case 1:
            medalha = "Ouro"
            break;
        case 2:
            medalha = "Prata"
            break;
        case 3:
            medalha = "bronze"
            break;

        default:
            medalha = "Sem medalha"
        break;
    }

    return {
        "nome": nomeCorredor,
        "posicao": posicao,
        "medalha": medalha
    }
    
}
