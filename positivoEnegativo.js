// 1- Crie uma função para receber um número e retornar se é positivo, negativo ou zero.

const numero = 10

function AnalisarNumero() {
    if (numero > 0){

        console.log("O número é positivo!", numero)

    } else if ( numero < 0){

        console.log("O número é negativo", numero)

    }else{  

        console.log("O número é zero", numero)

    }
}

AnalisarNumero()