// 🧩 Exercício: Relatório de Funcionários Ativos
// 💼 Cenário:
// Você recebeu um array com dados de funcionários de uma empresa. Cada funcionário tem:
// nome, idade, salário, ativo (boolean)
// Seu objetivo é gerar um relatório final com os nomes dos funcionários ativos, com salários ajustados com bônus de 10%, e exibir uma mensagem personalizada no console para cada um.
// 🧪 Requisitos:
// Filtrar apenas os funcionários ativos
// Mapear os funcionários para aplicar um bônus de 10% no salário
// ForEach para exibir no console uma mensagem do tipo:
// Parabéns, João! Seu novo salário com bônus é R$5500.00
// 📥 Dados de entrada:

const funcionarios = [
  { nome: 'João', idade: 30, salario: 5000, ativo: true },
  { nome: 'Ana', idade: 22, salario: 3200, ativo: false },
  { nome: 'Carlos', idade: 28, salario: 4000, ativo: true },
  { nome: 'Marina', idade: 35, salario: 6000, ativo: false },
  { nome: 'Fernanda', idade: 25, salario: 3800, ativo: true }
];

const filtrarFuncionarios = funcionarios.filter(funcionario => funcionario.ativo)
// console.log("funcionarios filtrados", filtrarFuncionarios)

const aplicarDesconto = filtrarFuncionarios.map((funcionario) => {
    calculoBonus = funcionario.salario * 0.1
    salarioFinal = (funcionario.salario + calculoBonus).toFixed(2)
    return {
        nome: funcionario.nome,
        idade: funcionario.idade,
        salarioComBonus: salarioFinal,
        ativo: funcionario.ativo
    }
})
// console.log("funcionarios mapeados e com bônus", aplicarDesconto)

const exibirFuncionariosComDesconto = aplicarDesconto.forEach((funcionario) => {
    console.log(`Parabéns, ${funcionario.nome}! Seu novo salário com bônus é ${funcionario.salarioComBonus}`)
})

