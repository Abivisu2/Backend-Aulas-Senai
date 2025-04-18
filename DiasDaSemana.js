//2) Crie uma função para que escreva os dias da semana a partir do numeral (1 a 7), recebido por parametro.

function DiasDaSemana(numero) {
    
    const Dias = [
        "Domingo",
        "Segunda-feira",
        "Terça-feira",
        "Quarta-feira",
        "Quinta-feira",
        "Sexta-feira",
        "Sábado"
    ]

    if(numero > 1 & numero <= 7){
        return Dias[numero - 1]
    }else{
        return "Número inválido. Digite um valor de 1 a 7.";
    }
}

console.log(DiasDaSemana(2))
console.log(DiasDaSemana(4))
console.log(DiasDaSemana(0))
console.log(DiasDaSemana(2))

