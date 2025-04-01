// Revisão sobre Declaração de variáveis e condicionais

const pessoa = {

    nome: "Marcos",
    sobrenome: "Bruno",
    altura: 1.81,
    peso: 105

}

console.log("Antes", pessoa)

pessoa.sobrenome = "Silva"
pessoa.altura = 1.70

console.log("Depois", pessoa)

// const media = {valor: 8}

// media.valor = 10

// console.log(media)

// if - else - switch - case

if (true) {
    console.log("true")
}


if (false) {

    console.log("true")

}else{
    console.log("false")
}

 const mes = "março"
switch (mes) {

    case "Fevereiro":
    console.log("Fevereiro");
        break;
    case "Janeiro":
    console.log("Janeiro");
        break;
    default:
        console.log("Não localizado!");
        break;
}



